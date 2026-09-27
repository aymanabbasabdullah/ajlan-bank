import type { ICta, IFeature, ILink, IPageHeader, ISectionHeader, ISeoMeta } from '@/shared/types'

export interface IMilestone {
  year: string
  title: string
  description: string
}

export interface ILeader {
  name: string
  initials: string
  role: string
  bio: string
}

export interface IStatement {
  title: string
  text: string
}

export interface IAboutContent {
  seo: ISeoMeta
  header: IPageHeader
  breadcrumbs: ILink[]
  story: {
    title: string
    paragraphs: string[]
    facts: { label: string; value: string }[]
  }
  vision: IStatement
  mission: IStatement
  valuesHeader: ISectionHeader
  values: IFeature[]
  timelineHeader: ISectionHeader
  timeline: IMilestone[]
  figuresHeader: ISectionHeader
  leadershipHeader: ISectionHeader
  leaders: ILeader[]
  governanceHeader: ISectionHeader
  governance: IFeature[]
  cta: ICta
}
