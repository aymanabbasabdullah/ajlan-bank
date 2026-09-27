import type { ICta, IFeature, ILink, ISectionHeader, ISeoMeta, IconName } from '@/shared/types'

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
  card: {
    bankName: string
    type: string
    maskedNumber: string
    expiry: string
  }
  activity: {
    title: string
    items: IVisualTransaction[]
  }
}

export interface IAudiencePath {
  icon: IconName
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
  digital: IDigitalBanking
  valuesHeader: ISectionHeader
  values: IFeature[]
  newsHeader: ISectionHeader
  newsLink: ILink
  cta: ICta
}
