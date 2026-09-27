import { CheckIcon } from '@phosphor-icons/react'
import { useId } from 'react'
import { ButtonLink, Reveal, Section } from '@/shared/components/ui'
import type { IDigitalBanking } from '../../../../types/home.types'
import { digitalBankingStyles as styles } from './digital-banking.styles'
import { PhoneMockup } from './PhoneMockup'

interface IDigitalBankingProps {
  digital: IDigitalBanking
}

export function DigitalBanking({ digital }: IDigitalBankingProps) {
  const headingId = useId()

  return (
    <Section tone="surface" labelledBy={headingId}>
      <div className={styles.grid}>
        <div className={styles.text}>
          <h2 id={headingId} className={styles.title}>
            {digital.title}
          </h2>
          <p className={styles.description}>{digital.description}</p>
          <Reveal as="ul" stagger className={styles.features}>
            {digital.features.map((feature) => (
              <li key={feature} className={styles.feature}>
                <span className={styles.check}>
                  <CheckIcon size={14} weight="bold" aria-hidden />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </Reveal>
          <div className={styles.actions}>
            <ButtonLink href={digital.primary.href} size="lg">
              {digital.primary.label}
            </ButtonLink>
            <span className={styles.storeNote}>{digital.storeNote}</span>
          </div>
        </div>
        <PhoneMockup phone={digital.phone} />
      </div>
    </Section>
  )
}
