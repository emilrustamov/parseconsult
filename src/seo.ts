import type { RouteLocationNormalizedLoaded, Router } from 'vue-router'
import { socialLinks } from '@/socialLinks'
import { serviceContent } from '@/content/services'

const SITE_URL = 'https://parseconsult.ae'
const SITE_NAME = 'Parse Consult'
const DEFAULT_IMAGE = `${SITE_URL}/logo.svg`

type SeoMeta = {
  title: string
  description: string
  path: string
  robots?: 'index,follow' | 'noindex,follow'
}

const staticMetaByRouteName: Record<string, Omit<SeoMeta, 'path'>> = {
  home: {
    title: 'Parse Consult в ОАЭ - внедрение и автоматизация учета',
    description: 'Внедрение FirstBit, Zoho Books и QuickBooks в ОАЭ. Восстановление учета, обучение персонала и автоматизация финансовых процессов.',
  },
  contact: {
    title: 'Контакты Parse Consult',
    description: 'Свяжитесь с Parse Consult для консультации по внедрению бухгалтерских систем и автоматизации учета в ОАЭ.',
  },
  'Parse-Ledger': {
    title: 'Parse-Ledger - автоматическая загрузка выписок',
    description: 'Parse-Ledger преобразует банковские PDF и Excel выписки в структурированные данные для загрузки в бухгалтерские системы.',
  },
  'not-found': {
    title: 'Страница не найдена | Parse Consult',
    description: 'Запрошенная страница не найдена. Перейдите на главную страницу Parse Consult.',
    robots: 'noindex,follow',
  },
}

const serviceDescriptionBySlug: Record<string, string> = {
  firstbit: 'Экспертное внедрение и кастомизация 1С (First Bit) в ОАЭ: аудит, автоматизация процессов и методология IFRS.',
  'accounting-systems': 'Внедрение, восстановление и оптимизация бухгалтерских систем с интеграцией банков и CRM для бизнеса в ОАЭ.',
  'accounting-setup': 'Настройка бухгалтерского учета под отраслевую специфику бизнеса в ОАЭ: от e-commerce до строительства и логистики.',
  training: 'Сопровождение и обучение персонала: регламенты, инструкции и практическая адаптация команды к новым процессам учета.',
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

const buildMeta = (route: RouteLocationNormalizedLoaded): SeoMeta => {
  const routeName = String(route.name ?? '')
  const path = route.path
  const staticMeta = staticMetaByRouteName[routeName]
  if (staticMeta) {
    return { ...staticMeta, path }
  }

  if (routeName === 'service-details') {
    const slug = String(route.params.slug ?? '')
    const service = serviceContent[slug]
    if (service) {
      return {
        title: `${service.title} | ${SITE_NAME}`,
        description: serviceDescriptionBySlug[slug] ?? 'Профессиональное внедрение и настройка бухгалтерских решений для бизнеса в ОАЭ.',
        path,
      }
    }
  }

  return {
    title: `${SITE_NAME} - консалтинг и автоматизация учета`,
    description: 'Parse Consult помогает бизнесу в ОАЭ выстраивать прозрачный учет, внедрять системы и обучать команды.',
    path,
    robots: routeName === 'not-found' ? 'noindex,follow' : 'index,follow',
  }
}

const buildBreadcrumbJsonLd = (route: RouteLocationNormalizedLoaded): Record<string, unknown> | null => {
  const routeName = String(route.name ?? '')
  if (routeName !== 'service-details') {
    return null
  }
  const slug = String(route.params.slug ?? '')
  const service = serviceContent[slug]
  if (!service) {
    return null
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: service.title,
        item: `${SITE_URL}/services/${slug}`,
      },
    ],
  }
}

const buildOrganizationJsonLd = (): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  email: 'info@parseconsult.ae',
  telephone: '+971000000000',
  areaServed: 'AE',
  sameAs: socialLinks.map((item) => item.href),
})

const buildWebsiteJsonLd = (): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: 'ru',
})

const buildServiceJsonLd = (route: RouteLocationNormalizedLoaded): Record<string, unknown> | null => {
  const routeName = String(route.name ?? '')
  if (routeName !== 'service-details') {
    return null
  }
  const slug = String(route.params.slug ?? '')
  const service = serviceContent[slug]
  if (!service) {
    return null
  }
  const description =
    serviceDescriptionBySlug[slug] ?? 'Профессиональное внедрение и настройка бухгалтерских решений для бизнеса в ОАЭ.'
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    url: `${SITE_URL}/services/${slug}`,
    inLanguage: 'ru',
  }
}

const applySeo = (route: RouteLocationNormalizedLoaded): void => {
  const meta = buildMeta(route)
  const canonicalUrl = `${SITE_URL}${meta.path}`
  document.title = meta.title
  upsertMetaTag('description', meta.description)
  upsertMetaTag('robots', meta.robots ?? 'index,follow')
  upsertMetaTag('author', SITE_NAME)
  upsertMetaTag('og:title', meta.title)
  upsertMetaTag('og:description', meta.description)
  upsertMetaTag('og:type', 'website')
  upsertMetaTag('og:url', canonicalUrl)
  upsertMetaTag('og:image', DEFAULT_IMAGE)
  upsertMetaTag('og:site_name', SITE_NAME)
  upsertMetaTag('og:locale', 'ru_RU')
  upsertMetaTag('twitter:card', 'summary_large_image')
  upsertMetaTag('twitter:title', meta.title)
  upsertMetaTag('twitter:description', meta.description)
  upsertMetaTag('twitter:image', DEFAULT_IMAGE)
  upsertCanonical(canonicalUrl)
  upsertJsonLd('organization', buildOrganizationJsonLd())
  upsertJsonLd('website', buildWebsiteJsonLd())

  const breadcrumb = buildBreadcrumbJsonLd(route)
  if (breadcrumb) {
    upsertJsonLd('breadcrumb', breadcrumb)
  } else {
    const breadcrumbScript = document.head.querySelector('script[data-seo-id="breadcrumb"]')
    if (breadcrumbScript) {
      breadcrumbScript.remove()
    }
  }

  const service = buildServiceJsonLd(route)
  if (service) {
    upsertJsonLd('service', service)
  } else {
    const serviceScript = document.head.querySelector('script[data-seo-id="service"]')
    if (serviceScript) {
      serviceScript.remove()
    }
  }
}

export const installSeo = (router: Router): void => {
  router.afterEach((to) => {
    applySeo(to)
  })
}
