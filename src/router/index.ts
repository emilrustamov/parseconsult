import { createRouter, createWebHistory } from 'vue-router'
import SiteLayout from '@/layouts/SiteLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
          path: 'parseledger',
          name: 'parseledger',
          component: () => import('@/views/ParseLedgerPage.vue'),
        },
        {
          path: 'services/:slug',
          name: 'service-details',
          component: () => import('@/views/ServicePage.vue'),
        },
        {
          path: ':pathMatch(.*)*',
          name: 'not-found',
          component: () => import('@/views/NotFoundPage.vue'),
        },
      ],
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

export default router
