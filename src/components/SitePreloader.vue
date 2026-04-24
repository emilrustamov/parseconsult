<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LazyDotLottie from '@/components/LazyDotLottie.vue'

const { t } = useI18n()
</script>

<template>
  <div
    class="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-slate-50 font-sans"
    aria-hidden="true"
  >
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.4]"
      style="
        background-image: linear-gradient(to right, rgb(148 163 184 / 0.12) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(148 163 184 / 0.12) 1px, transparent 1px);
        background-size: 32px 32px;
      "
    />

    <div class="relative flex flex-col items-center gap-10 px-6">
      <div class="flex items-center gap-3">
        <img
          src="/logo.jpg"
          :alt="t('brand.logoAlt')"
          class="h-11 w-11 rounded-xl object-contain"
          loading="eager"
          decoding="async"
        >
        <div class="text-left">
          <div class="text-sm font-semibold tracking-tight text-slate-900">{{ t('brand.siteName') }}</div>
          <div class="text-[11px] font-medium text-slate-500">{{ t('preloader.subtitle') }}</div>
        </div>
      </div>

      <div class="w-[min(100%,360px)]">
        <LazyDotLottie
          src="/budget-and-bills.lottie"
          root-class="h-auto w-full"
          lottie-class="h-auto w-full object-contain"
          root-margin="400px"
        />
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0 h-[3px] overflow-hidden bg-slate-200/90">
      <div class="preloader-progress absolute inset-y-0 left-0 w-1/3 rounded-r-full bg-brand-dark" />
    </div>
  </div>
</template>

<style scoped>
.preloader-progress {
  animation: progress-slide 1.1s ease-in-out infinite;
}

@keyframes progress-slide {
  0% {
    left: -35%;
  }
  100% {
    left: 100%;
  }
}
</style>
