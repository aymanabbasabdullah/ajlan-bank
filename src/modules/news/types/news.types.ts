import type { MediaId } from '@/shared/data/media'
import type { ILink, IPageHeader, ISeoMeta } from '@/shared/types'

export interface INewsArticle {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  body: string[]
  mediaId: MediaId
}

export interface INewsContent {
  seo: ISeoMeta
  header: IPageHeader
  breadcrumbs: ILink[]
  publishedLabel: string
  backLabel: string
  moreNewsTitle: string
}
