import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'
import { createAppRouter } from './router'
import { i18n } from './i18n'
import { buildHeadData } from './seo'
import { activeServiceSlugs } from './content/services'

// Only the currently-active service slugs get prerendered/sitemapped.
// Deprecated slugs (firstbit, bitrix24, accounting-systems, training,
// vat-cit-filing) stay in the content data but redirect away in the
// router, so they're deliberately excluded here too.
export const serviceSlugs: string[] = [...activeServiceSlugs]

/**
 * Called once per URL by scripts/prerender.mjs (Node, not a browser).
 * Renders the app for `url` to an HTML string, plus the <head> tags for
 * that specific page (title/description/OG/JSON-LD).
 */
export async function render(url: string): Promise<{ appHtml: string; headHtml: string; lang: 'en' | 'ru' }> {
  const router = createAppRouter()

  await router.push(url)
  await router.isReady()

  const app = createSSRApp(App)
  app.use(i18n)
  app.use(router)

  const appHtml = await renderToString(app)
  const { html: headHtml, lang } = buildHeadData(router.currentRoute.value, i18n as never)

  return { appHtml, headHtml, lang }
}