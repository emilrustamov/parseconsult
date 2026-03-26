<template>
  <section id="hero" class="relative overflow-hidden scroll-mt-28 border-b border-slate-200/80 bg-white/80 pt-24 backdrop-blur-[2px] md:scroll-mt-32 md:pt-28">
    <div v-reveal class="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-12 md:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch lg:gap-10 lg:px-8 lg:py-20 xl:gap-12">
      <div class="max-w-3xl">
        <h1 class="relative z-10 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-[3.25rem] xl:text-6xl">
          Учёт, внедрение и обучение в ОАЭ
        </h1>
        <div class="mt-4 w-full max-w-[400px] sm:max-w-[460px] md:mt-6 md:max-w-[520px]">
          <DotLottieVue
            src="/Office Re-Color.lottie"
            class="h-auto w-full object-contain object-left"
            autoplay
            loop
          />
        </div>
      </div>

      <div class="flex min-h-0 flex-col lg:h-full">
        <div class="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3 lg:h-full lg:min-h-0">
          <RouterLink
            v-for="item in heroServices"
            :key="item.title"
            :to="item.to"
            class="group flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-slate-50/90 sm:gap-4 lg:min-h-0 lg:flex-1"
          >
            <span
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/20 text-xl leading-none text-slate-900 transition group-hover:bg-brand/30"
              aria-hidden="true"
            >
              {{ item.icon }}
            </span>
            <h3 class="min-w-0 flex-1 text-base font-semibold leading-snug text-slate-900">{{ item.title }}</h3>
            <span
              class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand/15 text-sm text-slate-900 transition group-hover:bg-brand"
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
          <span class="text-brand-dark">QuickBooks</span>.
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

  <section id="services" class="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/80 py-16 backdrop-blur-[2px] md:scroll-mt-32 md:py-24">
    <div
      class="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch lg:gap-12 lg:px-8"
    >
      <div
        v-reveal
        :id="primaryService.id"
        class="flex min-h-0 flex-col rounded-xl border border-brand-dark/35 bg-brand-surface p-8 shadow-md shadow-black/10 lg:h-full lg:min-h-full"
      >
        <div class="shrink-0">
          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-brand">Услуги</p>
          <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Внедрение, обучение, автоматизация
          </h2>
          <p class="mt-6 text-base leading-8 text-emerald-50/95">
            Выстраиваем прозрачный и управляемый учёт с точной отчётностью, полностью адаптированной под требования бизнеса и регуляции ОАЭ.
          </p>
        </div>
        <div class="mt-8 border-t border-white/15 pt-8 lg:mt-auto">
          <span
            class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-lg leading-none"
            aria-hidden="true"
          >
            {{ primaryService.icon }}
          </span>
          <h3 class="text-lg font-semibold leading-snug tracking-tight text-white md:text-xl">
            {{ primaryService.title }}
          </h3>
          <p class="mt-3 text-sm leading-7 text-emerald-50/90 md:text-base">
            {{ primaryService.description }}
          </p>
          <RouterLink
            :to="primaryService.to"
            class="mt-5 inline-flex items-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark"
          >
            Подробнее
          </RouterLink>
        </div>
      </div>

      <div class="grid min-h-0 gap-6 sm:grid-cols-2 lg:h-full lg:min-h-0">
        <article
          v-for="(service, index) in secondaryServices"
          :id="service.id"
          :key="service.id"
          v-reveal="100 + index * 70"
          class="rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-slate-300 sm:p-8"
          :class="service.id === 'training' ? 'sm:col-span-2' : ''"
        >
          <span
            class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20 text-lg leading-none text-slate-900"
            aria-hidden="true"
          >
            {{ service.icon }}
          </span>
          <h3 class="text-lg font-semibold leading-snug tracking-tight text-slate-900 sm:text-xl">
            {{ service.title }}
          </h3>
          <p class="mt-3 text-sm leading-7 text-slate-600">
            {{ service.description }}
          </p>
          <RouterLink
            :to="service.to"
            class="mt-5 inline-flex items-center rounded-lg bg-brand/15 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-brand/25"
          >
            Подробнее
          </RouterLink>
        </article>
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
            Типичные симптомы «застывшего» учёта.
          </h3>
          <ul class="mt-6 space-y-3">
            <li
              v-for="pain in painPoints"
              :key="`aside-${pain.id}`"
              class="flex gap-3 rounded-xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm font-medium leading-snug text-slate-800 shadow-sm shadow-slate-200/30"
            >
              <span class="text-lg leading-none" aria-hidden="true">{{ pain.icon }}</span>
              <span class="min-w-0 flex-1">{{ pain.title }}</span>
            </li>
          </ul>
          <div class="mt-8 flex gap-3 border-t border-slate-200/80 pt-6">
            <span
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-amber-400/50 bg-amber-100 text-lg font-extrabold leading-none text-amber-950 shadow-sm"
              aria-hidden="true"
            >!</span>
            <p class="min-w-0 self-center text-sm font-medium leading-7 text-slate-700 md:text-base">
              Даже один пункт из списка — уже повод связаться.
            </p>
          </div>
        </aside>

        <form
          v-reveal="120"
          class="flex flex-col space-y-6 rounded-2xl border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white p-6 md:p-7"
          @submit.prevent="submitHomeLeadForm"
        >
          <div v-if="homeFormSuccess" class="rounded-lg border border-brand/30 bg-brand/10 px-4 py-3 text-sm font-medium text-slate-800">
            Спасибо! Заявка отправлена. Мы свяжемся с вами удобным способом.
          </div>

          <div>
            <label for="home-lead-fullname" class="mb-2 block text-sm font-semibold text-slate-800">ФИО</label>
            <input
              id="home-lead-fullname"
              v-model="homeForm.fullName"
              type="text"
              name="fullName"
              required
              autocomplete="name"
              class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-4 focus:ring-brand/20"
              placeholder="Иванов Иван Иванович"
            >
          </div>

          <div class="hidden" aria-hidden="true">
            <label for="home-lead-website">Website</label>
            <input id="home-lead-website" v-model="homeForm.website" type="text" name="website" tabindex="-1" autocomplete="off">
          </div>

          <div>
            <span class="mb-3 block text-sm font-semibold text-slate-800">Как с вами связаться?</span>
            <div class="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <label
                v-for="opt in homeContactMethodOptions"
                :key="opt.value"
                class="flex flex-1 cursor-pointer items-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition"
                :class="homeForm.contactMethod === opt.value ? 'border-brand-dark bg-brand/15' : 'border-slate-200 bg-white hover:border-slate-300'"
              >
                <input v-model="homeForm.contactMethod" type="radio" name="homeContactMethod" :value="opt.value" class="size-4 accent-brand-dark">
                {{ opt.label }}
              </label>
            </div>
          </div>

          <div v-if="homeShowPhoneField">
            <label for="home-lead-phone" class="mb-2 block text-sm font-semibold text-slate-800">Телефон</label>
            <input
              id="home-lead-phone"
              v-model="homeForm.phone"
              type="tel"
              name="phone"
              :required="homeShowPhoneField"
              autocomplete="tel"
              class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-4 focus:ring-brand/20"
              placeholder="+971 XX XXX XXXX"
            >
          </div>

          <div v-if="homeShowEmailField">
            <label for="home-lead-email" class="mb-2 block text-sm font-semibold text-slate-800">Email</label>
            <input
              id="home-lead-email"
              v-model="homeForm.email"
              type="email"
              name="email"
              :required="homeShowEmailField"
              autocomplete="email"
              class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-4 focus:ring-brand/20"
              placeholder="you@company.ae"
            >
          </div>

          <div>
            <label for="home-lead-message" class="mb-2 block text-sm font-semibold text-slate-800">Сообщение</label>
            <textarea
              id="home-lead-message"
              v-model="homeForm.message"
              name="message"
              rows="4"
              required
              class="w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-4 focus:ring-brand/20"
              placeholder="Сроки, текущая система учёта, что хотите получить."
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full rounded-lg bg-brand py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
            :disabled="homeFormSubmitting"
          >
            {{ homeFormSubmitting ? 'Отправка…' : 'Отправить заявку' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import type { DirectiveBinding } from 'vue'
import { computed, reactive, ref } from 'vue'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

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
    id: 'firstbit',
    slug: 'firstbit',
    icon: '🧩',
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
  icon: item.icon,
  title: item.title,
  to: { name: 'service-details', params: { slug: item.slug } } as RouteLocationRaw,
}))

const primaryService = {
  ...keyServices[0],
  to: { name: 'service-details', params: { slug: keyServices[0].slug } } as RouteLocationRaw,
}
const secondaryServices = keyServices.slice(1).map((service) => ({
  ...service,
  to: { name: 'service-details', params: { slug: service.slug } } as RouteLocationRaw,
}))

const painPoints = [
  { id: 'sym-reports', icon: '🧾', title: 'Долгие ручные отчёты' },
  { id: 'sym-mismatch', icon: '🔀', title: 'Цифры в системах не сходятся' },
  { id: 'sym-routine', icon: '🔁', title: 'Команда в рутине' },
  { id: 'sym-clarity', icon: '🌫️', title: 'Нет ясности в финансах' },
  { id: 'sym-manual', icon: '⌨️', title: 'Ошибки ручного ввода' },
  { id: 'sym-analytics', icon: '📊', title: 'Нет оперативной аналитики' },
  { id: 'sym-docs', icon: '📂', title: 'Хаос в документах' },
]

const homeContactMethodOptions = [
  { value: 'phone', label: 'Телефон' },
  { value: 'email', label: 'Email' },
  { value: 'both', label: 'Оба варианта' },
] as const

const homeForm = reactive({
  fullName: '',
  contactMethod: 'email' as string,
  phone: '',
  email: '',
  website: '',
  message: '',
})

const homeShowPhoneField = computed(() => homeForm.contactMethod === 'phone' || homeForm.contactMethod === 'both')
const homeShowEmailField = computed(() => homeForm.contactMethod === 'email' || homeForm.contactMethod === 'both')

const homeFormSubmitting = ref(false)
const homeFormSuccess = ref(false)

function submitHomeLeadForm(): void {
  if (homeForm.website.trim().length > 0) {
    return
  }

  homeFormSubmitting.value = true
  homeFormSuccess.value = false

  const lines: string[] = [`ФИО: ${homeForm.fullName}`, `Связь: ${homeForm.contactMethod}`]
  if (homeShowPhoneField.value) lines.push(`Телефон: ${homeForm.phone}`)
  if (homeShowEmailField.value) lines.push(`Email: ${homeForm.email}`)
  lines.push('')
  lines.push(homeForm.message)

  const body = encodeURIComponent(lines.join('\n'))
  const subject = encodeURIComponent(`Заявка с главной — ${homeForm.fullName}`)
  window.location.href = `mailto:info@parseconsult.ae?subject=${subject}&body=${body}`

  homeFormSuccess.value = true
  homeFormSubmitting.value = false
}

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
