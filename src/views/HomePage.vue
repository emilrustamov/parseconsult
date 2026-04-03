<template>
  <section id="hero" class="relative overflow-hidden scroll-mt-28 border-b border-slate-200/80 bg-white/80 pt-20 backdrop-blur-[2px] md:scroll-mt-32 md:pt-24">
    <div class="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-12 md:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch lg:gap-10 lg:px-8 lg:py-10 xl:gap-12">
      <div class="flex max-w-3xl flex-col lg:h-full lg:justify-between">
        <h1 class="relative z-10 max-w-4xl text-2xl font-semibold leading-tight tracking-tight text-slate-950 md:text-[2.55rem] lg:text-[2.7rem] xl:text-[3.2rem]">
          {{ t('home.hero.p1') }}<span class="text-[#3ccd98]">{{ t('home.hero.uae') }}</span>{{ t('home.hero.p2') }}<span class="text-[#3ccd98]">{{ t('home.hero.ru') }}</span>{{ t('home.hero.p3') }}<span class="text-[#3ccd98]">{{ t('home.hero.kz') }}</span>
        </h1>
        <div class="mt-4 w-full max-w-[460px] sm:max-w-[560px] md:mt-6 md:max-w-[640px] lg:mt-10 lg:max-w-none lg:pb-2">
          <DotLottieVue
            src="/Office Re-Color.lottie"
            class="h-full w-full object-contain object-left"
            autoplay
            loop
          />
        </div>
      </div>

      <div class="flex min-h-0 flex-col lg:h-full">
        <div class="flex flex-col gap-3 rounded-xl border border-transparent bg-transparent p-0 md:border-slate-200 md:bg-slate-50/80 md:p-3 lg:h-full lg:min-h-0">
          <RouterLink
            v-for="item in heroServices"
            :key="item.id"
            :to="item.to"
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

  <section id="platforms" class="scroll-mt-28 border-b border-slate-200/80 bg-white/80 py-6 backdrop-blur-[2px] md:scroll-mt-32 md:py-12 lg:py-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="max-w-4xl">
        <h2 class="mt-4 text-2xl font-semibold tracking-tight text-slate-950 md:text-4xl">
          {{ t('home.platformsHeading.intro') }}
          <span class="text-brand-dark">{{ t('home.platformsMeta.onec') }}</span>
          {{ t('home.platformsHeading.and') }}
          <span class="text-brand-dark">Firstbit</span>{{ t('home.platformsHeading.comma') }}
          <span class="text-brand-dark">Zoho Books</span>
          {{ t('home.platformsHeading.and') }}
          <span class="text-brand-dark">QuickBooks</span>{{ t('home.platformsHeading.also') }}
          <span class="text-[#03bcef]">Bitrix24</span>.
        </h2>
        <p class="mt-6 text-base leading-8 text-slate-600 md:text-lg">
          {{ t('home.platformsHeading.outro') }}
        </p>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-4">
        <article v-for="platform in platforms" :key="platform.key" class="group rounded-xl border border-slate-200 bg-white p-7 transition hover:border-slate-300">
          <div class="flex min-w-0 max-w-full items-center gap-3 sm:gap-4">
            <img
              :src="platform.logoSrc"
              :alt="platform.logoAlt"
              :class="platform.logoClass ?? 'h-8 w-auto max-w-[7rem] shrink-0 object-contain object-left sm:h-9 sm:max-w-[8rem]'"
              loading="lazy"
              decoding="async"
            />
            <img
              v-if="platform.secondaryLogoSrc"
              :src="platform.secondaryLogoSrc"
              :alt="platform.secondaryLogoAlt ?? ''"
              :class="platform.secondaryLogoClass ?? 'h-8 w-auto max-w-[7rem] shrink-0 object-contain object-left sm:h-9 sm:max-w-[8rem]'"
              loading="lazy"
              decoding="async"
            />
            <div class="min-w-0 text-lg font-semibold tracking-tight text-slate-900 sm:text-2xl">{{ platform.name }}</div>
          </div>
          <p class="mt-6 border-l-2 border-brand/50 pl-4 text-sm leading-7 text-slate-600">{{ platform.description }}</p>
        </article>
      </div>
    </div>
  </section>

  <section id="about" class="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/80 py-6 backdrop-blur-[2px] md:scroll-mt-32 md:py-12 lg:py-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div class="lg:sticky lg:top-32">
          <h2 class=" text-2xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            {{ t('home.about.title') }}
          </h2>
          <div class="mx-auto mt-6 h-[260px] w-full sm:h-[320px] lg:h-[360px]">
            <DotLottieVue
              src="/Budget And Bills.lottie"
              class="mx-auto h-full w-full object-contain object-center"
              autoplay
              loop
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
          <p class="font-medium text-slate-700">
            {{ t('home.about.p4') }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/80 py-6 backdrop-blur-[2px] md:scroll-mt-32 md:py-12 lg:py-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="max-w-4xl">
        <h2 class="text-2xl font-semibold tracking-tight text-slate-950 md:text-4xl">
          {{ t('home.servicesSection.title') }}
        </h2>
        <p class="mt-6 text-base leading-8 text-slate-600 md:text-lg">
          {{ t('home.servicesSection.text') }}
        </p>
      </div>

      <div class="mt-10">
        <Carousel
          v-model="currentServiceSlide"
          class="services-carousel"
          :items-to-show="1"
          :breakpoints="serviceCarouselBreakpoints"
          :gap="24"
          :wrap-around="true"
          :autoplay="5000"
          :pause-autoplay-on-hover="true"
          :transition="700"
          snap-align="start"
        >
          <Slide v-for="(service, index) in serviceCards" :key="service.id">
            <article
              :id="service.id"
              class="flex h-full flex-col rounded-xl border p-6 transition"
              :class="isAccentServiceCard(index)
                ? 'border-brand-dark/40 bg-brand-surface text-white shadow-lg shadow-brand-dark/10'
                : 'border-slate-200 bg-slate-50 text-slate-900'"
            >
              <div class="flex items-center gap-3">
                <span
                  class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg leading-none"
                  :class="isAccentServiceCard(index) ? 'bg-white/15 text-white' : 'bg-brand/20 text-slate-900'"
                  aria-hidden="true"
                >
                  {{ service.icon }}
                </span>
                <h3
                  class="min-w-0 text-base font-semibold tracking-tight"
                  :class="isAccentServiceCard(index) ? 'text-white' : 'text-slate-900'"
                >
                  {{ service.title }}
                </h3>
              </div>
              <p
                class="mt-3 flex-1 text-sm leading-7"
                :class="isAccentServiceCard(index) ? 'text-emerald-50/95' : 'text-slate-600'"
              >
                {{ service.description }}
              </p>
              <RouterLink
                :to="service.to"
                class="group mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold transition"
                :class="isAccentServiceCard(index)
                  ? 'text-emerald-50 hover:text-white'
                  : 'text-slate-900 hover:text-brand-dark'"
              >
                <span>{{ t('cta.learnMore') }}</span>
                <span
                  class="ui-shine relative inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md text-sm transition"
                  :class="isAccentServiceCard(index)
                    ? 'bg-brand text-slate-900 group-hover:bg-brand-dark'
                    : 'bg-brand/15 text-slate-900 group-hover:bg-brand'"
                  aria-hidden="true"
                >
                  <span class="relative z-[1]">↗</span>
                </span>
              </RouterLink>
            </article>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </section>

  <section id="home-lead" class="scroll-mt-28 border-b border-slate-200/80 bg-white/80 py-6 backdrop-blur-[2px] md:scroll-mt-32 md:py-12 lg:py-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-stretch lg:gap-12">
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
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/carousel.css'
import LeadRequestForm from '@/components/LeadRequestForm.vue'
import { homePlatformAssets } from '@/content/platforms'

const { t, tm } = useI18n()

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

const platforms = computed(() =>
  homePlatformAssets.map((asset) => ({
    ...asset,
    name: t(`home.platformCards.${asset.key}.name`),
    description: t(`home.platformCards.${asset.key}.description`),
  })),
)

const heroServices = computed(() =>
  keyServices.value.map((item) => ({
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

const serviceCards = computed(() =>
  keyServices.value.map((service) => ({
    ...service,
    to: (
      service.slug === 'parse-ledger'
        ? { name: 'parse-ledger' }
        : { name: 'service-details', params: { slug: service.slug } }
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
const currentServiceSlide = ref(0)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0)

const toggleFaq = (id: string) => {
  activeFaqId.value = activeFaqId.value === id ? null : id
}

const serviceCarouselBreakpoints = {
  768: {
    itemsToShow: 2,
  },
  1280: {
    itemsToShow: 3,
  },
} as const

const visibleServiceSlides = computed(() => {
  if (windowWidth.value >= 1280) return 3
  if (windowWidth.value >= 768) return 2
  return 1
})

const accentServiceIndex = computed(() => {
  const cards = serviceCards.value
  if (!cards.length) return 0
  const centerOffset = Math.floor(visibleServiceSlides.value / 2)
  return (currentServiceSlide.value + centerOffset) % cards.length
})

const isAccentServiceCard = (index: number) => index === accentServiceIndex.value

const handleWindowResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleWindowResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleWindowResize)
})

</script>

<style scoped>
:deep(.services-carousel .carousel__viewport) {
  overflow: hidden;
}

:deep(.services-carousel .carousel__track) {
  align-items: stretch;
}

:deep(.services-carousel .carousel__slide) {
  display: flex;
  height: auto;
}

:deep(.services-carousel .carousel__slide > *) {
  width: 100%;
}

:deep(.services-carousel .carousel__prev),
:deep(.services-carousel .carousel__next) {
  background: rgba(248, 250, 252, 0.75);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(148, 163, 184, 0.7);
  border-radius: 0.75rem;
  color: #334155;
  width: 2.5rem;
  height: 2.5rem;
  z-index: 20;
}

@media (max-width: 767px) {
  :deep(.services-carousel .carousel__prev),
  :deep(.services-carousel .carousel__next) {
    display: none;
  }
}

@media (min-width: 768px) {
  :deep(.services-carousel .carousel__prev) {
    left: -1.25rem;
  }

  :deep(.services-carousel .carousel__next) {
    right: -1.25rem;
  }
}

</style>
