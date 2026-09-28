export type VisaCardTone = 'classic' | 'gold' | 'travel' | 'business'

export type VisaCardFaceState = 'active' | 'passed' | 'next'

export interface IVisaCardVisual {
  tone: VisaCardTone
  network: string
  name: string
  holderLabel: string
  maskedNumber: string
  expiryLabel: string
  expiry: string
}
