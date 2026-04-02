<template>
  <form class="space-y-6" @submit.prevent="submitContactForm">
    <div v-if="formSuccess" class="rounded-lg border border-brand/30 bg-brand/10 px-4 py-3 text-sm font-medium text-slate-800">
      {{ t('leadForm.success') }}
    </div>

    <div>
      <label :for="ids.fullName" class="mb-2 block text-sm font-semibold text-slate-800">
        {{ t('leadForm.fullName') }} <span class="text-red-600">*</span>
      </label>
      <input
        :id="ids.fullName"
        v-model="form.fullName"
        type="text"
        name="fullName"
        required
        autocomplete="name"
        class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-brand/0 transition focus:border-brand-dark focus:ring-4 focus:ring-brand/20"
        :placeholder="t('leadForm.fullNamePlaceholder')"
      >
    </div>

    <div class="hidden" aria-hidden="true">
      <label :for="ids.website">Website</label>
      <input :id="ids.website" v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off">
    </div>

    <div>
      <span class="mb-3 block text-sm font-semibold text-slate-800">{{ t('leadForm.contactMethod') }} <span class="text-red-600">*</span></span>
      <div class="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <label
          v-for="opt in contactMethodOptions"
          :key="opt.value"
          class="flex flex-1 cursor-pointer items-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition"
          :class="isContactOptionActive(opt.value) ? 'border-brand-dark bg-brand/15' : 'border-slate-200 bg-white hover:border-slate-300'"
        >
          <input
            type="checkbox"
            name="contactMethod"
            :checked="isContactOptionActive(opt.value)"
            class="size-4 accent-brand-dark"
            @change="toggleContactOption(opt.value)"
          >
          {{ opt.label }}
        </label>
      </div>
      <p v-if="showContactMethodError" class="mt-2 text-sm text-red-600">{{ t('leadForm.contactMethodError') }}</p>
    </div>

    <div v-if="showPhoneField" class="animate-fade-up">
      <label :for="ids.phone" class="mb-2 block text-sm font-semibold text-slate-800">
        {{ t('leadForm.phone') }} <span class="text-red-600">*</span>
      </label>
      <input
        :id="ids.phone"
        v-model="form.phone"
        type="tel"
        name="phone"
        :required="showPhoneField"
        autocomplete="tel"
        class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-4 focus:ring-brand/20"
        :placeholder="t('leadForm.phonePlaceholder')"
      >
    </div>

    <div v-if="showEmailField" class="animate-fade-up">
      <label :for="ids.email" class="mb-2 block text-sm font-semibold text-slate-800">
        {{ t('leadForm.email') }} <span class="text-red-600">*</span>
      </label>
      <input
        :id="ids.email"
        v-model="form.email"
        type="email"
        name="email"
        :required="showEmailField"
        autocomplete="email"
        class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-4 focus:ring-brand/20"
        :placeholder="t('leadForm.emailPlaceholder')"
      >
    </div>

    <fieldset v-if="showSocialField" class="animate-fade-up">
      <div class="grid grid-cols-2 gap-2 sm:gap-3">
        <div>
          <label :for="ids.whatsapp" class="mb-2 flex h-6 items-center text-brand-dark" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" class="size-5 fill-current">
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08.01C5.57.01.27 5.3.27 11.82c0 2.08.55 4.11 1.59 5.9L0 24l6.47-1.69a11.77 11.77 0 0 0 5.61 1.43h.01c6.51 0 11.81-5.3 11.81-11.82 0-3.16-1.23-6.13-3.38-8.44Zm-8.44 18.24h-.01a9.77 9.77 0 0 1-4.98-1.36l-.36-.21-3.84 1 1.03-3.74-.24-.38a9.77 9.77 0 0 1-1.51-5.21c0-5.41 4.4-9.82 9.82-9.82 2.62 0 5.08 1.02 6.93 2.89a9.72 9.72 0 0 1 2.88 6.94c0 5.41-4.4 9.82-9.72 9.89Zm5.39-7.35c-.29-.15-1.73-.85-2-.94-.27-.1-.47-.15-.67.14-.19.29-.76.94-.93 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.08-.14-.67-1.61-.92-2.21-.24-.57-.49-.49-.67-.5h-.57c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44 0 1.44 1.04 2.83 1.19 3.02.14.19 2.03 3.1 4.91 4.34.69.29 1.22.47 1.64.6.69.22 1.31.19 1.8.12.55-.08 1.73-.71 1.97-1.4.24-.69.24-1.28.17-1.4-.07-.11-.27-.18-.56-.33Z" />
            </svg>
          </label>
          <input
            :id="ids.whatsapp"
            v-model="form.whatsapp"
            type="text"
            name="whatsapp"
            autocomplete="off"
            class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-4 focus:ring-brand/20"
            :placeholder="t('leadForm.whatsappPlaceholder')"
          >
        </div>
        <div>
          <label :for="ids.telegram" class="mb-2 flex h-6 items-center text-brand-dark" aria-label="Telegram">
            <svg viewBox="0 0 24 24" class="size-5 fill-current">
              <path d="M9.78 15.5 9.4 20.9c.54 0 .78-.23 1.06-.51l2.54-2.42 5.26 3.85c.97.53 1.66.25 1.92-.89l3.48-16.3h.01c.3-1.37-.49-1.91-1.43-1.56L1.8 10.96c-1.39.54-1.37 1.31-.24 1.66l5.22 1.63 12.13-7.65c.57-.35 1.09-.16.66.19L9.78 15.5Z" />
            </svg>
          </label>
          <input
            :id="ids.telegram"
            v-model="form.telegram"
            type="text"
            name="telegram"
            autocomplete="off"
            class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-4 focus:ring-brand/20"
            :placeholder="t('leadForm.telegramPlaceholder')"
          >
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend class="mb-3 text-sm font-semibold text-slate-800">{{ t('leadForm.servicesLegend') }}</legend>
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
        {{ t('leadForm.message') }} <span class="text-red-600">*</span>
      </label>
      <textarea
        :id="ids.message"
        v-model="form.message"
        name="message"
        rows="4"
        required
        class="w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-dark focus:ring-4 focus:ring-brand/20"
        :placeholder="t('leadForm.messagePlaceholder')"
      ></textarea>
    </div>

    <button
      type="submit"
      class="ui-shine w-full rounded-lg bg-brand py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
      :disabled="formSubmitting"
    >
      <span class="relative z-[1]">{{ formSubmitting ? t('leadForm.submitting') : resolvedSubmitLabel }}</span>
    </button>
  </form>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { SITE_CONTACT_EMAIL } from '@/siteContact'

type ContactMethod = 'phone' | 'email' | 'social'

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
    submitButtonLabel: '',
    idPrefix: 'contact',
  }
)
const emit = defineEmits<{
  (event: 'dirty-change', value: boolean): void
}>()

const { t } = useI18n()

const contactMethodOptions = computed(() => [
  { value: 'phone' as const, label: t('leadForm.phone') },
  { value: 'email' as const, label: t('leadForm.email') },
  { value: 'social' as const, label: t('leadForm.social') },
])

const formServiceOptions = computed(() => [
  { id: 'migration', label: t('leadForm.svcMigration') },
  { id: 'training', label: t('leadForm.svcTraining') },
  { id: 'automation', label: t('leadForm.svcAutomation') },
  { id: 'firstbit', label: t('leadForm.svcFirstbit') },
  { id: 'quickbooks', label: t('leadForm.svcQuickbooks') },
  { id: 'zoho', label: t('leadForm.svcZoho') },
  { id: 'bitrix24', label: t('leadForm.svcBitrix24') },
  { id: 'consulting', label: t('leadForm.svcConsulting') },
])

const resolvedSubmitLabel = computed(() => props.submitButtonLabel || t('leadForm.submit'))

const form = reactive({
  fullName: '',
  contactMethods: ['email'] as ContactMethod[],
  phone: '',
  email: '',
  whatsapp: '',
  telegram: '',
  website: '',
  services: [...props.initialServices] as string[],
  message: props.initialMessage,
})

const ids = {
  fullName: `${props.idPrefix}-fullname`,
  phone: `${props.idPrefix}-phone`,
  email: `${props.idPrefix}-email`,
  whatsapp: `${props.idPrefix}-whatsapp`,
  telegram: `${props.idPrefix}-telegram`,
  website: `${props.idPrefix}-website`,
  message: `${props.idPrefix}-message`,
}

const showContactMethodError = ref(false)
const selectedContactMethods = computed(() =>
  contactMethodOptions.value.map((option) => option.value).filter((method) => form.contactMethods.includes(method)),
)
const showPhoneField = computed(() => selectedContactMethods.value.includes('phone'))
const showEmailField = computed(() => selectedContactMethods.value.includes('email'))
const showSocialField = computed(() => selectedContactMethods.value.includes('social'))
const isDirty = computed(
  () =>
    form.fullName.trim().length > 0 ||
    form.phone.trim().length > 0 ||
    form.email.trim().length > 0 ||
    form.whatsapp.trim().length > 0 ||
    form.telegram.trim().length > 0 ||
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
  if (selectedContactMethods.value.length === 0) {
    showContactMethodError.value = true
    return
  }
  showContactMethodError.value = false
  const socialValue = [form.whatsapp.trim(), form.telegram.trim()].filter(Boolean)
  if (showSocialField.value && socialValue.length === 0) {
    return
  }

  formSubmitting.value = true
  formSuccess.value = false

  const methodLabels = contactMethodOptions.value
    .filter((option) => selectedContactMethods.value.includes(option.value))
    .map((option) => option.label)
  const lines = [
    `${t('leadForm.mailBodyName')}: ${form.fullName}`,
    `${t('leadForm.mailBodyContact')}: ${methodLabels.join(', ')}`,
  ]
  if (showPhoneField.value) lines.push(`${t('leadForm.mailBodyPhone')}: ${form.phone}`)
  if (showEmailField.value) lines.push(`${t('leadForm.mailBodyEmail')}: ${form.email}`)
  if (showSocialField.value) {
    lines.push(`${t('leadForm.mailBodyWhatsapp')}: ${form.whatsapp.trim() || '—'}`)
    lines.push(`${t('leadForm.mailBodyTelegram')}: ${form.telegram.trim() || '—'}`)
  }
  const labels = formServiceOptions.value.filter((s) => form.services.includes(s.id)).map((s) => s.label)
  lines.push(`${t('leadForm.mailBodyServices')}: ${labels.length ? labels.join(', ') : '—'}`)
  lines.push('')
  lines.push(form.message)

  const body = encodeURIComponent(lines.join('\n'))
  const subject = encodeURIComponent(t('leadForm.mailSubject', { name: form.fullName }))
  window.location.href = `mailto:${SITE_CONTACT_EMAIL}?subject=${subject}&body=${body}`

  formSuccess.value = true
  formSubmitting.value = false
}

function isContactOptionActive(option: ContactMethod): boolean {
  return form.contactMethods.includes(option)
}

function toggleContactOption(option: ContactMethod): void {
  formSuccess.value = false
  showContactMethodError.value = false
  if (form.contactMethods.includes(option)) {
    form.contactMethods = form.contactMethods.filter((method) => method !== option)
    return
  }
  form.contactMethods = [...form.contactMethods, option]
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
