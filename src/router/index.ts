import { createRouter, createWebHistory } from 'vue-router'
import SiteLayout from '@/layouts/SiteLayout.vue'
import { applyDocumentLang, i18n, persistLocale, readStoredLocale } from '@/i18n'
import type { AppLocale } from '@/i18n'

const normalizeTrailingPath = (path: string): string => (path === '' ? '/' : path)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: (to) => ({ path: `/${readStoredLocale()}`, query: to.query, hash: to.hash }),
    },
    {
      path: '/contact',
      redirect: (to) => ({ path: `/${readStoredLocale()}/contact`, query: to.query, hash: to.hash }),
    },
    {
      path: '/parse-ledger',
      redirect: (to) => ({ path: `/${readStoredLocale()}/parse-ledger`, query: to.query, hash: to.hash }),
    },
    {
      path: '/Parse-Ledger',
      redirect: (to) => ({ path: `/${readStoredLocale()}/parse-ledger`, query: to.query, hash: to.hash }),
    },
    {
      path: '/services/parse-ledger',
      redirect: (to) => ({ path: `/${readStoredLocale()}/parse-ledger`, query: to.query, hash: to.hash }),
    },
    {
      path: '/services/:slug',
      redirect: (to) => ({
        path: `/${readStoredLocale()}/services/${to.params.slug}`,
        query: to.query,
        hash: to.hash,
      }),
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
        const p = normalizeTrailingPath(to.path)
        if (p === '/') {
          return { path: `/${readStoredLocale()}`, query: to.query, hash: to.hash }
        }
        const seg = p.split('/').filter(Boolean)[0]
        if (seg === 'ru' || seg === 'en') {
          return { path: p, query: to.query, hash: to.hash }
        }
        return { path: `/${readStoredLocale()}${p}`, query: to.query, hash: to.hash }
      },
    },
  ],
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

export default router
