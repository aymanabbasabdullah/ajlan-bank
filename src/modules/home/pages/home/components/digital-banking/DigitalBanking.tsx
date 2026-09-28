import { CheckIcon } from '@phosphor-icons/react'
import { useId } from 'react'
import { ButtonLink, Reveal, Section } from '@/shared/components/ui'
import { MEDIA } from '@/shared/data/media'
import { MEDIA_COPY } from '@/shared/data/media.ar'
import type { IDigitalBanking } from '../../../../types/home.types'
import { digitalBankingStyles as styles } from './digital-banking.styles'
import { PhoneMockup } from './PhoneMockup'

interface IDigitalBankingProps {
  digital: IDigitalBanking
}

const PHOTO = MEDIA.digitalPhone
const PHOTO_COPY = MEDIA_COPY.digitalPhone

export function DigitalBanking({ digital }: IDigitalBankingProps) {
  const headingId = useId()

  return (
    <Section labelledBy={headingId}>
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
        <div className={styles.visual}>
          <figure className={styles.photo}>
            <img
              src={PHOTO.src}
              alt={PHOTO_COPY.alt}
              width={PHOTO.width}
              height={PHOTO.height}
              loading="lazy"
              decoding="async"
              className={styles.image}
            />
            <figcaption className={styles.caption}>
              <span>{PHOTO_COPY.caption}</span>
              <span>{PHOTO.credit}</span>
            </figcaption>
          </figure>
          <div className={styles.phone}>
            <PhoneMockup phone={digital.phone} />
          </div>
        </div>
      </div>
    </Section>
  )
}
