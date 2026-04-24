import { createI18n } from 'vue-i18n'
import { commonEn } from './locales/en/common'
import { homeEn } from './locales/en/home'
import { commonRu } from './locales/ru/common'
import { homeRu } from './locales/ru/home'

export const LOCALE_STORAGE_KEY = 'parseconsult_locale'

export type AppLocale = 'ru' | 'en'

export function readStoredLocale(): AppLocale {
  if (typeof window !== 'undefined') {
    const m = window.location.pathname.match(/^\/(en|ru)(?:\/|$)/)
    if (m && (m[1] === 'en' || m[1] === 'ru')) {
      return m[1]
    }
  }
  if (typeof localStorage !== 'undefined') {
    const s = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (s === 'en' || s === 'ru') {
      return s
    }
  }
  return 'en'
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
