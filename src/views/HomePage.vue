<template>
  <section id="hero" class="relative overflow-hidden scroll-mt-28 border-b border-slate-200/80 bg-white/80 pt-24 backdrop-blur-[2px] md:scroll-mt-32 md:pt-28">
    <div v-reveal class="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-12 md:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch lg:gap-10 lg:px-8 lg:py-20 xl:gap-12">
      <div class="flex max-w-3xl flex-col lg:h-full lg:justify-between">
        <h1 class="relative z-10 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-[2.55rem] lg:text-[2.7rem] xl:text-[3.2rem]">
          Учёт, внедрение и обучение в <span class="text-[#3ccd98]">ОАЭ</span>
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
        <div class="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3 lg:h-full lg:min-h-0">
          <RouterLink
            v-for="item in heroServices"
            :key="item.id"
            :to="item.to"
            class="group flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-slate-50/90 sm:gap-4 lg:min-h-0 lg:flex-1"
            :class="item.id === 'parse-ledger' ? 'text-white' : ''"
            :style="item.id === 'parse-ledger' ? { backgroundColor: '#153d34', borderColor: '#153d34' } : undefined"
          >
            <span
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/20 text-xl leading-none text-slate-900 transition group-hover:bg-brand/30"
              :class="item.id === 'parse-ledger' ? 'bg-white/15 text-white group-hover:bg-white/20' : ''"
              aria-hidden="true"
            >
              {{ item.icon }}
            </span>
            <h3 class="min-w-0 flex-1 text-base font-semibold leading-snug text-slate-900" :class="item.id === 'parse-ledger' ? 'text-white' : ''">{{ item.title }}</h3>
            <span
              class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand/15 text-sm text-slate-900 transition group-hover:bg-brand"
              :class="item.id === 'parse-ledger' ? 'bg-white/15 text-white group-hover:bg-white/20' : ''"
              aria-hidden="true"
            >↗</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section id="platforms" class="scroll-mt-28 border-b border-slate-200/80 bg-white/80 py-16 backdrop-blur-[2px] md:scroll-mt-32 md:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div v-reveal class="max-w-4xl">
        <h2 class="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
          Структурированное внедрение
          <span class="text-brand-dark">FirstBit</span>,
          <span class="text-brand-dark">Zoho Books</span>
          и
          <span class="text-brand-dark">QuickBooks</span>,
          а также
          <span class="text-[#03bcef]">Bitrix24</span>.
        </h2>
        <p class="mt-6 text-base leading-8 text-slate-600 md:text-lg">
          Поддерживаем внедрение, настройку и интеграцию современных бухгалтерских систем — FirstBit, Zoho Books и QuickBooks —
          обеспечивая прозрачный учёт, автоматизацию процессов и соответствие требованиям бизнеса в ОАЭ.
        </p>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-4">
        <article v-for="(platform, index) in platforms" :key="platform.name" v-reveal="100 + index * 70" class="group rounded-xl border border-slate-200 bg-white p-7 transition hover:border-slate-300">
          <div class="flex min-w-0 max-w-full items-center gap-3 sm:gap-4">
            <img
              :src="platform.logoSrc"
              :alt="platform.logoAlt"
              :class="platform.logoClass ?? 'h-8 w-auto max-w-[7rem] shrink-0 object-contain object-left sm:h-9 sm:max-w-[8rem]'"
              loading="lazy"
              decoding="async"
            />
            <div class="min-w-0 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{{ platform.name }}</div>
          </div>
          <p class="mt-6 border-l-2 border-brand/50 pl-4 text-sm leading-7 text-slate-600">{{ platform.description }}</p>
        </article>
      </div>
    </div>
  </section>

  <section id="about" class="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/80 py-16 backdrop-blur-[2px] md:scroll-mt-32 md:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div v-reveal class="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div class="lg:sticky lg:top-32">
          <h2 class=" text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Помогаем убрать рутину и выстроить прозрачный учет
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
            class="mx-auto mt-8 flex w-fit items-center rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark"
          >
            Оставить заявку
          </a>
        </div>
        <div class="space-y-6 border-l border-slate-300/80 pl-6 text-base leading-8 text-slate-700 md:pl-8 md:text-lg">
          <p>
            Если в вашей компании возникают сложности, связанные с рутинными операциями, ручным вводом данных, несоответствием отчетов или отсутствием прозрачности в учете, а также если вы стремитесь получать оперативную аналитику и настроить CRM-систему под задачи бизнеса — мы готовы предложить эффективное решение.
          </p>
          <p>
            Команда Parse Solutions объединяет опытных программистов, бухгалтеров и финансистов с совокупным профессиональным стажем более 25 лет. Мы проводим детальный анализ текущих процессов бухгалтерского учета и CRM, выявляем проблемные зоны и внедряем решения по автоматизации и оптимизации бизнеса.
          </p>
          <p>
            Наша цель — снизить операционную нагрузку, повысить точность учета и обеспечить прозрачность данных для принятия управленческих решений.
          </p>
          <p class="font-medium text-slate-700">
            Оставьте заявку, и мы свяжемся с вами для обсуждения ваших задач и подбора оптимального решения.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/80 py-16 backdrop-blur-[2px] md:scroll-mt-32 md:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div v-reveal class="max-w-4xl">
        <h2 class="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
          Внедрение, обучение, автоматизация
        </h2>
        <p class="mt-6 text-base leading-8 text-slate-600 md:text-lg">
          Выстраиваем прозрачный и управляемый учёт с точной отчётностью, полностью адаптированной под требования бизнеса и регуляции ОАЭ.
        </p>
      </div>

      <div v-reveal="80" class="mt-10">
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
                class="mt-5 inline-flex items-center self-start rounded-lg px-4 py-2.5 text-sm font-semibold transition"
                :class="isAccentServiceCard(index)
                  ? 'bg-brand text-slate-900 hover:bg-brand-dark'
                  : 'bg-brand/15 text-slate-900 hover:bg-brand/25'"
              >
                Подробнее
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

  <section id="home-lead" class="scroll-mt-28 border-b border-slate-200/80 bg-white/80 py-16 backdrop-blur-[2px] md:scroll-mt-32 md:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">Расскажите о ситуации в учёте</h2>
    
      </div>

      <div class="mx-auto mt-12 grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-stretch lg:gap-12">
        <aside v-reveal class="flex flex-col rounded-2xl border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white p-6 md:p-7">
          <h3 class="text-lg font-semibold tracking-tight text-slate-950 md:text-xl">
            FAQ
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
          v-reveal="120"
          class="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white p-6 md:p-7"
        >
          <LeadRequestForm id-prefix="home-lead" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import type { DirectiveBinding } from 'vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/carousel.css'
import LeadRequestForm from '@/components/LeadRequestForm.vue'

type RevealElement = HTMLElement & { __revealObserver?: IntersectionObserver }

const vReveal = {
  mounted(el: RevealElement, binding: DirectiveBinding<number | undefined>) {
    const delay = typeof binding.value === 'number' ? binding.value : 0
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      el.classList.add('reveal-visible')
      return
    }

    el.classList.add('reveal-block')
    el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return
        el.classList.add('reveal-visible')
        observer.unobserve(el)
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)
    el.__revealObserver = observer
  },
  unmounted(el: RevealElement) {
    el.__revealObserver?.disconnect()
  },
}
const keyServices = [
  {
    id: 'parse-ledger',
    slug: 'parse-ledger',
    icon: '🧾',
    title: 'Parse-Ledger — автоматическая загрузка банковской выписки',
    description:
      'Настраиваем и внедряем Parse-Ledger для прозрачного управленческого и бухгалтерского учета в ежедневной работе команды.',
  },
  {
    id: 'bitrix24',
    slug: 'bitrix24',
    icon: '🤖',
    title: 'Внедрение CRM Битрикс24',
    description:
      'Внедряем Битрикс24, настраиваем воронки, автоматизации и интеграции с учетом и внутренними бизнес-процессами.',
  },
  {
    id: 'firstbit',
    slug: 'firstbit',
    icon: '⚙️',
    title: 'Экспертное внедрение и кастомизация FirstBit в ОАЭ',
    description:
      'Настраиваем систему под требования бизнеса в ОАЭ с учётом локального законодательства и специфики процессов.',
  },
  {
    id: 'accounting-systems',
    slug: 'accounting-systems',
    icon: '🔧',
    title: 'Внедрение и восстановление бухгалтерских систем',
    description:
      'Восстанавливаем учёт, внедряем системы с нуля и выстраиваем стабильную финансовую инфраструктуру.',
  },
  {
    id: 'accounting-setup',
    slug: 'accounting-setup',
    icon: '📊',
    title: 'Настройка бухгалтерского учета под деятельность',
    description:
      'Адаптируем учёт под бизнес-модель компании для точной аналитики и управленческой отчётности.',
  },
  {
    id: 'training',
    slug: 'training',
    icon: '🎓',
    title: 'Сопровождение и обучение вашего персонала',
    description:
      'Обучаем сотрудников работе с системой и обеспечиваем постоянную поддержку для стабильной работы.',
  },
] as const

const heroServices = keyServices.map((item) => ({
  id: item.id,
  icon: item.icon,
  title: item.title,
  to: { name: 'service-details', params: { slug: item.slug } } as RouteLocationRaw,
}))

const serviceCards = keyServices.map((service) => ({
  ...service,
  to: { name: 'service-details', params: { slug: service.slug } } as RouteLocationRaw,
}))

const faqItems = [
  {
    id: 'faq-start',
    question: 'С чего начать работу с вами?',
    answer: 'Оставьте заявку в форме. Мы свяжемся с вами, уточним задачи и предложим подходящий формат внедрения.',
  },
  {
    id: 'faq-duration',
    question: 'Сколько времени занимает внедрение?',
    answer: 'Срок зависит от объёма задач и состояния текущего учёта. Базовый этап обычно занимает от 2 до 6 недель.',
  },
  {
    id: 'faq-systems',
    question: 'С какими системами вы работаете?',
    answer: 'Мы внедряем и настраиваем FirstBit, Zoho Books, QuickBooks и Bitrix24, а также интеграции между ними.',
  },
  {
    id: 'faq-training',
    question: 'Обучаете ли вы команду после внедрения?',
    answer: 'Да, проводим обучение сотрудников и сопровождаем запуск, чтобы команда уверенно работала в новой системе.',
  },
]

const activeFaqId = ref<string | null>(faqItems[0]?.id ?? null)
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
  if (!serviceCards.length) return 0
  const centerOffset = Math.floor(visibleServiceSlides.value / 2)
  return (currentServiceSlide.value + centerOffset) % serviceCards.length
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

const platforms = [
  {
    name: 'FirstBit',
    logoSrc: '/fb.png',
    logoAlt: 'First Bit',
    logoClass:
      'h-11 w-auto max-w-[11rem] shrink-0 object-contain object-left sm:h-12 sm:max-w-[13rem] md:h-[3.25rem] md:max-w-[14rem]',
    description:
      'FirstBit — внедряем и настраиваем систему с учётом требований локального учёта в ОАЭ, обеспечивая полный контроль финансов и соответствие регуляциям.',
  },
  {
    name: 'Zoho Books',
    logoSrc: '/zoho.png',
    logoAlt: 'Zoho',
    description:
      'Zoho Books — настраиваем облачный учёт с автоматизацией операций, интеграцией с банками и удобным управлением финансами в реальном времени.',
  },
  {
    name: 'QuickBooks',
    logoSrc: '/qb.svg',
    logoAlt: 'QuickBooks',
    description:
      'QuickBooks — внедряем гибкую систему для малого и среднего бизнеса с быстрой настройкой учёта, отчётности и интеграций с внешними сервисами.',
  },
  {
    name: 'Bitrix24',
    logoSrc: '/bitrix24.png',
    logoAlt: 'Bitrix24',
    description:
      'Bitrix24 — настраиваем CRM, автоматизируем воронку продаж, задачи и внутренние процессы, связывая операции с финансовым учётом.',
  },
]
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
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  color: #334155;
  width: 2.5rem;
  height: 2.5rem;
}

.reveal-block {
  opacity: 0;
  transform: translateY(26px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal-block {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
