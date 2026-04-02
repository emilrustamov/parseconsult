import { createI18n } from 'vue-i18n'
import { commonEn } from './locales/en/common'
import { homeEn } from './locales/en/home'
import { commonRu } from './locales/ru/common'
import { homeRu } from './locales/ru/home'

export const LOCALE_STORAGE_KEY = 'parseconsult_locale'

export type AppLocale = 'ru' | 'en'

function readStoredLocale(): AppLocale {
  if (typeof localStorage === 'undefined') return 'ru'
  return localStorage.getItem(LOCALE_STORAGE_KEY) === 'en' ? 'en' : 'ru'
}

export const i18n = createI18n({
  legacy: false,
  locale: readStoredLocale(),
  fallbackLocale: 'ru',
  messages: {
    ru: { ...commonRu, ...homeRu },
    en: { ...commonEn, ...homeEn },
  },
  globalInjection: true,
})

export function persistLocale(locale: AppLocale): void {
  if (typeof localStorage === 'undefined') return
  localStorage.setItem(LOCALE_STORAGE_KEY, locale)
}

export function applyDocumentLang(locale: AppLocale): void {
  if (typeof document === 'undefined') return
  document.documentElement.lang = locale === 'en' ? 'en' : 'ru'
}
