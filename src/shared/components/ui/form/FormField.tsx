import type { ReactNode } from 'react'
import { fieldErrorId } from './field-ids'
import { formStyles } from './form.styles'

interface IFormFieldProps {
  id: string
  label: string
  error?: string
  optionalLabel?: string
  children: ReactNode
  className?: string
}

/** Label + control + error message. The control must set `aria-describedby={fieldErrorId(id)}` when invalid. */
export function FormField({ id, label, error, optionalLabel, children, className }: IFormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className={formStyles.label}>
        {label}
        {optionalLabel && <span className={formStyles.optional}> ({optionalLabel})</span>}
      </label>
      {children}
      {error && (
        <p id={fieldErrorId(id)} className={formStyles.error}>
          {error}
        </p>
      )}
    </div>
  )
}
