import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteLocationRaw } from 'vue-router'
import type { AppLocale } from '@/i18n'

export function useLocaleRoute() {
  const route = useRoute()
  const locale = computed(() => (route.params.locale as AppLocale) || 'ru')

  const localized = (to: RouteLocationRaw): RouteLocationRaw => {
    const loc = locale.value
    if (typeof to === 'string') {
      if (/^https?:\/\//.test(to)) {
        return to
      }
      const path = to.startsWith('/') ? to : `/${to}`
      if (path === '/' || path === '') {
        return `/${loc}`
      }
      if (path === `/${loc}` || path.startsWith(`/${loc}/`)) {
        return path
      }
      return `/${loc}${path}`
    }
    if (typeof to === 'object' && to !== null) {
      const o = { ...to } as Record<string, unknown>
      if ('name' in o && typeof o.name === 'string') {
        const prevParams =
          typeof o.params === 'object' && o.params !== null && !Array.isArray(o.params)
            ? (o.params as Record<string, unknown>)
            : {}
        o.params = { locale: loc, ...prevParams }
        return o as RouteLocationRaw
      }
      if ('path' in o && typeof o.path === 'string') {
        const hash = 'hash' in o && typeof o.hash === 'string' ? o.hash : undefined
        const query = 'query' in o ? o.query : undefined
        const p = o.path.startsWith('/') ? o.path : `/${o.path}`
        if (p === '/' || p === '') {
          return { path: `/${loc}`, hash, query } as RouteLocationRaw
        }
        if (p === `/${loc}` || p.startsWith(`/${loc}/`)) {
          return { path: p, hash, query } as RouteLocationRaw
        }
        return { path: `/${loc}${p}`, hash, query } as RouteLocationRaw
      }
    }
    return to
  }

  return { locale, localized }
}
