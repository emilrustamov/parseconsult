<template>
  <section id="parse-ledger" class="scroll-mt-28 border-b border-slate-200/80 bg-white/80 pt-20 backdrop-blur-[2px] md:scroll-mt-32 md:pt-24">
    <div class="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch lg:gap-12 lg:px-8 lg:py-10">
      <div class="max-w-3xl">
        <h1 class="mt-4 max-w-4xl text-2xl font-semibold leading-[1.05] tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
          <span class="text-brand-dark">Parse Ledger</span> — автоматическая загрузка банковской выписки в ОАЭ
        </h1>
        <div class="relative mt-6 min-h-[260px] w-full lg:hidden">
          <DotLottieVue
            src="/Yogi finance.lottie"
            class="absolute inset-0 h-full w-full object-contain"
            autoplay
            loop
          />
        </div>
        <p class="mt-6 text-base leading-8 text-slate-600 md:text-lg">
          Когда отсутствует прямая интеграция с банком, бухгалтерия возвращается к ручному вводу, таблицам и дополнительной операционной нагрузке.<br>
          Parse Ledger принимает банковские выписки в формате PDF и Excel и превращает их в структурированные данные, готовые к загрузке в бухгалтерские системы.<br>
          Разработано для бухгалтеров, финансовых отделов и аутсорсинговых компаний в ОАЭ, в России и в Казахстане.
        </p>
        <a
          :href="parseLedgerSiteUrl"
          class="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark sm:w-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Попробовать
        </a>
      </div>

      <div class="relative hidden min-h-[340px] w-full lg:block lg:min-h-0 lg:h-full">
        <DotLottieVue
          src="/Yogi finance.lottie"
          class="absolute inset-0 h-full w-full object-contain"
          autoplay
          loop
        />
      </div>
    </div>
  </section>

  <section class="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/80 py-12 backdrop-blur-[2px] md:scroll-mt-32 md:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="max-w-4xl text-xl font-semibold tracking-tight text-slate-950 md:text-3xl">
        <span class="text-brand-dark">Parse Ledger</span> поддерживает автоматическую обработку банковских выписок ведущих банков ОАЭ
      </h2>
      <p class="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
        Программа Parse Ledger позволяет быстро и точно обрабатывать банковские выписки, минимизируя ручной труд и снижая риск ошибок.
      </p>
      <h3 class="mt-10 text-base font-semibold text-slate-900 md:text-lg">
        Поддерживаются выписки следующих банков:
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
          <div class="text-sm font-semibold text-slate-700">и другие банки</div>
        </article>
      </div>
      <div class="mt-12 max-w-3xl">
        <h3 class="text-base font-semibold text-slate-900 md:text-lg">
          Что вы получаете:
        </h3>
        <ul class="mt-4 space-y-3 border-l-2 border-brand/50 pl-5 text-base leading-8 text-slate-600 md:text-lg">
          <li>автоматическую загрузку и распознавание выписок</li>
          <li>корректное распределение транзакций</li>
          <li>интеграцию с учётными системами (FirstBit, Zoho Books, QuickBooks и др.)</li>
        </ul>
      </div>
      <p class="mt-10 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
        <span class="font-semibold text-brand-dark">Parse Ledger</span> — это удобный инструмент для бухгалтеров и бизнеса, который экономит время и делает ведение бухгалтерского учёта лёгким.
      </p>
    </div>
  </section>

  <section class="scroll-mt-28 border-b border-slate-200/80 bg-white/80 py-12 backdrop-blur-[2px] md:scroll-mt-32 md:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-xl font-semibold tracking-tight text-slate-950 md:text-3xl">
        Инструкция по использованию программы
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
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { parseLedgerSiteUrl } from '@/socialLinks'

type ParseLedgerBank = {
  name: string
  abbr: string
  logoSrc?: string
}

const parseLedgerBanks: ParseLedgerBank[] = [
  { name: 'Abu Dhabi Commercial Bank', abbr: 'ADCB' },
  { name: 'Abu Dhabi Islamic Bank', abbr: 'ADIB' },
  { name: 'Ajman Bank', abbr: '' },
  { name: 'Commercial Bank of Dubai', abbr: 'CBD' },
  { name: 'Dubai Islamic Bank', abbr: 'DIB' },
  { name: 'Emirates Islamic', abbr: '' },
  { name: 'Emirates NBD', abbr: '' },
  { name: 'First Abu Dhabi Bank', abbr: 'FAB' },
  { name: 'Mashreq Bank', abbr: '' },
  { name: 'Al Maryah Community Bank', abbr: 'MBank' },
  { name: 'Banque Misr', abbr: 'MISR' },
  { name: 'RAKBANK', abbr: '' },
  { name: 'Sharjah Islamic Bank', abbr: 'SIB' },
  { name: 'Wio Bank', abbr: 'WIO' },
]

const parseLedgerTutorialVideos = [
  {
    title: 'Parse Ledger — инструкция (видео 1)',
    embedSrc: 'https://www.youtube.com/embed/rYQ1q5-YsYg',
  },
  {
    title: 'Parse Ledger — инструкция (видео 2)',
    embedSrc: 'https://www.youtube.com/embed/G4yr5viuawM?start=5',
  },
  {
    title: 'Parse Ledger — инструкция (видео 3)',
    embedSrc: 'https://www.youtube.com/embed/8Y0GXxRpVX8',
  },
] as const
</script>
