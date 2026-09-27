import type { ICta, IFaqGroup, ILink, IPageHeader, ISeoMeta } from '@/shared/types'

export interface IFaqCategory extends IFaqGroup {
  id: string
  description: string
}

export interface IFaqContent {
  seo: ISeoMeta
  header: IPageHeader
  breadcrumbs: ILink[]
  cta: ICta
}
