import type { ICta, IFaqItem, ILink, IPageHeader, ISectionHeader, ISeoMeta, IStep } from '@/shared/types'

export interface ICalculatorProgram {
  id: string
  label: string
  annualRate: number
  minAmount: number
  maxAmount: number
  step: number
  maxMonths: number
}

export interface ICalculatorContent {
  header: ISectionHeader
  programLabel: string
  amountLabel: string
  durationLabel: string
  monthsUnit: string
  monthlyLabel: string
  totalLabel: string
  costLabel: string
  rateLabel: string
  disclaimer: string
  cta: ILink
  durations: number[]
  programs: ICalculatorProgram[]
}

export interface IFinancingContent {
  seo: ISeoMeta
  header: IPageHeader
  breadcrumbs: ILink[]
  quickLinks: ILink[]
  requirements: {
    eligibilityTitle: string
    eligibility: string[]
    documentsTitle: string
    documents: string[]
    note: string
  }
  stepsHeader: ISectionHeader
  steps: IStep[]
  calculator: ICalculatorContent
  faqHeader: ISectionHeader
  faqs: IFaqItem[]
  cta: ICta
}
