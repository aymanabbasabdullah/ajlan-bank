import type { MediaId } from '@/shared/data/media'
import type { ICta, IFeature, ILink, ISectionHeader, ISeoMeta, IVisaCardVisual, IconName } from '@/shared/types'

export type { VisaCardTone } from '@/shared/types'

export interface IVisaCard extends IVisaCardVisual {
  tagline: string
  description: string
  facts: { label: string; value: string }[]
  highlights: string[]
  cta: ILink
}

export interface IVisaCardsSection {
  eyebrow: string
  title: string
  description: string
  progressLabel: string
  sampleNote: string
  cards: IVisaCard[]
}

export interface IVisualTransaction {
  icon: IconName
  label: string
  meta: string
  amount: string
  direction: 'in' | 'out'
}

export interface IHomeHero {
  title: string
  lead: string
  primary: ILink
  secondary: ILink
  trustNote: string
  cardLink: ILink
}

export interface IAudiencePath {
  mediaId: MediaId
  title: string
  description: string
  highlights: ILink[]
  link: ILink
}

export interface IDigitalBanking {
  title: string
  description: string
  features: string[]
  primary: ILink
  storeNote: string
  phone: {
    greeting: string
    balanceLabel: string
    balance: string
    accountLabel: string
    actions: { icon: IconName; label: string }[]
    recentTitle: string
    recent: IVisualTransaction[]
  }
}

export interface IHomeContent {
  seo: ISeoMeta
  hero: IHomeHero
  trustHeader: ISectionHeader
  pathsHeader: ISectionHeader
  paths: IAudiencePath[]
  featuredHeader: ISectionHeader
  visa: IVisaCardsSection
  digital: IDigitalBanking
  valuesHeader: ISectionHeader
  values: IFeature[]
  newsHeader: ISectionHeader
  newsLink: ILink
  cta: ICta
}
