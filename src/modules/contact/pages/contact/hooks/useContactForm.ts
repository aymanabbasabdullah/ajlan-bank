import { useState, type ChangeEvent, type FormEvent } from 'react'
import { submitContactRequest } from '../../../services/contact.service'
import type {
  ContactField,
  ContactFormErrors,
  IContactFormContent,
  IContactFormValues,
} from '../../../types/contact.types'
import { validateContact } from '../../../utils/validate-contact'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const FIELD_ORDER: ContactField[] = ['name', 'phone', 'email', 'topic', 'message']

const EMPTY_VALUES: IContactFormValues = { name: '', phone: '', email: '', topic: '', message: '' }

export function useContactForm(messages: IContactFormContent['errors']) {
  const [values, setValues] = useState<IContactFormValues>(EMPTY_VALUES)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [reference, setReference] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const field = event.target.name as ContactField
    const next = { ...values, [field]: event.target.value }
    setValues(next)
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: validateContact(next, messages)[field] }))
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const nextErrors = validateContact(values, messages)
    setErrors(nextErrors)

    const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field])
    if (firstInvalid) {
      const element = form.elements.namedItem(firstInvalid)
      if (element instanceof HTMLElement) element.focus()
      return
    }

    setStatus('submitting')
    try {
      const result = await submitContactRequest(values)
      setReference(result.reference)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const reset = () => {
    setValues(EMPTY_VALUES)
    setErrors({})
    setReference('')
    setStatus('idle')
  }

  return { values, errors, status, reference, handleChange, handleSubmit, reset }
}
