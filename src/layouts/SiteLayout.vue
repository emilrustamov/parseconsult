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
  { label: 'Parse Ledger', to: { name: 'Parse-Ledger' } },
  { label: 'Контакты', to: { name: 'contact' } },
]

const serviceLinks: { label: string; to: RouteLocationRaw }[] = [
  { label: 'FirstBit / 1С', to: { name: 'service-details', params: { slug: 'firstbit' } } },
  { label: 'Битрикс24', to: { name: 'service-details', params: { slug: 'bitrix24' } } },
  { label: 'Внедрение и восстановление', to: { name: 'service-details', params: { slug: 'accounting-systems' } } },
  { label: 'Настройка учета', to: { name: 'service-details', params: { slug: 'accounting-setup' } } },
  { label: 'Сопровождение и обучение', to: { name: 'service-details', params: { slug: 'training' } } },
]

const headerContactEmail = 'info@parseconsult.ae'
const headerWhatsappNumber = '+971 52 856 9060'
const headerWhatsappHref = `https://wa.me/${headerWhatsappNumber.replace(/\D/g, '')}`
const headerTelegramHref = 'https://t.me/parseconsult'
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
              :to="{ name: 'Parse-Ledger' }"
              class="group relative inline-flex items-center whitespace-nowrap rounded-full border border-brand/60 bg-brand px-3 py-1.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark hover:text-slate-900"
            >
              <span class="absolute -right-1 -top-2 rounded-full bg-red-500 px-1.5 py-0.5 text-[9px] font-semibold uppercase leading-none tracking-wide text-white">
                beta
              </span>
              Parse Ledger
            </RouterLink>
            <RouterLink
              :to="{ name: 'contact' }"
              class="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-brand-dark"
            >
              Контакты
            </RouterLink>
          </nav>

          <div class="hidden items-center gap-1 lg:flex xl:gap-1.5">
            <span class="h-6 w-px bg-slate-200" aria-hidden="true"></span>
            <a
              :href="`mailto:${headerContactEmail}`"
              class="inline-flex h-10 w-10 items-center justify-center rounded-lg text-violet-600 transition hover:bg-violet-50 hover:text-violet-700"
              aria-label="Написать на email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true">
                <path d="M1.5 6.75A2.25 2.25 0 013.75 4.5h16.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H3.75a2.25 2.25 0 01-2.25-2.25V6.75zm2.76-.75L12 11.01 19.74 6H4.26zm16.74 1.37l-8.59 5.56a.75.75 0 01-.82 0L3 7.37v9.88c0 .41.34.75.75.75h16.5c.41 0 .75-.34.75-.75V7.37z" />
              </svg>
            </a>
            <a
              :href="headerTelegramHref"
              class="inline-flex h-10 w-10 items-center justify-center rounded-lg text-blue-600 transition hover:bg-blue-50 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в Telegram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true">
                <path d="M21.49 4.52a1.5 1.5 0 00-1.63-.2L3.16 12.03a1.5 1.5 0 00.13 2.75l3.84 1.4 1.44 4.64a1.5 1.5 0 002.63.51l2.18-2.65 3.59 2.62a1.5 1.5 0 002.35-.9L22 6.05a1.5 1.5 0 00-.51-1.53zm-3.15 3.34l-8 7.76-.69 2.08-.88-2.85a1.5 1.5 0 00-.92-.94l-2.28-.83 12.77-5.95zm-6.78 8.87l5.62-5.45-4.67 5.68-.95-.23z" />
              </svg>
            </a>
            <a
              :href="headerWhatsappHref"
              class="inline-flex h-10 w-10 items-center justify-center rounded-lg text-emerald-600 transition hover:bg-emerald-50 hover:text-emerald-700"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true">
                <path
                  d="M19.05 4.91A9.82 9.82 0 0012.03 2C6.56 2 2.1 6.46 2.1 11.93c0 1.75.46 3.45 1.33 4.95L2 22l5.27-1.38a9.9 9.9 0 004.76 1.22h.01c5.47 0 9.93-4.46 9.93-9.93a9.8 9.8 0 00-2.92-7zm-7.02 15.25h-.01a8.23 8.23 0 01-4.2-1.15l-.3-.17-3.13.82.84-3.05-.2-.31a8.24 8.24 0 01-1.27-4.37c0-4.56 3.71-8.27 8.28-8.27a8.2 8.2 0 015.85 2.43 8.2 8.2 0 012.42 5.84c0 4.56-3.71 8.26-8.28 8.26zm4.53-6.19c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2.01-1.24-.74-.66-1.25-1.47-1.4-1.72-.14-.25-.02-.38.11-.5.11-.1.25-.27.37-.4.12-.14.17-.23.25-.39.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.86-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.12.17 1.77 2.69 4.28 3.78.6.26 1.08.41 1.45.53.61.19 1.16.16 1.6.1.49-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.46-.27z"
                />
              </svg>
            </a>
          </div>

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

        <Transition name="mobile-menu">
          <div v-if="isMobileMenuOpen" class="mt-4 border-t border-slate-200 pt-4 lg:hidden">
            <nav class="flex flex-col items-center gap-2 text-center">
              <RouterLink
                :to="{ name: 'home' }"
                class="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-brand-dark"
              >
                Главная
              </RouterLink>
              <RouterLink
                :to="{ name: 'Parse-Ledger' }"
                class="relative mt-2 inline-flex w-fit items-center rounded-full border border-brand/60 bg-brand px-3 py-1.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark hover:text-slate-900"
              >
                <span class="absolute -right-1 -top-2 rounded-full bg-red-500 px-1.5 py-0.5 text-[9px] font-semibold uppercase leading-none tracking-wide text-white">
                  beta
                </span>
                <span>Parse Ledger</span>
              </RouterLink>
              <RouterLink
                :to="{ name: 'contact' }"
                class="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-brand-dark"
              >
                Контакты
              </RouterLink>
              <div class="mt-1 w-full max-w-sm rounded-lg border border-slate-200 p-2">
                <div class="px-2 pb-1 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">Услуги</div>
                <RouterLink
                  v-for="item in serviceLinks"
                  :key="`mobile-${item.label}`"
                  :to="item.to"
                  class="block rounded-md px-2 py-2 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-brand-dark"
                >
                  {{ item.label }}
                </RouterLink>
              </div>
              <div class="mt-1 flex items-center justify-center gap-2">
                <a
                  :href="`mailto:${headerContactEmail}`"
                  class="inline-flex h-11 w-11 items-center justify-center rounded-lg text-violet-600 transition hover:bg-violet-50 hover:text-violet-700"
                  aria-label="Написать на email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true">
                    <path d="M1.5 6.75A2.25 2.25 0 013.75 4.5h16.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H3.75a2.25 2.25 0 01-2.25-2.25V6.75zm2.76-.75L12 11.01 19.74 6H4.26zm16.74 1.37l-8.59 5.56a.75.75 0 01-.82 0L3 7.37v9.88c0 .41.34.75.75.75h16.5c.41 0 .75-.34.75-.75V7.37z" />
                  </svg>
                </a>
                <a
                  :href="headerTelegramHref"
                  class="inline-flex h-11 w-11 items-center justify-center rounded-lg text-blue-600 transition hover:bg-blue-50 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Написать в Telegram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true">
                    <path
                      d="M21.49 4.52a1.5 1.5 0 00-1.63-.2L3.16 12.03a1.5 1.5 0 00.13 2.75l3.84 1.4 1.44 4.64a1.5 1.5 0 002.63.51l2.18-2.65 3.59 2.62a1.5 1.5 0 002.35-.9L22 6.05a1.5 1.5 0 00-.51-1.53zm-3.15 3.34l-8 7.76-.69 2.08-.88-2.85a1.5 1.5 0 00-.92-.94l-2.28-.83 12.77-5.95zm-6.78 8.87l5.62-5.45-4.67 5.68-.95-.23z"
                    />
                  </svg>
                </a>
                <a
                  :href="headerWhatsappHref"
                  class="inline-flex h-11 w-11 items-center justify-center rounded-lg text-emerald-600 transition hover:bg-emerald-50 hover:text-emerald-700"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Написать в WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true">
                    <path
                      d="M19.05 4.91A9.82 9.82 0 0012.03 2C6.56 2 2.1 6.46 2.1 11.93c0 1.75.46 3.45 1.33 4.95L2 22l5.27-1.38a9.9 9.9 0 004.76 1.22h.01c5.47 0 9.93-4.46 9.93-9.93a9.8 9.8 0 00-2.92-7zm-7.02 15.25h-.01a8.23 8.23 0 01-4.2-1.15l-.3-.17-3.13.82.84-3.05-.2-.31a8.24 8.24 0 01-1.27-4.37c0-4.56 3.71-8.27 8.28-8.27a8.2 8.2 0 015.85 2.43 8.2 8.2 0 012.42 5.84c0 4.56-3.71 8.26-8.28 8.26zm4.53-6.19c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2.01-1.24-.74-.66-1.25-1.47-1.4-1.72-.14-.25-.02-.38.11-.5.11-.1.25-.27.37-.4.12-.14.17-.23.25-.39.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.86-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.12.17 1.77 2.69 4.28 3.78.6.26 1.08.41 1.45.53.61.19 1.16.16 1.6.1.49-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.46-.27z"
                    />
                  </svg>
                </a>
              </div>
              <RouterLink
                :to="{ name: 'contact' }"
                class="mt-1 inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark"
              >
                Обсудить проект
              </RouterLink>
            </nav>
          </div>
        </Transition>
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

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
  transform-origin: top;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
