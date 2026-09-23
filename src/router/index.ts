import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import SiteLayout from '@/layouts/SiteLayout.vue'
import { applyDocumentLang, i18n, persistLocale } from '@/i18n'
import type { AppLocale } from '@/i18n'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/en',
  },
  {
    path: '/:locale(ru|en)',
    component: SiteLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/HomePage.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/ContactPage.vue'),
      },
      {
        path: 'parse-ledger',
        name: 'parse-ledger',
        component: () => import('@/views/ParseLedgerPage.vue'),
      },
      {
        path: 'Parse-Ledger',
        redirect: { name: 'parse-ledger' },
      },
      {
        path: 'services/parse-ledger',
        redirect: { name: 'parse-ledger' },
      },
      {
        path: 'services/accounting-setup',
        redirect: (to) => ({
          name: 'service-details',
          params: { ...to.params, slug: 'accounting' },
          query: to.query,
          hash: to.hash,
        }),
      },
      // Deprecated service pages: content is intentionally left in
      // servicesEnData.ts / servicesRuData.ts untouched (in case it's
      // needed again later), but these URLs should no longer be visitable
      // or indexed, so they redirect to their closest current equivalent.
      {
        path: 'services/firstbit',
        redirect: (to) => ({ name: 'service-details', params: { ...to.params, slug: 'accounting' } }),
      },
      {
        path: 'services/bitrix24',
        redirect: (to) => ({ name: 'service-details', params: { ...to.params, slug: 'crm-erp' } }),
      },
      {
        path: 'services/accounting-systems',
        redirect: (to) => ({ name: 'service-details', params: { ...to.params, slug: 'accounting' } }),
      },
      {
        path: 'services/vat-cit-filing',
        redirect: (to) => ({ name: 'service-details', params: { ...to.params, slug: 'accounting' } }),
      },
      {
        path: 'services/training',
        redirect: (to) => ({ name: 'home', params: { ...to.params } }),
      },
      {
        path: 'services/:slug',
        name: 'service-details',
        component: () => import('@/views/ServicePage.vue'),
      },
      {
        path: ':pathMatch(.*)+',
        name: 'not-found',
        component: () => import('@/views/NotFoundPage.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: (to) => {
      const cleanPath = to.path.replace(/^\/+/, '')
      return cleanPath.length ? `/en/${cleanPath}` : '/en'
    },
  },
]

export function createAppRouter() {
  const router = createRouter({
    // import.meta.env.SSR is true only inside the `vite build --ssr` bundle
    // (entry-server.ts / the prerender script); the browser build always
    // gets real history navigation.
    history: import.meta.env.SSR
      ? createMemoryHistory(import.meta.env.BASE_URL)
      : createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, _from, savedPosition) {
      if (to.hash) {
        return { el: to.hash, behavior: 'smooth' }
      }
      if (savedPosition) {
        return savedPosition
      }
      return { top: 0 }
    },
  })

  router.beforeEach((to, _from, next) => {
    const loc = to.params.locale
    const s = typeof loc === 'string' ? loc : Array.isArray(loc) ? loc[0] : ''
    if (s === 'ru' || s === 'en') {
      const typed = s as AppLocale
      if (i18n.global.locale.value !== typed) {
        i18n.global.locale.value = typed
      }
      persistLocale(typed)
      applyDocumentLang(typed)
    }
    next()
  })

  return router
}

const router = createAppRouter()

export default router