import { ClockIcon, MapPinIcon, PhoneIcon } from '@phosphor-icons/react'
import { Badge, Card, TextLink } from '@/shared/components/ui'
import { BRANCHES_CONTENT } from '../../../data/branches-page.ar'
import type { IBranch } from '../../../types/branch.types'
import { getCityLabel, getMapHref, toTelHref } from '../../../utils/branches'
import { branchCardStyles as styles } from './branch-card.styles'

interface IBranchCardProps {
  branch: IBranch
}

export function BranchCard({ branch }: IBranchCardProps) {
  const content = BRANCHES_CONTENT

  return (
    <Card as="article" className={styles.card}>
      <header className={styles.header}>
        <div>
          <h3 className={styles.name}>{branch.name}</h3>
          <p className={styles.city}>{getCityLabel(branch.city)}</p>
        </div>
        {branch.isHeadOffice && <Badge>{content.headOfficeLabel}</Badge>}
      </header>

      <dl className={styles.details}>
        <div className={styles.row}>
          <dt className={styles.term}>
            <MapPinIcon size={18} aria-hidden className={styles.icon} />
            <span className={styles.srOnly}>{content.addressLabel}</span>
          </dt>
          <dd>{branch.address}</dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.term}>
            <PhoneIcon size={18} aria-hidden className={styles.icon} />
            <span className={styles.srOnly}>{content.phoneLabel}</span>
          </dt>
          <dd>
            <a href={toTelHref(branch.phone)} className={styles.phone} dir="ltr">
              {branch.phone}
            </a>
          </dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.term}>
            <ClockIcon size={18} aria-hidden className={styles.icon} />
            <span className={styles.srOnly}>{content.hoursLabel}</span>
          </dt>
          <dd>{branch.hours}</dd>
        </div>
      </dl>

      <div className={styles.services}>
        <h4 className={styles.srOnly}>{content.servicesLabel}</h4>
        <ul className={styles.serviceList}>
          {branch.services.map((service) => (
            <li key={service} className={styles.service}>
              {content.serviceLabels[service]}
            </li>
          ))}
        </ul>
      </div>

      <TextLink href={getMapHref(branch)} className={styles.map}>
        {content.mapLabel}
      </TextLink>
    </Card>
  )
}
