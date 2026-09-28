import type { ICta, IFaqItem, IconName } from '@/shared/types'

export type ProductSection = 'individuals' | 'business' | 'financing'

export interface IProductFact {
  label: string
  value: string
}

export interface IProductFeature {
  title: string
  description: string
}

export interface IProduct {
  slug: string
  section: ProductSection
  categoryId: string
  icon: IconName
  name: string
  summary: string
  description: string
  facts: IProductFact[]
  features: IProductFeature[]
  eligibility: string[]
  documents: string[]
  faqs: IFaqItem[]
  featured?: boolean
}

export interface IProductCategory {
  id: string
  title: string
  description: string
}

export interface ISectionCatalog {
  section: ProductSection
  label: string
  path: string
  categories: IProductCategory[]
  products: IProduct[]
}

export interface IProductDetailContent {
  factsLabel: string
  featuresTitle: string
  eligibilityTitle: string
  documentsTitle: string
  faqTitle: string
  relatedTitle: string
  notFoundTitle: string
  cardModelLabel: string
  cta: ICta
}
