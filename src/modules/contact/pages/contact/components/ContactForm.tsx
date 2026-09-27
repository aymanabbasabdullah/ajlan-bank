import { WarningIcon } from '@phosphor-icons/react'
import { useId } from 'react'
import { Button, fieldErrorId, FormField, formStyles } from '@/shared/components/ui'
import type { ContactField, IContactFormContent } from '../../../types/contact.types'
import { useContactForm } from '../hooks/useContactForm'
import { contactFormStyles as styles } from './contact-form.styles'
import { ContactSuccess } from './ContactSuccess'

interface IContactFormProps {
  content: IContactFormContent
}

export function ContactForm({ content }: IContactFormProps) {
  const baseId = useId()
  const headingId = `${baseId}-heading`
  const { values, errors, status, reference, handleChange, handleSubmit, reset } = useContactForm(content.errors)
  const isSubmitting = status === 'submitting'

  const idOf = (field: ContactField) => `${baseId}-${field}`
  const a11yOf = (field: ContactField) => ({
    id: idOf(field),
    name: field,
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? fieldErrorId(idOf(field)) : undefined,
  })

  if (status === 'success') {
    return <ContactSuccess content={content.success} reference={reference} onReset={reset} />
  }

  return (
    <form className={styles.form} aria-labelledby={headingId} onSubmit={handleSubmit} noValidate>
      <h2 id={headingId} className={styles.title}>
        {content.title}
      </h2>
      <p className={styles.description}>{content.description}</p>

      <div className={styles.grid}>
        <FormField id={idOf('name')} label={content.labels.name} error={errors.name}>
          <input
            {...a11yOf('name')}
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            className={formStyles.input}
          />
        </FormField>

        <FormField id={idOf('phone')} label={content.labels.phone} error={errors.phone}>
          <input
            {...a11yOf('phone')}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            dir="ltr"
            placeholder={content.placeholders.phone}
            value={values.phone}
            onChange={handleChange}
            className={styles.ltrInput}
          />
        </FormField>

        <FormField
          id={idOf('email')}
          label={content.labels.email}
          optionalLabel={content.optionalLabel}
          error={errors.email}
        >
          <input
            {...a11yOf('email')}
            type="email"
            autoComplete="email"
            dir="ltr"
            value={values.email}
            onChange={handleChange}
            className={styles.ltrInput}
          />
        </FormField>

        <FormField id={idOf('topic')} label={content.labels.topic} error={errors.topic}>
          <select {...a11yOf('topic')} value={values.topic} onChange={handleChange} className={formStyles.select}>
            <option value="" disabled>
              {content.topicPlaceholder}
            </option>
            {content.topics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.label}
              </option>
            ))}
          </select>
        </FormField>

        <FormField id={idOf('message')} label={content.labels.message} error={errors.message} className={styles.full}>
          <textarea
            {...a11yOf('message')}
            rows={5}
            placeholder={content.placeholders.message}
            value={values.message}
            onChange={handleChange}
            className={formStyles.textarea}
          />
        </FormField>
      </div>

      <p className={styles.privacy}>
        <WarningIcon size={18} aria-hidden className={styles.privacyIcon} />
        <span>{content.privacyNote}</span>
      </p>

      {status === 'error' && (
        <p role="alert" className={styles.submitError}>
          {content.errors.submitFailed}
        </p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className={styles.submit}>
        {isSubmitting ? content.submitting : content.submit}
      </Button>
    </form>
  )
}
