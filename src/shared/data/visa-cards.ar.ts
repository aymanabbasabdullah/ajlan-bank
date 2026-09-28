import type { IVisaCardVisual } from '@/shared/types'

export const VISA_CARD_VISUALS = {
  'debit-card': {
    tone: 'classic',
    network: 'Visa',
    name: 'فيزا كلاسيك',
    holderLabel: 'حامل البطاقة',
    maskedNumber: '•••• •••• •••• 4417',
    expiryLabel: 'تنتهي',
    expiry: '09/30',
  },
  'visa-gold': {
    tone: 'gold',
    network: 'Visa',
    name: 'فيزا الذهبية',
    holderLabel: 'حامل البطاقة',
    maskedNumber: '•••• •••• •••• 8802',
    expiryLabel: 'تنتهي',
    expiry: '11/30',
  },
  'prepaid-card': {
    tone: 'travel',
    network: 'Visa',
    name: 'فيزا مسبقة الدفع',
    holderLabel: 'حامل البطاقة',
    maskedNumber: '•••• •••• •••• 1964',
    expiryLabel: 'تنتهي',
    expiry: '03/31',
  },
  'visa-business': {
    tone: 'business',
    network: 'Visa',
    name: 'فيزا الأعمال',
    holderLabel: 'الجهة',
    maskedNumber: '•••• •••• •••• 2271',
    expiryLabel: 'تنتهي',
    expiry: '07/30',
  },
} as const satisfies Record<string, IVisaCardVisual>

export type VisaProductSlug = keyof typeof VISA_CARD_VISUALS

export function getVisaCardVisual(slug: string): IVisaCardVisual | undefined {
  if (slug in VISA_CARD_VISUALS) {
    return VISA_CARD_VISUALS[slug as VisaProductSlug]
  }
  return undefined
}
