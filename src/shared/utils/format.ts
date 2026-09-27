import { FORMAT_LOCALE } from '@/shared/i18n/locale'

export type CurrencyCode = 'YER' | 'USD'

const numberFormatter = new Intl.NumberFormat(FORMAT_LOCALE, { maximumFractionDigits: 0 })

const dateFormatter = new Intl.DateTimeFormat(FORMAT_LOCALE, { dateStyle: 'long' })

export function formatNumber(value: number) {
  return numberFormatter.format(value)
}

export function formatCurrency(value: number, currency: CurrencyCode = 'YER') {
  return new Intl.NumberFormat(FORMAT_LOCALE, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatDate(isoDate: string) {
  return dateFormatter.format(new Date(isoDate))
}

export function isExternalHref(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href)
}
