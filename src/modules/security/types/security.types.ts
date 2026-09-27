import type { ICta, IFeature, ILink, IPageHeader, ISectionHeader, ISeoMeta, IStep } from '@/shared/types'

export interface ISecurityContent {
  seo: ISeoMeta
  header: IPageHeader
  breadcrumbs: ILink[]
  neverAsk: {
    title: string
    description: string
    items: string[]
  }
  tipsHeader: ISectionHeader
  tips: IFeature[]
  scamsHeader: ISectionHeader
  scams: IFeature[]
  reportHeader: ISectionHeader
  reportSteps: IStep[]
  cta: ICta
}
