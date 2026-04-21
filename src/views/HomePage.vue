<template>
  <section
    id="hero"
    class="relative overflow-hidden scroll-mt-28 border-b border-slate-200/80 bg-white/80 pb-8 pt-20 backdrop-blur-[2px] md:scroll-mt-32 md:pb-10 md:pt-24"
  >
    <div class="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-12 md:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch lg:gap-10 lg:px-8 lg:py-10 xl:gap-12">
      <div class="flex max-w-3xl flex-col lg:h-full lg:justify-between">
        <h1 class="relative z-10 max-w-4xl text-2xl font-semibold leading-tight tracking-tight text-slate-950 md:text-[2.55rem] lg:text-[2.7rem] xl:text-[3.2rem]">
          <span class="block leading-[1]">
            {{ t('home.hero.titleStart') }}
            <span class="text-[#3ccd98]">{{ t('home.hero.uae') }}</span>
            {{ t('home.hero.titleMiddle') }}
            <span class="text-[#3ccd98]">{{ t('home.hero.gcc') }}</span>
            {{ t('home.hero.titleEnd') }}
          </span>
          <span class="mt-3 block text-[0.5em] font-medium leading-[1.2] text-slate-700 md:text-[0.48em]">
            {{ t('home.hero.subtitle') }}
          </span>
        </h1>
        <div class="mt-4 w-full max-w-[460px] sm:max-w-[560px] md:mt-6 md:max-w-[640px] lg:mt-10 lg:max-w-none lg:pb-2">
          <LazyDotLottie
            src="/office-re-color.lottie"
            root-class="h-full w-full"
            lottie-class="h-full w-full object-contain object-left"
          />
        </div>
      </div>

      <div class="flex min-h-0 flex-col lg:h-full">
        <div class="flex flex-col gap-3 rounded-xl border border-transparent bg-transparent p-0 md:border-slate-200 md:bg-slate-50/80 md:p-3 lg:h-full lg:min-h-0">
          <RouterLink
            v-for="item in heroServices"
            :key="item.id"
            :to="localized(item.to)"
            class="group flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-slate-50/90 sm:gap-4 lg:min-h-0 lg:flex-1"
            :class="item.id === 'parse-ledger' ? 'border-slate-900 text-slate-900 shadow-sm' : ''"
            :style="item.id === 'parse-ledger' ? { backgroundColor: '#d9fbe8', borderColor: '#0f172a' } : undefined"
          >
            <span
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/20 text-xl leading-none text-slate-900 transition group-hover:bg-brand/30"
              :class="item.id === 'parse-ledger' ? 'bg-slate-900/10 text-slate-900 group-hover:bg-slate-900/15' : ''"
              aria-hidden="true"
            >
              {{ item.icon }}
            </span>
            <h3 class="min-w-0 flex-1 text-base font-semibold leading-snug text-slate-900">{{ item.title }}</h3>
            <span
              class="ui-shine relative inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-brand/15 text-sm text-slate-900 transition group-hover:bg-brand"
              :class="item.id === 'parse-ledger' ? 'bg-slate-900/10 text-slate-900 group-hover:bg-slate-900/15' : ''"
              aria-hidden="true"
            >
              <span class="relative z-[1]">↗</span>
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/80 py-6 backdrop-blur-[2px] md:scroll-mt-32 md:py-12 lg:py-10">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div class="lg:sticky lg:top-32">
          <h2 class=" text-2xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            {{ t('home.about.title') }}
          </h2>
          <div class="mx-auto mt-6 h-[260px] w-full sm:h-[320px] lg:h-[360px]">
            <LazyDotLottie
              src="/budget-and-bills.lottie"
              root-class="mx-auto h-full w-full"
              lottie-class="mx-auto h-full w-full object-contain object-center"
            />
          </div>
          <a
            href="#home-lead"
            class="ui-shine mx-auto mt-8 flex w-fit items-center rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark"
          >
            <span class="relative z-[1]">{{ t('home.about.cta') }}</span>
          </a>
        </div>
        <div class="space-y-6 border-l-0 border-slate-300/80 pl-0 text-base leading-8 text-slate-700 md:border-l md:pl-8 md:text-lg">
          <p>{{ t('home.about.p1') }}</p>
          <p>{{ t('home.about.p2') }}</p>
          <p>{{ t('home.about.p3') }}</p>
          <p>{{ t('home.about.p4') }}</p>
          <p class="font-medium text-slate-700">{{ t('home.about.p5') }}</p>
        </div>
      </div>
    </div>
  </section>

  <PlatformsSection />

  <section id="crm" class="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/80 py-6 backdrop-blur-[2px] md:scroll-mt-32 md:py-12 lg:py-10">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <h2 class="text-2xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            {{ t('home.crm.titleStart') }}
            <span class="text-brand-dark">{{ t('home.crm.zoho') }}</span>
            {{ t('home.crm.titleMiddle') }}
            <span class="text-[#03bcef]">{{ t('home.crm.bitrix') }}</span>
            {{ t('home.crm.titleEnd') }}
          </h2>
          <p class="mt-5 text-base leading-8 text-slate-700 md:text-lg">
            {{ t('home.crm.p1') }}
          </p>
          <p class="mt-4 text-base leading-8 text-slate-700 md:text-lg">
            {{ t('home.crm.p2') }}
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">{{ t('home.crm.tag1') }}</span>
            <span class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">{{ t('home.crm.tag2') }}</span>
            <span class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">{{ t('home.crm.tag3') }}</span>
            <span class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">{{ t('home.crm.tag4') }}</span>
          </div>
        </div>
        <aside class="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5">
          <div class="grid gap-3 sm:grid-cols-2">
            <div class="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-4">
              <img src="/zoho.png" alt="Zoho CRM" class="h-10 w-auto object-contain" loading="lazy" decoding="async">
            </div>
            <div class="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-4">
              <img src="/bitrix24.png" alt="Bitrix24 CRM" class="h-10 w-auto object-contain" loading="lazy" decoding="async">
            </div>
          </div>
          <RouterLink
            :to="{ name: 'service-details', params: { slug: 'bitrix24' } }"
            class="ui-shine mt-5 flex w-full items-center justify-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark"
          >
            <span class="relative z-[1]">{{ t('cta.learnMore') }}</span>
          </RouterLink>
        </aside>
      </div>
    </div>
  </section>

  <section id="tax-filing" class="scroll-mt-28 border-b border-slate-200/80 bg-white/80 py-6 backdrop-blur-[2px] md:scroll-mt-32 md:py-12 lg:py-10">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-6xl">
        <span class="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-dark">
          VAT & CIT
        </span>
        <div class="mt-4 max-w-4xl rounded-2xl border border-brand/30 bg-brand/10 p-4 sm:p-5">
          <h2 class="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl lg:text-4xl">
            {{ t('home.taxFiling.title') }}
          </h2>
          <p class="mt-3 text-base leading-8 text-slate-700 md:text-lg">
            {{ t('home.taxFiling.text') }}
          </p>
        </div>

        <div class="mt-6 grid gap-2.5 md:grid-cols-3">
          <div class="rounded-xl border border-slate-200/90 bg-white/90 px-4 py-3 text-sm font-medium text-slate-700">
            {{ t('home.taxFiling.point1') }}
          </div>
          <div class="rounded-xl border border-slate-200/90 bg-white/90 px-4 py-3 text-sm font-medium text-slate-700">
            {{ t('home.taxFiling.point2') }}
          </div>
          <div class="rounded-xl border border-slate-200/90 bg-white/90 px-4 py-3 text-sm font-medium text-slate-700">
            {{ t('home.taxFiling.point3') }}
          </div>
        </div>

        <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div class="text-sm font-semibold uppercase tracking-[0.12em] text-slate-700">
            {{ t('home.taxFiling.cardTitle') }}
          </div>
          <RouterLink
            :to="{ name: 'service-details', params: { slug: 'vat-cit-filing' } }"
            class="ui-shine inline-flex items-center justify-center rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark"
          >
            <span class="relative z-[1]">{{ t('cta.learnMore') }}</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section id="home-lead" class="scroll-mt-28 border-b border-slate-200/80 bg-white/80 py-6 backdrop-blur-[2px] md:scroll-mt-32 md:py-12 lg:py-10">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-stretch lg:gap-12">
        <h2
          class="order-2 col-span-full mx-auto max-w-3xl text-center text-2xl font-semibold tracking-tight text-slate-950 md:text-4xl lg:order-1"
        >
          {{ t('home.lead.title') }}
        </h2>
        <aside
          class="order-1 flex flex-col rounded-2xl border border-transparent bg-transparent p-0 md:border-slate-200/90 md:bg-gradient-to-b md:from-slate-50 md:to-white md:p-7 lg:order-2"
        >
          <h3 class="text-base font-semibold tracking-tight text-slate-950 md:text-xl">
            {{ t('home.lead.faqTitle') }}
          </h3>
          <ul class="mt-6 space-y-3">
            <li
              v-for="item in faqItems"
              :key="`faq-${item.id}`"
              class="overflow-hidden rounded-xl border border-slate-200/80 bg-white/90 shadow-sm shadow-slate-200/30"
            >
              <button
                type="button"
                class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                @click="toggleFaq(item.id)"
              >
                <span class="text-sm font-semibold leading-snug text-slate-900">
                  {{ item.question }}
                </span>
                <span
                  class="text-lg leading-none text-slate-500 transition-transform duration-200"
                  :class="activeFaqId === item.id ? 'rotate-180' : ''"
                  aria-hidden="true"
                >
                  ⌄
                </span>
              </button>
              <p
                v-if="activeFaqId === item.id"
                class="border-t border-slate-200/80 px-4 py-3 text-sm leading-6 text-slate-700"
              >
                {{ item.answer }}
              </p>
            </li>
          </ul>
        </aside>

        <div
          class="order-3 rounded-2xl border border-transparent bg-transparent p-0 md:border-slate-200/90 md:bg-gradient-to-b md:from-slate-50 md:to-white md:p-7"
        >
          <LeadRequestForm id-prefix="home-lead" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import LazyDotLottie from '@/components/LazyDotLottie.vue'
import LeadRequestForm from '@/components/LeadRequestForm.vue'
import PlatformsSection from '@/components/PlatformsSection.vue'
import { useLocaleRoute } from '@/composables/useLocaleRoute'

const { t, tm } = useI18n()
const { localized } = useLocaleRoute()

type KeyServiceRow = {
  id: string
  slug: string
  icon: string
  title: string
  description: string
}

type FaqRow = {
  id: string
  question: string
  answer: string
}

const keyServices = computed<KeyServiceRow[]>(() => tm('home.keyServices') as KeyServiceRow[])

const heroServices = computed(() =>
  keyServices.value
    .filter((item) => item.slug !== 'accounting-setup' && item.id !== 'accounting-setup')
    .map((item) => ({
      id: item.id,
      icon: item.icon,
      title: item.title,
      to: (
        item.slug === 'parse-ledger'
          ? { name: 'parse-ledger' }
          : { name: 'service-details', params: { slug: item.slug } }
      ) as RouteLocationRaw,
    })),
)

const faqItems = computed<FaqRow[]>(() => tm('home.faqItems') as FaqRow[])

const activeFaqId = ref<string | null>(null)

watch(
  faqItems,
  (items) => {
    if (!items.length) {
      activeFaqId.value = null
      return
    }
    if (!items.some((item) => item.id === activeFaqId.value)) {
      activeFaqId.value = items[0]?.id ?? null
    }
  },
  { immediate: true },
)
const toggleFaq = (id: string) => {
  activeFaqId.value = activeFaqId.value === id ? null : id
}
</script>
