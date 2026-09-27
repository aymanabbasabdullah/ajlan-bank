import type { ILink, IPageHeader, ISeoMeta } from '@/shared/types'

export interface ILegalSection {
  id: string
  title: string
  paragraphs: string[]
  list?: string[]
}

export interface ILegalDocument {
  seo: ISeoMeta
  header: IPageHeader
  breadcrumbs: ILink[]
  updatedAt: string
  sections: ILegalSection[]
}

export interface ILegalUiStrings {
  tocLabel: string
  updatedLabel: string
  questionsTitle: string
  questionsText: string
}
