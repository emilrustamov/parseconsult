export type {
  BitrixCertificatesBlock,
  BitrixCertificateItem,
  BitrixLeadBlock,
  BitrixSurveyContent,
  BitrixSurveyOption,
  BitrixSurveyQuestion,
  ServiceContent,
} from './serviceTypes'

export { serviceContentRu } from './servicesRuData'
export { serviceContentEn } from './servicesEnData'

import { serviceContentEn } from './servicesEnData'
import { serviceContentRu } from './servicesRuData'

export const serviceContent = serviceContentRu

export const serviceContentByLocale = {
  ru: serviceContentRu,
  en: serviceContentEn,
} as const

export type SiteContentLocale = keyof typeof serviceContentByLocale

export function getServiceContent(locale: string) {
  return locale === 'en' ? serviceContentEn : serviceContentRu
}
