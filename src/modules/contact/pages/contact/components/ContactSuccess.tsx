import { CheckCircleIcon } from '@phosphor-icons/react'
import { useEffect, useRef } from 'react'
import { Button } from '@/shared/components/ui'
import type { IContactFormContent } from '../../../types/contact.types'
import { contactSuccessStyles as styles } from './contact-success.styles'

interface IContactSuccessProps {
  content: IContactFormContent['success']
  reference: string
  onReset: () => void
}

export function ContactSuccess({ content, reference, onReset }: IContactSuccessProps) {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    headingRef.current?.focus()
  }, [])

  return (
    <div className={styles.panel} role="status">
      <CheckCircleIcon size={48} aria-hidden className={styles.icon} />
      <h2 ref={headingRef} tabIndex={-1} className={styles.title}>
        {content.title}
      </h2>
      <p className={styles.text}>{content.text(reference)}</p>
      <Button variant="secondary" onClick={onReset} className={styles.again}>
        {content.again}
      </Button>
    </div>
  )
}
