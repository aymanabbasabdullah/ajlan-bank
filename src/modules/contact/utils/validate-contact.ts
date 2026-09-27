import type { ContactFormErrors, IContactFormContent, IContactFormValues } from '../types/contact.types'

const MIN_MESSAGE_LENGTH = 20
const YEMEN_PHONE = /^(?:\+967|00967|0)?(?:7\d{8}|[1-7]\d{6,7})$/
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateContact(values: IContactFormValues, messages: IContactFormContent['errors']): ContactFormErrors {
  const errors: ContactFormErrors = {}
  const phone = values.phone.replace(/[\s-]/g, '')

  if (!values.name.trim()) errors.name = messages.nameRequired

  if (!phone) errors.phone = messages.phoneRequired
  else if (!YEMEN_PHONE.test(phone)) errors.phone = messages.phoneInvalid

  if (values.email.trim() && !EMAIL.test(values.email.trim())) errors.email = messages.emailInvalid

  if (!values.topic) errors.topic = messages.topicRequired

  if (!values.message.trim()) errors.message = messages.messageRequired
  else if (values.message.trim().length < MIN_MESSAGE_LENGTH) errors.message = messages.messageTooShort

  return errors
}
