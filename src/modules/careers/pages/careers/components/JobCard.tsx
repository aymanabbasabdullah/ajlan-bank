import { CaretDownIcon } from '@phosphor-icons/react'
import { ButtonLink, Card } from '@/shared/components/ui'
import type { ICareersContent, IJobOpening } from '../../../types/careers.types'
import { buildMailtoHref } from '../../../utils/apply'
import { jobCardStyles as styles } from './job-card.styles'

interface IJobCardProps {
  job: IJobOpening
  labels: ICareersContent['labels']
  email: string
}

export function JobCard({ job, labels, email }: IJobCardProps) {
  return (
    <Card as="article">
      <div className={styles.top}>
        <div className={styles.text}>
          <h3 className={styles.title}>{job.title}</h3>
          <dl className={styles.meta}>
            <div className={styles.metaItem}>
              <dt className={styles.srOnly}>{labels.department}</dt>
              <dd>{job.department}</dd>
            </div>
            <div className={styles.metaItem}>
              <dt className={styles.srOnly}>{labels.location}</dt>
              <dd>{job.location}</dd>
            </div>
            <div className={styles.metaItem}>
              <dt className={styles.srOnly}>{labels.type}</dt>
              <dd>{job.type}</dd>
            </div>
            <div className={styles.reference}>
              <dt className={styles.srOnly}>{labels.reference}</dt>
              <dd dir="ltr">{job.id}</dd>
            </div>
          </dl>
          <p className={styles.summary}>{job.summary}</p>
        </div>
        <ButtonLink href={buildMailtoHref(email, labels.applySubject(job))} variant="secondary" className={styles.apply}>
          {labels.apply}
        </ButtonLink>
      </div>

      <details className={styles.details}>
        <summary className={styles.summaryToggle}>
          <span>{labels.requirements}</span>
          <CaretDownIcon size={18} aria-hidden className={styles.caret} />
        </summary>
        <ul className={styles.requirements}>
          {job.requirements.map((requirement) => (
            <li key={requirement}>{requirement}</li>
          ))}
        </ul>
      </details>
    </Card>
  )
}
