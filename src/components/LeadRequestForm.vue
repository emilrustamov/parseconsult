<template>
  <form class="space-y-6" @submit.prevent="submitContactForm">
    <div v-if="formSuccess" class="rounded-lg border border-brand/30 bg-brand/10 px-4 py-3 text-sm font-medium text-slate-800">
      Спасибо! Заявка отправлена. Мы свяжемся с вами удобным способом.
    </div>

    <div>
      <label :for="ids.fullName" class="mb-2 block text-sm font-semibold text-slate-800">
        ФИО <span class="text-red-600">*</span>
      </label>
      <input
        :id="ids.fullName"
        v-model="form.fullName"
        type="text"
        name="fullName"
        required
        autocomplete="name"
        class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-brand/0 transition focus:border-brand-dark focus:ring-4 focus:ring-brand/20"
        placeholder="Иванов Иван Иванович"
      >
    </div>

    <div class="hidden" aria-hidden="true">
      <label :for="ids.website">Website</label>
      <input :id="ids.website" v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off">
    </div>

    <div>
      <span class="mb-3 block text-sm font-semibold text-slate-800">Как с вами связаться? <span class="text-red-600">*</span></span>
      <div class="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <label
          v-for="opt in contactMethodOptions"
          :key="opt.value"
          class="flex flex-1 cursor-pointer items-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition"
          :class="form.contactMethod === opt.value ? 'border-brand-dark bg-brand/15' : 'border-slate-200 bg-white hover:border-slate-300'"
        >
          <input v-model="form.contactMethod" type="radio" name="contactMethod" :value="opt.value" class="size-4 accent-brand-dark">
          {{ opt.label }}
        </label>
      </div>
    </div>

    <div v-if="showPhoneField" class="animate-fade-up">
      <label :for="ids.phone" class="mb-2 block text-sm font-semibold text-slate-800">
        Телефон <span class="text-red-600">*</span>
      </label>
      <input
        :id="ids.phone"
        v-model="form.phone"
        type="tel"
        name="phone"
        :required="showPhoneField"
        autocomplete="tel"
        class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-4 focus:ring-brand/20"
        placeholder="+971 XX XXX XXXX"
      >
    </div>

    <div v-if="showEmailField" class="animate-fade-up">
      <label :for="ids.email" class="mb-2 block text-sm font-semibold text-slate-800">
        Email <span class="text-red-600">*</span>
      </label>
      <input
        :id="ids.email"
        v-model="form.email"
        type="email"
        name="email"
        :required="showEmailField"
        autocomplete="email"
        class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-4 focus:ring-brand/20"
        placeholder="you@company.ae"
      >
    </div>

    <fieldset>
      <legend class="mb-3 text-sm font-semibold text-slate-800">Интересующие услуги</legend>
      <div class="grid gap-3 sm:grid-cols-2">
        <label
          v-for="svc in formServiceOptions"
          :key="svc.id"
          class="flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 text-sm text-slate-800 transition"
          :class="
            form.services.includes(svc.id)
              ? 'border-brand-dark bg-brand/10'
              : 'border-slate-200 bg-slate-50/50 hover:border-brand/35'
          "
        >
          <input v-model="form.services" type="checkbox" :value="svc.id" class="mt-1 size-4 shrink-0 rounded border-slate-300 accent-brand-dark">
          {{ svc.label }}
        </label>
      </div>
    </fieldset>

    <div>
      <label :for="ids.message" class="mb-2 block text-sm font-semibold text-slate-800">
        Сообщение <span class="text-red-600">*</span>
      </label>
      <textarea
        :id="ids.message"
        v-model="form.message"
        name="message"
        rows="4"
        required
        class="w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-4 focus:ring-brand/20"
        placeholder="Кратко опишите задачу, сроки и систему учёта, если известна."
      ></textarea>
    </div>

    <button
      type="submit"
      class="w-full rounded-lg bg-brand py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
      :disabled="formSubmitting"
    >
      {{ formSubmitting ? 'Отправка…' : submitButtonLabel }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'

type ContactMethod = 'phone' | 'email' | 'both'

const props = withDefaults(
  defineProps<{
    initialServices?: string[]
    initialMessage?: string
    submitButtonLabel?: string
    idPrefix?: string
  }>(),
  {
    initialServices: () => [],
    initialMessage: '',
    submitButtonLabel: 'Отправить заявку',
    idPrefix: 'contact',
  }
)
const emit = defineEmits<{
  (event: 'dirty-change', value: boolean): void
}>()

const contactMethodOptions = [
  { value: 'phone', label: 'Телефон' },
  { value: 'email', label: 'Email' },
  { value: 'both', label: 'Оба варианта' },
] as const

const formServiceOptions = [
  { id: 'migration', label: 'Миграция учёта' },
  { id: 'training', label: 'Обучение учёту' },
  { id: 'automation', label: 'Автоматизация учёта' },
  { id: 'firstbit', label: 'FirstBit / 1С (ОАЭ)' },
  { id: 'quickbooks', label: 'QuickBooks' },
  { id: 'zoho', label: 'Zoho Books' },
  { id: 'bitrix24', label: 'Bitrix24' },
  { id: 'consulting', label: 'Консультация / другое' },
] as const

const form = reactive({
  fullName: '',
  contactMethod: 'email' as ContactMethod,
  phone: '',
  email: '',
  website: '',
  services: [...props.initialServices] as string[],
  message: props.initialMessage,
})

const ids = {
  fullName: `${props.idPrefix}-fullname`,
  phone: `${props.idPrefix}-phone`,
  email: `${props.idPrefix}-email`,
  website: `${props.idPrefix}-website`,
  message: `${props.idPrefix}-message`,
}

const showPhoneField = computed(() => form.contactMethod === 'phone' || form.contactMethod === 'both')
const showEmailField = computed(() => form.contactMethod === 'email' || form.contactMethod === 'both')
const isDirty = computed(
  () =>
    form.fullName.trim().length > 0 ||
    form.phone.trim().length > 0 ||
    form.email.trim().length > 0 ||
    form.message.trim().length > 0 ||
    form.services.length > 0
)

const formSubmitting = ref(false)
const formSuccess = ref(false)

watch(
  isDirty,
  (value) => {
    emit('dirty-change', value)
  },
  { immediate: true }
)

function submitContactForm(): void {
  if (form.website.trim().length > 0) {
    return
  }

  formSubmitting.value = true
  formSuccess.value = false

  const lines = [`ФИО: ${form.fullName}`, `Связь: ${form.contactMethod}`]
  if (showPhoneField.value) lines.push(`Телефон: ${form.phone}`)
  if (showEmailField.value) lines.push(`Email: ${form.email}`)
  const labels = formServiceOptions.filter((s) => form.services.includes(s.id)).map((s) => s.label)
  lines.push(`Услуги: ${labels.length ? labels.join(', ') : '—'}`)
  lines.push('')
  lines.push(form.message)

  const body = encodeURIComponent(lines.join('\n'))
  const subject = encodeURIComponent(`Заявка с сайта — ${form.fullName}`)
  window.location.href = `mailto:info@parseconsult.ae?subject=${subject}&body=${body}`

  formSuccess.value = true
  formSubmitting.value = false
}
</script>

<style scoped>
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fade-up 0.8s ease forwards;
}
</style>
