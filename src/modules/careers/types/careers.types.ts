import type { ICta, IFeature, ILink, IPageHeader, ISectionHeader, ISeoMeta, IStep } from '@/shared/types'

export interface IJobOpening {
  id: string
  title: string
  department: string
  location: string
  type: string
  summary: string
  requirements: string[]
}

export interface ICareersContent {
  seo: ISeoMeta
  header: IPageHeader
  breadcrumbs: ILink[]
  careersEmail: string
  benefitsHeader: ISectionHeader
  benefits: IFeature[]
  openingsHeader: ISectionHeader
  labels: {
    department: string
    location: string
    type: string
    reference: string
    requirements: string
    apply: string
    applySubject: (job: IJobOpening) => string
  }
  applyHeader: ISectionHeader
  applySteps: IStep[]
  cta: ICta
}
