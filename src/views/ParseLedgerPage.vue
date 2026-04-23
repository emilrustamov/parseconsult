<template>
  <section
    id="parse-ledger"
    class="scroll-mt-28 border-b border-slate-200/80 bg-white/80 pb-0 pt-20 backdrop-blur-[2px] md:scroll-mt-32 md:pb-0 md:pt-24"
  >
    <div
      class="mx-auto grid max-w-7xl gap-12 px-6 pt-12 pb-0 md:pt-16 md:pb-0 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch lg:gap-12 lg:px-8 lg:pt-10 lg:pb-0"
    >
      <div class="max-w-3xl">
        <h1 class="mt-4 max-w-4xl text-2xl font-semibold leading-[1.05] tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
          {{ t('parseLedger.heroTitle') }}
        </h1>
        <div class="relative mt-6 min-h-[260px] w-full lg:hidden">
          <LazyDotLottie
            src="/yogi-finance.lottie"
            root-class="absolute inset-0 h-full w-full"
            lottie-class="absolute inset-0 h-full w-full object-contain"
          />
        </div>
        <div class="mt-6 space-y-4 text-base leading-8 text-slate-600 md:text-lg">
          <p>{{ t('parseLedger.lead1') }}</p>
          <p>{{ t('parseLedger.lead2') }}</p>
        </div>
        <a
          :href="parseLedgerSiteUrl"
          class="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark sm:w-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t('cta.tryProduct') }}
        </a>
      </div>

      <div class="relative hidden min-h-[340px] w-full lg:block lg:min-h-0 lg:h-full">
        <LazyDotLottie
          src="/yogi-finance.lottie"
          root-class="absolute inset-0 h-full w-full"
          lottie-class="absolute inset-0 h-full w-full object-contain"
        />
      </div>
    </div>
  </section>

  <section class="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/80 py-12 backdrop-blur-[2px] md:scroll-mt-32 md:py-16">
    <div class="mx-auto max-w-7xl px-6 text-left lg:px-8">
      <div class="grid gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-start lg:gap-14 xl:gap-16">
        <div class="min-w-0">
          <span
            class="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-dark"
          >
            {{ t('parseLedger.aiEyebrow') }}
          </span>
          <h2 class="mt-4 max-w-4xl text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl lg:text-4xl">
            {{ t('parseLedger.aiTitle') }}
          </h2>
          <div class="mt-6 max-w-3xl space-y-4 text-base leading-8 text-slate-600 md:text-lg">
            <p>{{ t('parseLedger.aiBody1') }}</p>
            <p>{{ t('parseLedger.aiBody2') }}</p>
          </div>

          <div class="mt-12 max-w-3xl border-l-[3px] border-brand pl-5 md:mt-14 md:pl-7">
            <h2 class="text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
              {{ t('parseLedger.builtForTitle') }}
            </h2>
            <p class="mt-4 text-base leading-8 text-slate-600 md:text-lg">
              {{ t('parseLedger.builtForLead') }}
            </p>
            <p class="mt-6 text-base font-semibold leading-8 text-slate-900 md:text-lg">
              {{ t('parseLedger.integrationsLead') }}
            </p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="(name, index) in integrationNames"
                :key="`int-${index}`"
                class="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-800 shadow-sm shadow-slate-200/50"
              >
                {{ name }}
              </span>
            </div>
            <p class="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              {{ t('parseLedger.integrationsOutro') }}
            </p>
          </div>

          <div class="mt-12 max-w-3xl md:mt-14">
            <h2 class="text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
              {{ t('parseLedger.saveTimeTitle') }}
            </h2>
            <p class="mt-4 text-base leading-8 text-slate-600 md:text-lg">
              {{ t('parseLedger.saveTimeLead') }}
            </p>
          </div>
        </div>

        <aside class="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <div class="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-md shadow-slate-200/40 sm:p-6">
            <h3 class="text-lg font-semibold tracking-tight text-slate-950 md:text-xl">
              {{ t('parseLedger.keyFeaturesTitle') }}
            </h3>
            <ul class="mt-5 space-y-3">
              <li
                v-for="(line, index) in keyFeatureLines"
                :key="`kf-${index}`"
                class="rounded-xl border border-slate-200/80 bg-slate-50/70 px-4 py-3.5 text-sm font-medium leading-7 text-slate-800 md:text-base md:leading-8"
              >
                {{ line }}
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <div
        class="mt-14 grid gap-10 border-t border-slate-200/90 pt-14 md:mt-16 md:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch lg:gap-12 xl:gap-14"
      >
        <div class="min-w-0">
          <h3 class="text-lg font-semibold tracking-tight text-slate-950 md:text-xl">
            {{ t('parseLedger.benefitsSectionTitle') }}
          </h3>
          <ul class="mt-5 space-y-2.5">
            <li
              v-for="(line, index) in benefitLines"
              :key="`bf-${index}`"
              class="rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm leading-7 text-slate-700 shadow-sm shadow-slate-200/30 md:text-base md:leading-8"
            >
              {{ line }}
            </li>
          </ul>
        </div>
        <div
          class="flex min-h-0 min-w-0 flex-col justify-between rounded-2xl border border-brand/35 bg-gradient-to-br from-brand/12 via-white to-brand/8 p-6 shadow-md shadow-brand-dark/10 sm:p-8"
        >
          <div>
            <h2 class="text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
              {{ t('parseLedger.ctaTitle') }}
            </h2>
            <p class="mt-4 text-base leading-8 text-slate-700 md:text-lg">
              {{ t('parseLedger.ctaLead') }}
            </p>
            <p class="mt-5 text-base font-semibold leading-8 text-brand-dark md:text-lg">
              {{ t('parseLedger.ctaHighlight') }}
            </p>
          </div>
          <a
            :href="parseLedgerSiteUrl"
            class="ui-shine relative mt-8 inline-flex w-full items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark sm:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="relative z-[1]">{{ t('cta.tryProduct') }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/80 pt-0 pb-12 backdrop-blur-[2px] md:scroll-mt-32 md:pt-0 md:pb-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="max-w-4xl text-xl font-semibold tracking-tight text-slate-950 md:text-3xl">
        <span class="text-brand-dark">Parse Ledger</span> {{ t('parseLedger.banksTitle') }}
      </h2>
      <p class="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
        {{ t('parseLedger.banksLead') }}
      </p>
      <h3 class="mt-10 text-base font-semibold text-slate-900 md:text-lg">
        {{ t('parseLedger.banksListTitle') }}
      </h3>
      <div class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <article
          v-for="bank in parseLedgerBanks"
          :key="bank.name"
          class="flex flex-col rounded-xl border border-slate-200/90 bg-white px-4 py-4 shadow-sm shadow-slate-200/30 transition hover:border-slate-300"
        >
          <div v-if="bank.logoSrc" class="mb-3 flex h-12 items-center">
            <img
              :src="bank.logoSrc"
              :alt="bank.name"
              class="max-h-12 w-auto max-w-[9.5rem] object-contain object-left"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="text-sm font-semibold leading-snug text-slate-900">{{ bank.name }}</div>
          <div v-if="bank.abbr" class="mt-1 text-xs font-medium uppercase tracking-wide text-brand-dark">{{ bank.abbr }}</div>
        </article>
        <article
          class="flex flex-col justify-center rounded-xl border border-dashed border-slate-300/90 bg-white/60 px-4 py-4 text-center shadow-sm shadow-slate-200/20"
        >
          <div class="text-sm font-semibold text-slate-700">{{ t('parseLedger.otherBanks') }}</div>
        </article>
      </div>
    </div>
  </section>

  <section class="scroll-mt-28 border-b border-slate-200/80 bg-white/80 py-12 backdrop-blur-[2px] md:scroll-mt-32 md:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-xl font-semibold tracking-tight text-slate-950 md:text-3xl">
        {{ t('parseLedger.tutorialTitle') }}
      </h2>
      <div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="video in parseLedgerTutorialVideos"
          :key="video.embedSrc"
          class="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm shadow-slate-200/40"
        >
          <div class="aspect-video w-full bg-slate-900">
            <iframe
              class="h-full w-full"
              :src="video.embedSrc"
              :title="video.title"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LazyDotLottie from '@/components/LazyDotLottie.vue'
import { parseLedgerSiteUrl } from '@/socialLinks'

const { t, tm, locale } = useI18n()

const keyFeatureLines = computed(() => tm('parseLedger.keyFeatures') as string[])
const benefitLines = computed(() => tm('parseLedger.benefitLines') as string[])
const integrationNames = computed(() => tm('parseLedger.integrations') as string[])

type ParseLedgerBank = {
  name: string
  abbr: string
  logoSrc?: string
}

const parseLedgerBanks: ParseLedgerBank[] = [
{ name: 'Abu Dhabi Commercial Bank', abbr: 'ADCB', logoSrc: '/logos/ADCB-1.png' },
  { name: 'Abu Dhabi Islamic Bank', abbr: 'ADIB', logoSrc: '/logos/ADIB-2.png' },
  { name: 'Ajman Bank', abbr: '', logoSrc: '/logos/AB-3.png' },
  { name: 'Commercial Bank of Dubai', abbr: 'CBD', logoSrc: '/logos/CBD-4.png' },
  { name: 'Dubai Islamic Bank', abbr: 'DIB', logoSrc: '/logos/DIB-5.png' },
  { name: 'Emirates Islamic', abbr: '', logoSrc: '/logos/EIB-6.png' },
  { name: 'Emirates NBD', abbr: '', logoSrc: '/logos/NBD-7.png' },
  { name: 'First Abu Dhabi Bank', abbr: 'FAB', logoSrc: '/logos/FAB-8.png' },
  { name: 'Mashreq Bank', abbr: '', logoSrc: '/logos/mashreq-9.png' },
  { name: 'Al Maryah Community Bank', abbr: 'MBank', logoSrc: '/logos/AMCB-10.png' },
  { name: 'Banque Misr', abbr: 'MISR', logoSrc: '/logos/BMisr-11.png' },
  { name: 'RAKBANK', abbr: '', logoSrc: '/logos/RakBank-12.png' },
  { name: 'Sharjah Islamic Bank', abbr: 'SIB', logoSrc: '/logos/SIB-13.png' },
  { name: 'Wio Bank', abbr: 'WIO', logoSrc: '/logos/Wio-14.png' },
]

const parseLedgerTutorialVideos = computed(() => {
  if (locale.value === 'en') {
    return [
      {
        title: t('parseLedger.videoTitle1'),
        embedSrc: 'https://www.youtube.com/embed/pt0hvIOHEfc',
      },
      {
        title: t('parseLedger.videoTitle2'),
        embedSrc: 'https://www.youtube.com/embed/QGKL0ViEPfM',
      },
      {
        title: t('parseLedger.videoTitle3'),
        embedSrc: 'https://www.youtube.com/embed/oaStnJL9E4M',
      },
    ]
  }

  return [
    {
      title: t('parseLedger.videoTitle1'),
      embedSrc: 'https://www.youtube.com/embed/rYQ1q5-YsYg',
    },
    {
      title: t('parseLedger.videoTitle2'),
      embedSrc: 'https://www.youtube.com/embed/G4yr5viuawM?start=5',
    },
    {
      title: t('parseLedger.videoTitle3'),
      embedSrc: 'https://www.youtube.com/embed/8Y0GXxRpVX8',
    },
  ]
})
</script>
