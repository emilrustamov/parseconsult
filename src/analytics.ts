declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const GOOGLE_ADS_WHATSAPP_CONVERSION = 'AW-18461645863/q9ISCNag-qUdEKe4meNE'

export const trackWhatsAppClick = (): void => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', 'conversion', {
    send_to: GOOGLE_ADS_WHATSAPP_CONVERSION,
  })
}
