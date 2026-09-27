import type { IconName } from './icon.types'

export interface ILink {
  label: string
  href: string
}

export interface INavGroup {
  title: string
  links: ILink[]
}

export interface IFaqItem {
  question: string
  answer: string
}

export interface IFaqGroup {
  title: string
  items: IFaqItem[]
}

export interface IStat {
  value: string
  label: string
}

export interface IFeature {
  icon: IconName
  title: string
  description: string
}

export interface IStep {
  title: string
  description: string
}

export interface ICta {
  title: string
  description: string
  primary: ILink
  secondary?: ILink
}

export interface IPageHeader {
  title: string
  lead: string
}

export interface ISectionHeader {
  title: string
  description?: string
}

export interface ISeoMeta {
  title: string
  description: string
  path: string
}
