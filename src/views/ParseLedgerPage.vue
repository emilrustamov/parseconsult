<template>
  <section id="Parse-Ledger" class="scroll-mt-28 border-b border-slate-200/80 bg-white/80 pt-24 backdrop-blur-[2px] md:scroll-mt-32 md:pt-28">
    <div class="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch lg:gap-12 lg:px-8 lg:py-20">
      <div class="max-w-3xl">
        <h1 class="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
          <span class="text-brand-dark">Parse-Ledger</span> — автоматическая загрузка банковской выписки
        </h1>
        <div class="mt-6 space-y-6 text-base leading-8 text-slate-600 md:text-lg">
          <p>
            Когда отсутствует прямая интеграция с банком, бухгалтерия возвращается к ручному вводу, таблицам и дополнительной операционной нагрузке.
          </p>
          <p>
            Parse-Ledger принимает банковские выписки в формате PDF и Excel и превращает их в структурированные данные, готовые к загрузке в бухгалтерские системы.
          </p>
        </div>
        <p class="mt-8 text-base font-medium leading-8 text-slate-700 md:text-lg">
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

      <div class="relative min-h-[340px] w-full lg:min-h-0 lg:h-full">
        <DotLottieVue
          src="/Yogi finance.lottie"
          class="absolute inset-0 h-full w-full object-contain"
          autoplay
          loop
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { parseLedgerSiteUrl } from '@/socialLinks'
</script>
