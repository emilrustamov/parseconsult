import type { RouteLocationNormalizedLoaded, Router } from 'vue-router'
import { unref, watch } from 'vue'
import type { Composer } from 'vue-i18n'

type I18nInstance = { global: Composer }
import { socialLinkDefs } from '@/socialLinks'
import { SITE_CONTACT_EMAIL } from '@/siteContact'
import { getServiceContent } from '@/content/services'

const SITE_URL = 'https://parseconsult.ae'
const DEFAULT_IMAGE = `${SITE_URL}/logo.svg`

type SeoMeta = {
  title: string
  description: string
  path: string
  robots?: 'index,follow' | 'noindex,follow'
}

const upsertMetaTag = (
  name:
    | 'description'
    | 'robots'
    | 'author'
    | 'twitter:card'
    | 'twitter:title'
    | 'twitter:description'
    | 'twitter:image'
    | 'og:title'
    | 'og:description'
    | 'og:type'
    | 'og:url'
    | 'og:image'
    | 'og:site_name'
    | 'og:locale',
  content: string
): void => {
  const selector = name.startsWith('og:') ? `meta[property="${name}"]` : `meta[name="${name}"]`
  const attributeName = name.startsWith('og:') ? 'property' : 'name'
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attributeName, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

const upsertHreflang = (hreflang: string, href: string): void => {
  const id = `hreflang-${hreflang}`
  let el = document.head.querySelector<HTMLLinkElement>(`link[data-seo-id="${id}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'alternate')
    el.setAttribute('data-seo-id', id)
    document.head.appendChild(el)
  }
  el.setAttribute('hreflang', hreflang)
  el.setAttribute('href', href)
}

const applyHreflangs = (): void => {
  upsertHreflang('en', `${SITE_URL}/en`)
  upsertHreflang('ru', `${SITE_URL}/ru`)
  upsertHreflang('x-default', `${SITE_URL}/en`)
}

const upsertCanonical = (href: string): void => {
  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', href)
}

const upsertJsonLd = (id: string, payload: unknown): void => {
  let script = document.head.querySelector(`script[data-seo-id="${id}"]`)
  if (!script) {
    script = document.createElement('script')
    script.setAttribute('type', 'application/ld+json')
    script.setAttribute('data-seo-id', id)
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(payload)
}

const currentLocale = (i18n: I18nInstance): string => String(unref(i18n.global.locale))

const routeLocalePath = (route: RouteLocationNormalizedLoaded, i18n: I18nInstance): string => {
  const fromRoute = route.params.locale
  const raw = typeof fromRoute === 'string' ? fromRoute : Array.isArray(fromRoute) ? fromRoute[0] : ''
  if (raw === 'ru' || raw === 'en') {
    return raw
  }
  return currentLocale(i18n)
}

const buildMeta = (route: RouteLocationNormalizedLoaded, i18n: I18nInstance): SeoMeta => {
  const t = i18n.global.t as (key: string) => string
  const te = i18n.global.te as (key: string) => boolean
  const siteName = t('brand.siteName')
  const routeName = String(route.name ?? '')
  const path = route.path

  if (routeName === 'home') {
    return {
      title: t('seo.homeTitle'),
      description: t('seo.homeDescription'),
      path,
    }
  }
  if (routeName === 'contact') {
    return {
      title: t('seo.contactTitle'),
      description: t('seo.contactDescription'),
      path,
    }
  }
  if (routeName === 'parse-ledger') {
    return {
      title: t('seo.parseLedgerTitle'),
      description: t('seo.parseLedgerDescription'),
      path,
    }
  }
  if (routeName === 'not-found') {
    return {
      title: t('seo.notFoundTitle'),
      description: t('seo.notFoundDescription'),
      path,
      robots: 'noindex,follow',
    }
  }

  if (routeName === 'service-details') {
    const slug = String(route.params.slug ?? '')
    const locale = currentLocale(i18n)
    const service = getServiceContent(locale)[slug]
    if (service) {
      const descKey = `seo.serviceDescriptions.${slug}`
      const description = te(descKey) ? t(descKey) : t('seo.serviceFallbackDescription')
      return {
        title: `${service.title} | ${siteName}`,
        description,
        path,
      }
    }
  }

  return {
    title: t('seo.fallbackTitle'),
    description: t('seo.fallbackDescription'),
    path,
    robots: routeName === 'not-found' ? 'noindex,follow' : 'index,follow',
  }
}

const buildBreadcrumbJsonLd = (
  route: RouteLocationNormalizedLoaded,
  i18n: I18nInstance
): Record<string, unknown> | null => {
  const routeName = String(route.name ?? '')
  if (routeName !== 'service-details') {
    return null
  }
  const slug = String(route.params.slug ?? '')
  const locale = currentLocale(i18n)
  const service = getServiceContent(locale)[slug]
  if (!service) {
    return null
  }
  const t = i18n.global.t as (key: string) => string
  const loc = routeLocalePath(route, i18n)
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('seo.breadcrumbHome'),
        item: `${SITE_URL}/${loc}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: service.title,
        item: `${SITE_URL}/${loc}/services/${slug}`,
      },
    ],
  }
}

const buildOrganizationJsonLd = (i18n: I18nInstance): Record<string, unknown> => {
  const siteName = (i18n.global.t as (key: string) => string)('brand.siteName')
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    email: SITE_CONTACT_EMAIL,
    telephone: '+971 52 856 9060',
    areaServed: 'AE',
    sameAs: socialLinkDefs.map((item) => item.href),
  }
}

const buildWebsiteJsonLd = (i18n: I18nInstance): Record<string, unknown> => {
  const siteName = (i18n.global.t as (key: string) => string)('brand.siteName')
  const lang = currentLocale(i18n) === 'en' ? 'en' : 'ru'
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: SITE_URL,
    inLanguage: lang,
  }
}

const buildServiceJsonLd = (route: RouteLocationNormalizedLoaded, i18n: I18nInstance): Record<string, unknown> | null => {
  const routeName = String(route.name ?? '')
  if (routeName !== 'service-details') {
    return null
  }
  const slug = String(route.params.slug ?? '')
  const locale = currentLocale(i18n)
  const service = getServiceContent(locale)[slug]
  if (!service) {
    return null
  }
  const t = i18n.global.t as (key: string) => string
  const te = i18n.global.te as (key: string) => boolean
  const siteName = t('brand.siteName')
  const descKey = `seo.serviceDescriptions.${slug}`
  const description = te(descKey) ? t(descKey) : t('seo.serviceFallbackDescription')
  const lang = currentLocale(i18n) === 'en' ? 'en' : 'ru'
  const loc = routeLocalePath(route, i18n)
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description,
    provider: {
      '@type': 'Organization',
      name: siteName,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    url: `${SITE_URL}/${loc}/services/${slug}`,
    inLanguage: lang,
  }
}

const applySeo = (route: RouteLocationNormalizedLoaded, i18n: I18nInstance): void => {
  const meta = buildMeta(route, i18n)
  const canonicalUrl = `${SITE_URL}${meta.path}`
  const siteName = (i18n.global.t as (key: string) => string)('brand.siteName')
  const ogLocale = currentLocale(i18n) === 'en' ? 'en_US' : 'ru_RU'

  document.title = meta.title
  upsertMetaTag('description', meta.description)
  upsertMetaTag('robots', meta.robots ?? 'index,follow')
  upsertMetaTag('author', siteName)
  upsertMetaTag('og:title', meta.title)
  upsertMetaTag('og:description', meta.description)
  upsertMetaTag('og:type', 'website')
  upsertMetaTag('og:url', canonicalUrl)
  upsertMetaTag('og:image', DEFAULT_IMAGE)
  upsertMetaTag('og:site_name', siteName)
  upsertMetaTag('og:locale', ogLocale)
  upsertMetaTag('twitter:card', 'summary_large_image')
  upsertMetaTag('twitter:title', meta.title)
  upsertMetaTag('twitter:description', meta.description)
  upsertMetaTag('twitter:image', DEFAULT_IMAGE)
  upsertCanonical(canonicalUrl)
  applyHreflangs()
  upsertJsonLd('organization', buildOrganizationJsonLd(i18n))
  upsertJsonLd('website', buildWebsiteJsonLd(i18n))

  const breadcrumb = buildBreadcrumbJsonLd(route, i18n)
  if (breadcrumb) {
    upsertJsonLd('breadcrumb', breadcrumb)
  } else {
    const breadcrumbScript = document.head.querySelector('script[data-seo-id="breadcrumb"]')
    if (breadcrumbScript) {
      breadcrumbScript.remove()
    }
  }

  const service = buildServiceJsonLd(route, i18n)
  if (service) {
    upsertJsonLd('service', service)
  } else {
    const serviceScript = document.head.querySelector('script[data-seo-id="service"]')
    if (serviceScript) {
      serviceScript.remove()
    }
  }
}

export const installSeo = (router: Router, i18n: I18nInstance): void => {
  const run = (): void => {
    applySeo(router.currentRoute.value, i18n)
  }
  router.afterEach(() => {
    run()
  })
  watch(
    () => currentLocale(i18n),
    () => {
      run()
    },
  )
}
