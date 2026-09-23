// Runs after `vite build` (client -> dist/) and `vite build --ssr` (server
// -> dist-ssr/entry-server.js). For every route it renders the app to an
// HTML string in Node and writes a real dist/<route>/index.html, so Nginx
// serves finished pages instead of an empty SPA shell.
import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const rootDir = fileURLToPath(new URL('..', import.meta.url))
const distDir = join(rootDir, 'dist')
const ssrEntryPath = join(rootDir, 'dist-ssr', 'entry-server.js')

const { render, serviceSlugs } = await import(pathToFileURL(ssrEntryPath).href)

const locales = ['en', 'ru']

const routes = []
for (const locale of locales) {
  routes.push(`/${locale}`)
  routes.push(`/${locale}/contact`)
  routes.push(`/${locale}/parse-ledger`)
  for (const slug of serviceSlugs) {
    routes.push(`/${locale}/services/${slug}`)
  }
}

const template = await readFile(join(distDir, 'index.html'), 'utf-8')

if (!template.includes('<!--app-html-->') || !template.includes('<!--seo-start-->')) {
  throw new Error(
    'dist/index.html is missing the "<!--app-html-->" / "<!--seo-start-->..<!--seo-end-->" markers the prerender step relies on.',
  )
}

let ok = 0
const failed = []

for (const url of routes) {
  try {
    const { appHtml, headHtml, lang } = await render(url)

    let html = template
      .replace('<!--app-html-->', appHtml)
      .replace(/<!--seo-start-->[\s\S]*<!--seo-end-->/, headHtml)
      .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)

    const outFile = join(distDir, url.replace(/^\//, ''), 'index.html')
    await mkdir(dirname(outFile), { recursive: true })
    await writeFile(outFile, html, 'utf-8')
    ok += 1
  } catch (err) {
    failed.push({ url, err })
  }
}

// The bare domain ("/") is served by dist/index.html directly (Nginx's
// `index index.html` + exact-match try_files), so it should carry the
// fully rendered /en page too, not the empty SPA shell.
await copyFile(join(distDir, 'en', 'index.html'), join(distDir, 'index.html'))

console.log(`Prerendered ${ok}/${routes.length} routes.`)
if (failed.length) {
  for (const { url, err } of failed) {
    console.error(`  FAILED ${url}:`, err)
  }
  process.exitCode = 1
}