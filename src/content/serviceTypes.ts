export type BitrixLeadBlock = {
  headline: string
  intro: string[]
  sections: {
    title: string
    lead?: string
    items: string[]
    closing?: string
  }[]
}

export type BitrixCertificateItem = {
  id: string
  src: string
  alt: string
  caption?: string
}

export type BitrixCertificatesBlock = {
  headline: string
  headlineAccent: string
  subline: string[]
  items: BitrixCertificateItem[]
}

export type BitrixSurveyOption = {
  label: string
  cloud: number
  box: number
}

export type BitrixSurveyQuestion = {
  id: string
  text: string
  options: BitrixSurveyOption[]
}

export type BitrixSurveyContent = {
  headline: string
  subheadline: string
  timeNote: string
  questions: BitrixSurveyQuestion[]
  finalTitle: string
  finalText: string
  finalCta: string
  discountNoteUnderSubmit: string
  nameLabel: string
  phoneLabel: string
  sphereLabel: string
  otherSpherePlaceholder: string
  businessSpheres: string[]
  otherSphereLabel: string
  successTitle: string
  successLines: string[]
  successDiscountLine: string
  successUrgencyLine: string
  timerLabel: string
}

export type ServiceContent = {
  title: string
  description?: string
  bitrixDemoUrl?: string
  bitrixLeadBlock?: BitrixLeadBlock
  bitrixCertificates?: BitrixCertificatesBlock
  bitrixSurvey?: BitrixSurveyContent
  groups: {
    title: string
    items: string[]
  }[]
  advantages?: {
    title: string
    items: {
      number: string
      title: string
      description: string
    }[]
  }
  featured?: {
    title: string
    services: string[]
    systemsTitle: string
    systems: string[]
  }
  tiles?: {
    title: string
    description?: string
    items: string[]
  }[]
}
