// Regenerates dist/sitemap.xml from the same route list prerender.mjs
// uses, so it can never drift out of sync with the site's real pages
// (this is what caused the old static sitemap.xml to list deprecated
// service slugs and miss several current ones).
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const rootDir = fileURLToPath(new URL('..', import.meta.url))
const distDir = join(rootDir, 'dist')
const ssrEntryPath = join(rootDir, 'dist-ssr', 'entry-server.js')

const { serviceSlugs } = await import(pathToFileURL(ssrEntryPath).href)

const SITE_URL = 'https://parseconsult.ae'

/** @type {{ path: string; priority: string; changefreq: string }[]} */
const pages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/parse-ledger', priority: '0.8', changefreq: 'monthly' },
  ...serviceSlugs.map((slug) => ({ path: `/services/${slug}`, priority: '0.9', changefreq: 'monthly' })),
]

const locales = ['en', 'ru']

const urlEntry = ({ path, priority, changefreq }) => {
  const alternates = locales
    .map((loc) => `    <xhtml:link rel="alternate" hreflang="${loc}" href="${SITE_URL}/${loc}${path}"/>`)
    .join('\n')
  return locales
    .map(
      (loc) => `  <url>
    <loc>${SITE_URL}/${loc}${path}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en${path}"/>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
    )
    .join('\n')
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(urlEntry).join('\n')}
</urlset>
`

await writeFile(join(distDir, 'sitemap.xml'), xml, 'utf-8')
console.log(`sitemap.xml written with ${pages.length * locales.length} URLs.`)