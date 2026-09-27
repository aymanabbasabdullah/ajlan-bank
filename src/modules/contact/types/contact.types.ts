import type { IconName, ILink, IPageHeader, ISectionHeader, ISeoMeta } from '@/shared/types'

export type ContactTopic = 'accounts' | 'cards' | 'financing' | 'business' | 'complaint' | 'other'

export interface IContactFormValues {
  name: string
  phone: string
  email: string
  topic: ContactTopic | ''
  message: string
}

export type ContactField = keyof IContactFormValues

export type ContactFormErrors = Partial<Record<ContactField, string>>

export interface IContactChannel {
  icon: IconName
  title: string
  value: string
  href?: string
  description: string
}

export interface IContactFormContent {
  title: string
  description: string
  labels: Record<ContactField, string>
  placeholders: Partial<Record<ContactField, string>>
  optionalLabel: string
  topicPlaceholder: string
  topics: { id: ContactTopic; label: string }[]
  errors: {
    nameRequired: string
    phoneRequired: string
    phoneInvalid: string
    emailInvalid: string
    topicRequired: string
    messageRequired: string
    messageTooShort: string
    submitFailed: string
  }
  submit: string
  submitting: string
  privacyNote: string
  success: {
    title: string
    text: (reference: string) => string
    again: string
  }
}

export interface IContactContent {
  seo: ISeoMeta
  header: IPageHeader
  breadcrumbs: ILink[]
  channelsHeader: ISectionHeader
  channels: IContactChannel[]
  form: IContactFormContent
  office: {
    title: string
    addressLabel: string
    hoursLabel: string
    swiftLabel: string
  }
  fraud: {
    title: string
    text: string
    link: ILink
  }
}
