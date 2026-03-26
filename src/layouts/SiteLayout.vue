<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import { useRoute } from 'vue-router'
import FloatingAccountingDeco from '@/components/FloatingAccountingDeco.vue'
import SocialNetworkIcon from '@/components/SocialNetworkIcon.vue'
import { socialLinks } from '@/socialLinks'

type NavLink =
  | { label: string; to: RouteLocationRaw }
  | { label: string; href: string }

const navLinks: NavLink[] = [
  { label: 'Главная', to: { name: 'home' } },
  { label: 'ParseLedger', to: { name: 'parseledger' } },
  { label: 'Контакты', to: { name: 'contact' } },
]

const serviceLinks: { label: string; to: RouteLocationRaw }[] = [
  { label: 'FirstBit / 1С', to: { name: 'service-details', params: { slug: 'firstbit' } } },
  { label: 'Внедрение и восстановление', to: { name: 'service-details', params: { slug: 'accounting-systems' } } },
  { label: 'Настройка учета', to: { name: 'service-details', params: { slug: 'accounting-setup' } } },
  { label: 'Сопровождение и обучение', to: { name: 'service-details', params: { slug: 'training' } } },
]

const headerContactEmail = 'info@parseconsult.ae'
const isServicesMenuOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isHeaderHidden = ref(false)
const route = useRoute()

const handleLeadModalToggle = (event: Event): void => {
  const customEvent = event as CustomEvent<{ open?: boolean }>
  isHeaderHidden.value = Boolean(customEvent.detail?.open)
}

watch(
  () => route.fullPath,
  () => {
    isServicesMenuOpen.value = false
    isMobileMenuOpen.value = false
  },
)

onMounted(() => {
  window.addEventListener('lead-modal-toggle', handleLeadModalToggle as EventListener)
})

onBeforeUnmount(() => {
  window.removeEventListener('lead-modal-toggle', handleLeadModalToggle as EventListener)
})
</script>

<template>
  <div class="relative isolate min-h-screen font-sans text-slate-900">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1200] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900"
    >
      Перейти к контенту
    </a>
    <div class="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div class="absolute inset-0 bg-slate-50"></div>
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_90%_45%_at_50%_-10%,rgba(94,233,181,0.14),transparent_55%),radial-gradient(ellipse_70%_40%_at_80%_105%,rgba(94,233,181,0.08),transparent_50%),radial-gradient(ellipse_60%_35%_at_10%_90%,rgba(148,163,184,0.09),transparent_45%)]"
      ></div>
    </div>
    <FloatingAccountingDeco />

    <header v-show="!isHeaderHidden" class="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6 md:px-6">
      <div class="pointer-events-auto w-full max-w-7xl rounded-xl border border-slate-200/90 bg-white py-3 pl-4 pr-3 shadow-sm md:py-3.5 md:pl-6 md:pr-4 lg:px-6 xl:px-8">
        <div class="flex items-center justify-between gap-4">
        <RouterLink :to="{ name: 'home' }" class="flex shrink-0 items-center gap-2">
          <img
            src="/logo.svg"
            alt="Parse Consult"
            class="h-10 w-10 shrink-0 rounded-lg object-contain"
            loading="eager"
            decoding="async"
          >
          <span class="hidden text-sm font-semibold tracking-tight text-slate-900 sm:inline">parseconsult ae</span>
        </RouterLink>

          <div class="flex min-w-0 items-center justify-center gap-3 sm:gap-4 lg:gap-4 xl:gap-6">
          <nav class="hidden items-center gap-4 lg:flex xl:gap-7">
            <RouterLink
              :to="{ name: 'home' }"
              class="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-brand-dark"
            >
              Главная
            </RouterLink>

            <div
              class="relative"
              @mouseenter="isServicesMenuOpen = true"
              @mouseleave="isServicesMenuOpen = false"
            >
              <button
                type="button"
                @click="isServicesMenuOpen = !isServicesMenuOpen"
                class="inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-brand-dark"
              >
                Услуги
                <span class="text-xs">▾</span>
              </button>
              <div
                class="absolute left-0 top-full z-50 w-64 pt-1 transition duration-150"
                :class="isServicesMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'"
              >
                <div class="rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                  <RouterLink
                    v-for="item in serviceLinks"
                    :key="item.label"
                    :to="item.to"
                    @click="isServicesMenuOpen = false"
                    class="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-brand-dark"
                  >
                    {{ item.label }}
                  </RouterLink>
                </div>
              </div>
            </div>

            <RouterLink
              :to="{ name: 'parseledger' }"
              class="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-brand-dark"
            >
              ParseLedger
            </RouterLink>
            <RouterLink
              :to="{ name: 'contact' }"
              class="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-brand-dark"
            >
              Контакты
            </RouterLink>
          </nav>

          <a
            :href="`mailto:${headerContactEmail}`"
            class="ml-2 hidden max-w-[11rem] items-center gap-2 truncate border-l border-slate-200 pl-4 text-sm font-medium text-slate-600 transition hover:text-brand-dark xl:inline-flex xl:ml-4 xl:max-w-none xl:pl-5"
          >
            <span aria-hidden="true">✉</span>
            {{ headerContactEmail }}
          </a>

            <div
            class="flex shrink-0 items-center rounded-full border border-slate-200/90 bg-white/80 p-0.5 shadow-sm"
            role="group"
            aria-label="Переключение языка (скоро)"
          >
            <span class="rounded-full bg-brand/25 px-2.5 py-1.5 text-[11px] font-semibold leading-none text-slate-900 sm:px-3 sm:text-xs">RU</span>
            <button
              type="button"
              class="cursor-default rounded-full px-2.5 py-1.5 text-[11px] font-medium leading-none text-slate-400 sm:px-3 sm:text-xs"
              tabindex="-1"
            >
              EN
            </button>
          </div>
        </div>

          <div class="flex items-center gap-2">
            <RouterLink
              :to="{ name: 'contact' }"
              class="hidden shrink-0 items-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark md:inline-flex md:px-5 md:py-3"
            >
              Обсудить проект
            </RouterLink>
            <button
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50 lg:hidden"
              :aria-expanded="isMobileMenuOpen"
              aria-label="Открыть меню"
              @click="isMobileMenuOpen = !isMobileMenuOpen"
            >
              <span class="text-lg leading-none">{{ isMobileMenuOpen ? '×' : '☰' }}</span>
            </button>
          </div>
        </div>

        <div v-if="isMobileMenuOpen" class="mt-4 border-t border-slate-200 pt-4 lg:hidden">
          <nav class="flex flex-col gap-2">
            <RouterLink
              :to="{ name: 'home' }"
              class="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-brand-dark"
            >
              Главная
            </RouterLink>
            <RouterLink
              :to="{ name: 'parseledger' }"
              class="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-brand-dark"
            >
              ParseLedger
            </RouterLink>
            <RouterLink
              :to="{ name: 'contact' }"
              class="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-brand-dark"
            >
              Контакты
            </RouterLink>
            <div class="mt-1 rounded-lg border border-slate-200 p-2">
              <div class="px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Услуги</div>
              <RouterLink
                v-for="item in serviceLinks"
                :key="`mobile-${item.label}`"
                :to="item.to"
                class="block rounded-md px-2 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-brand-dark"
              >
                {{ item.label }}
              </RouterLink>
            </div>
            <a
              :href="`mailto:${headerContactEmail}`"
              class="mt-1 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-brand-dark"
            >
              {{ headerContactEmail }}
            </a>
            <RouterLink
              :to="{ name: 'contact' }"
              class="mt-1 inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark"
            >
              Обсудить проект
            </RouterLink>
          </nav>
        </div>
      </div>
    </header>

    <div class="relative z-10">
      <main id="main-content">
        <RouterView />
      </main>

      <footer class="border-t border-slate-200/80 bg-slate-50/80 backdrop-blur-[2px]">
      <div class="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
        <div class="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt="Parse Consult"
            class="h-9 w-9 shrink-0 rounded-md object-contain"
            loading="lazy"
            decoding="async"
          >
          <div>
            <div class="font-semibold tracking-tight text-slate-900">Parse Consult</div>
            <div class="font-medium text-slate-600">Учёт, внедрение, автоматизация — ОАЭ</div>
          </div>
        </div>
        <div class="flex flex-wrap items-center gap-x-5 gap-y-3">
          <RouterLink :to="{ path: '/', hash: '#services' }" class="transition hover:text-brand-dark">
            Услуги
          </RouterLink>
          <template v-for="item in navLinks" :key="`footer-${item.label}`">
            <a
              v-if="'href' in item"
              :href="item.href"
              class="transition hover:text-brand-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ item.label }}
            </a>
            <RouterLink v-else :to="item.to" class="transition hover:text-brand-dark">
              {{ item.label }}
            </RouterLink>
          </template>
          <a
            v-for="s in socialLinks"
            :key="s.href"
            :href="s.href"
            class="inline-flex text-slate-600 transition hover:text-brand-dark"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="s.label"
          >
            <SocialNetworkIcon :network="s.network" class="size-5" />
          </a>
        </div>
      </div>
    </footer>
    </div>
  </div>
</template>
