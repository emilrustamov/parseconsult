<template>
  <section class="relative isolate overflow-hidden scroll-mt-28 border-b border-slate-200/80 bg-white/80 pt-20 backdrop-blur-[2px] md:scroll-mt-32 md:pt-24">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="orb orb-primary"></div>
      <div class="orb orb-secondary"></div>
      <div class="orb orb-accent"></div>
    </div>

    <div class="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pb-16 md:pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:px-8">
      <div>
        <p class="inline-flex rounded-full border border-brand/40 bg-brand/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
          Error 404
        </p>
        <h1 class="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl">
          Страница не найдена
        </h1>
        <p class="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
          Возможно, ссылка устарела или страница была перемещена. Вернитесь на главную или перейдите в контакты, и мы быстро поможем найти нужный раздел.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-3">
          <RouterLink
            :to="{ name: 'home' }"
            class="inline-flex items-center rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark"
          >
            На главную
          </RouterLink>
          <RouterLink
            :to="{ name: 'contact' }"
            class="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Перейти в контакты
          </RouterLink>
        </div>
      </div>

      <div class="relative">
        <div class="glass-card overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-lg shadow-slate-200/40 md:p-6">
          <DotLottieVue
            src="/Animation - 1698647540467.lottie"
            class="h-[260px] w-full object-contain md:h-[320px]"
            autoplay
            loop
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
</script>

<style scoped>
.orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(45px);
  opacity: 0.4;
  animation: float 7s ease-in-out infinite;
}

.orb-primary {
  top: 12%;
  left: -6%;
  height: 190px;
  width: 190px;
  background: rgba(94, 233, 181, 0.45);
}

.orb-secondary {
  right: -4%;
  top: 24%;
  height: 230px;
  width: 230px;
  background: rgba(59, 130, 246, 0.26);
  animation-delay: 1s;
}

.orb-accent {
  bottom: 8%;
  left: 38%;
  height: 160px;
  width: 160px;
  background: rgba(139, 92, 246, 0.2);
  animation-delay: 2s;
}

.glass-card {
  animation: rise 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -16px, 0);
  }
}

@keyframes rise {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -8px, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .orb,
  .glass-card {
    animation: none;
  }
}
</style>
