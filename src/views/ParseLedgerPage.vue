<template>
  <section id="parse-ledger" class="scroll-mt-28 border-b border-slate-200/80 bg-white/80 pt-20 backdrop-blur-[2px] md:scroll-mt-32 md:pt-24">
    <div class="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch lg:gap-12 lg:px-8 lg:py-10">
      <div class="max-w-3xl">
        <h1 class="mt-4 max-w-4xl text-3xl font-semibold leading-[1.05] tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
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
          Разработано для бухгалтеров, финансовых отделов и аутсорсинговых компаний в ОАЭ.
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
      <h2 class="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
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
