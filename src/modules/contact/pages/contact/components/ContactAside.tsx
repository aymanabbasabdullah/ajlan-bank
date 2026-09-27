import { ShieldWarningIcon } from '@phosphor-icons/react'
import { Card, TextLink } from '@/shared/components/ui'
import { SITE } from '@/shared/data/site.ar'
import type { IContactContent } from '../../../types/contact.types'
import { contactAsideStyles as styles } from './contact-aside.styles'

interface IContactAsideProps {
  office: IContactContent['office']
  fraud: IContactContent['fraud']
}

export function ContactAside({ office, fraud }: IContactAsideProps) {
  const { contact, legal } = SITE

  return (
    <aside className={styles.aside}>
      <Card>
        <h2 className={styles.title}>{office.title}</h2>
        <dl className={styles.list}>
          <div>
            <dt className={styles.term}>{office.addressLabel}</dt>
            <dd className={styles.value}>{contact.headOffice}</dd>
          </div>
          <div>
            <dt className={styles.term}>{office.hoursLabel}</dt>
            <dd className={styles.value}>{contact.workingHours}</dd>
          </div>
          <div>
            <dt className={styles.term}>{office.swiftLabel}</dt>
            <dd className={styles.code}>{legal.swiftCode}</dd>
          </div>
        </dl>
      </Card>

      <div className={styles.fraud}>
        <div className={styles.fraudHeader}>
          <ShieldWarningIcon size={24} aria-hidden className={styles.fraudIcon} />
          <h2 className={styles.fraudTitle}>{fraud.title}</h2>
        </div>
        <p className={styles.fraudText}>{fraud.text}</p>
        <a href={`mailto:${contact.fraudEmail}`} className={styles.fraudEmail}>
          {contact.fraudEmail}
        </a>
        <TextLink href={fraud.link.href} className={styles.fraudLink}>
          {fraud.link.label}
        </TextLink>
      </div>
    </aside>
  )
}
