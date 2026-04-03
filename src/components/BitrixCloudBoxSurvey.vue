<template>
  <section class="fade-in-up mt-12 scroll-mt-28 md:scroll-mt-32" style="animation-delay: 110ms">
    <div
      class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-[#0c1f1c] to-slate-900 px-5 py-10 shadow-[0_28px_80px_-30px_rgba(0,0,0,0.85)] sm:px-10 sm:py-14"
    >
      <div
        class="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand/20 blur-[100px]"
        aria-hidden="true"
      ></div>
      <div
        class="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-[#03bcef]/15 blur-[100px]"
        aria-hidden="true"
      ></div>
      <div
        class="pointer-events-none absolute inset-0 opacity-[0.07]"
        style="
          background-image: repeating-linear-gradient(
            -12deg,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.06) 2px,
            rgba(255, 255, 255, 0.06) 3px
          );
        "
        aria-hidden="true"
      ></div>

      <div class="relative z-10 space-y-8">
    <div v-if="phase === 'quiz' && currentQuestion" class="mx-auto max-w-2xl space-y-8">
      <div class="max-w-3xl space-y-3">
        <h2 class="text-xl font-semibold tracking-tight text-white md:text-3xl">
          {{ content.headline }}
        </h2>
        <p class="text-base leading-8 text-emerald-50/85 md:text-lg">
          {{ content.subheadline }}
        </p>
        <p class="text-sm font-semibold text-brand md:text-base">{{ content.timeNote }}</p>
      </div>

      <div class="space-y-5">
        <div class="flex gap-1.5 sm:gap-2" role="progressbar" :aria-valuenow="questionIndex + 1" :aria-valuemax="totalSteps" :aria-label="t('bitrixSurveyUi.quizProgressAria')">
          <div
            v-for="step in totalSteps"
            :key="step"
            class="h-1.5 flex-1 rounded-full transition-colors duration-300"
            :class="step <= questionIndex + 1 ? 'bg-brand' : 'bg-white/15'"
          ></div>
        </div>
        <div class="flex items-center justify-between gap-4 text-sm text-slate-400">
          <span class="font-medium text-slate-200">{{ t('bitrixSurveyUi.stepOf', { current: questionIndex + 1, total: totalSteps }) }}</span>
          <button
            v-if="questionIndex > 0"
            type="button"
            class="font-semibold text-brand underline-offset-2 hover:underline"
            @click="goBack"
          >
            {{ t('bitrixSurveyUi.back') }}
          </button>
        </div>
        <h3 class="text-lg font-semibold tracking-tight text-white md:text-2xl">{{ currentQuestion.text }}</h3>
        <div class="flex flex-col gap-3">
          <button
            v-for="(opt, idx) in currentQuestion.options"
            :key="idx"
            type="button"
            class="w-full rounded-xl border px-4 py-4 text-left text-sm font-medium leading-snug transition-[border-color,box-shadow,transform,background-color] duration-200 md:text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-safe:hover:-translate-y-px"
            :class="
              answers[currentQuestion.id] === idx
                ? 'border-brand-dark bg-white text-slate-900 shadow-[0_0_0_1px_rgba(60,205,152,0.45),0_10px_28px_-12px_rgba(15,23,42,0.18)]'
                : 'border-slate-200/95 bg-white text-slate-800 shadow-sm motion-safe:hover:border-slate-300 motion-safe:hover:bg-slate-50 motion-safe:hover:shadow-md'
            "
            @click="selectOption(currentQuestion.id, idx)"
          >
            {{ opt.label }}
          </button>
        </div>
      </div>
    </div>

    <div v-else-if="phase === 'lead'" class="space-y-8">
      <div class="mx-auto max-w-xl space-y-6 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
        <div>
          <p class="text-sm font-semibold leading-7 text-brand-dark md:text-base">{{ recommendationText }}</p>
          <h3 class="mt-4 text-lg font-semibold tracking-tight text-slate-950 md:text-xl">{{ content.finalTitle }}</h3>
          <p class="mt-2 text-sm leading-7 text-slate-600 md:text-base">{{ content.finalText }}</p>
        </div>

        <form class="space-y-5" @submit.prevent="submitLead">
          <div class="hidden" aria-hidden="true">
            <input v-model="hp" type="text" tabindex="-1" autocomplete="off">
          </div>
          <div>
            <label :for="ids.name" class="mb-2 block text-sm font-semibold text-slate-800">
              {{ content.nameLabel }} <span class="text-red-600">*</span>
            </label>
            <input
              :id="ids.name"
              v-model="leadForm.name"
              type="text"
              required
              autocomplete="name"
              class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-4 focus:ring-brand/20"
            >
          </div>
          <div>
            <label :for="ids.phone" class="mb-2 block text-sm font-semibold text-slate-800">
              {{ content.phoneLabel }} <span class="text-red-600">*</span>
            </label>
            <input
              :id="ids.phone"
              v-model="leadForm.phone"
              type="tel"
              required
              autocomplete="tel"
              class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-4 focus:ring-brand/20"
              placeholder="+971 XX XXX XXXX"
            >
          </div>
          <div>
            <label :for="ids.sphere" class="mb-2 block text-sm font-semibold text-slate-800">
              {{ content.sphereLabel }} <span class="text-red-600">*</span>
            </label>
            <select
              :id="ids.sphere"
              v-model="leadForm.sphere"
              required
              class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-4 focus:ring-brand/20"
            >
              <option value="" disabled>{{ t('bitrixSurveyUi.selectSphere') }}</option>
              <option v-for="s in content.businessSpheres" :key="s" :value="s">{{ s }}</option>
              <option :value="OTHER_VALUE">{{ content.otherSphereLabel }}</option>
            </select>
          </div>
          <div v-if="leadForm.sphere === OTHER_VALUE">
            <label :for="ids.other" class="mb-2 block text-sm font-semibold text-slate-800">
              {{ content.otherSpherePlaceholder }} <span class="text-red-600">*</span>
            </label>
            <input
              :id="ids.other"
              v-model="leadForm.otherSphere"
              type="text"
              :required="leadForm.sphere === OTHER_VALUE"
              class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-4 focus:ring-brand/20"
            >
          </div>
          <div class="flex flex-col gap-3">
            <button
              type="submit"
              class="ui-shine w-full rounded-lg bg-brand py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark disabled:opacity-60"
              :disabled="submitting"
            >
              {{ submitting ? t('bitrixSurveyUi.sending') : content.finalCta }}
            </button>
            <p class="text-center text-xs leading-5 text-slate-500 md:text-sm">{{ content.discountNoteUnderSubmit }}</p>
          </div>
        </form>
      </div>
    </div>

    <div v-else-if="phase === 'success'" class="mx-auto max-w-2xl space-y-8 text-center">
      <div class="space-y-3 rounded-2xl border border-slate-200/90 bg-white px-6 py-8 shadow-sm">
        <h3 class="text-lg font-semibold text-slate-950 md:text-xl">{{ content.successTitle }}</h3>
        <p v-for="(line, i) in content.successLines" :key="i" class="text-sm leading-7 text-slate-700 md:text-base">
          {{ line }}
        </p>
        <p class="text-base font-semibold text-slate-900">{{ content.successDiscountLine }}</p>
        <p class="text-sm font-medium text-slate-700">{{ content.successUrgencyLine }}</p>
      </div>
      <div class="rounded-2xl border border-slate-200/90 bg-white px-6 py-6 shadow-sm">
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">{{ content.timerLabel }}</p>
        <p class="mt-2 font-mono text-4xl font-bold tabular-nums tracking-tight text-slate-950">{{ displayTimer }}</p>
      </div>
      <button
        type="button"
        class="text-sm font-semibold text-brand underline-offset-2 hover:underline"
        @click="resetAll"
      >
        {{ t('bitrixSurveyUi.retake') }}
      </button>
    </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { BitrixSurveyContent } from '@/content/services'
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { SITE_CONTACT_EMAIL } from '@/siteContact'

const props = defineProps<{
  content: BitrixSurveyContent
}>()

const { t } = useI18n()

const OTHER_VALUE = '__other__'
const ids = {
  name: 'bitrix-survey-name',
  phone: 'bitrix-survey-phone',
  sphere: 'bitrix-survey-sphere',
  other: 'bitrix-survey-other',
}

type Phase = 'quiz' | 'lead' | 'success'
const phase = ref<Phase>('quiz')
const questionIndex = ref(0)
const answers = ref<Record<string, number>>({})
const hp = ref('')

const leadForm = reactive({
  name: '',
  phone: '',
  sphere: '',
  otherSphere: '',
})

const submitting = ref(false)
const deadlineMs = ref<number | null>(null)
const displayTimer = ref('24:00:00')
let timerId: ReturnType<typeof setInterval> | null = null

const totalSteps = computed(() => props.content.questions.length)

const currentQuestion = computed(() => props.content.questions[questionIndex.value] ?? null)

const scores = computed(() => {
  let cloud = 0
  let box = 0
  for (const q of props.content.questions) {
    const idx = answers.value[q.id]
    if (idx === undefined) continue
    const opt = q.options[idx]
    if (!opt) continue
    cloud += opt.cloud
    box += opt.box
  }
  return { cloud, box }
})

const recommendationText = computed(() => {
  const { cloud, box } = scores.value
  if (cloud > box) {
    return t('bitrixSurveyUi.recommendationCloud')
  }
  if (box > cloud) {
    return t('bitrixSurveyUi.recommendationBox')
  }
  return t('bitrixSurveyUi.recommendationTie')
})

function goBack(): void {
  if (questionIndex.value > 0) {
    questionIndex.value -= 1
  }
}

function selectOption(questionId: string, optionIndex: number): void {
  const at = questionIndex.value
  const next: Record<string, number> = { ...answers.value, [questionId]: optionIndex }
  for (let i = at + 1; i < props.content.questions.length; i++) {
    const q = props.content.questions[i]
    if (q) {
      delete next[q.id]
    }
  }
  answers.value = next
  if (at < props.content.questions.length - 1) {
    questionIndex.value += 1
  } else {
    phase.value = 'lead'
  }
}

function formatAnswersForEmail(): string {
  const lines: string[] = []
  for (const q of props.content.questions) {
    const idx = answers.value[q.id]
    const label = idx !== undefined ? q.options[idx]?.label : '—'
    lines.push(`${q.text} → ${label}`)
  }
  return lines.join('\n')
}

function resolvedSphere(): string {
  if (leadForm.sphere === OTHER_VALUE) {
    return leadForm.otherSphere.trim() || t('bitrixSurveyUi.otherFallback')
  }
  return leadForm.sphere
}

function submitLead(): void {
  if (hp.value.trim().length > 0) {
    return
  }
  if (leadForm.sphere === OTHER_VALUE && !leadForm.otherSphere.trim()) {
    return
  }
  submitting.value = true
  const { cloud, box } = scores.value
  const bodyLines = [
    t('bitrixSurveyUi.mailIntro'),
    '',
    t('bitrixSurveyUi.mailScores', { cloud, box }),
    recommendationText.value,
    '',
    t('bitrixSurveyUi.mailAnswers'),
    formatAnswersForEmail(),
    '',
    `${t('bitrixSurveyUi.mailName')}: ${leadForm.name.trim()}`,
    `${t('bitrixSurveyUi.mailPhone')}: ${leadForm.phone.trim()}`,
    `${t('bitrixSurveyUi.mailSphere')}: ${resolvedSphere()}`,
  ]
  const body = encodeURIComponent(bodyLines.join('\n'))
  const subject = encodeURIComponent(t('bitrixSurveyUi.mailSubject', { name: leadForm.name.trim() }))
  window.location.href = `mailto:${SITE_CONTACT_EMAIL}?subject=${subject}&body=${body}`

  deadlineMs.value = Date.now() + 24 * 60 * 60 * 1000
  startTimerTick()
  phase.value = 'success'
  submitting.value = false
}

function tickTimer(): void {
  if (deadlineMs.value === null) {
    displayTimer.value = '00:00:00'
    return
  }
  const left = deadlineMs.value - Date.now()
  if (left <= 0) {
    displayTimer.value = '00:00:00'
    if (timerId) {
      clearInterval(timerId)
      timerId = null
    }
    return
  }
  const totalSec = Math.floor(left / 1000)
  const h = Math.floor(totalSec / 3600)
  const m = Math.floor((totalSec % 3600) / 60)
  const s = totalSec % 60
  displayTimer.value = [h, m, s].map((n) => String(n).padStart(2, '0')).join(':')
}

function startTimerTick(): void {
  if (timerId) {
    clearInterval(timerId)
  }
  tickTimer()
  timerId = setInterval(tickTimer, 1000)
}

function resetAll(): void {
  if (timerId) {
    clearInterval(timerId)
    timerId = null
  }
  deadlineMs.value = null
  displayTimer.value = '24:00:00'
  phase.value = 'quiz'
  questionIndex.value = 0
  answers.value = {}
  leadForm.name = ''
  leadForm.phone = ''
  leadForm.sphere = ''
  leadForm.otherSphere = ''
}

onBeforeUnmount(() => {
  if (timerId) {
    clearInterval(timerId)
  }
})

</script>
