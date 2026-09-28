import { CheckIcon } from '@phosphor-icons/react'
import { useId } from 'react'
import { ButtonLink, MediaFigure, Reveal, Section } from '@/shared/components/ui'
import { MEDIA } from '@/shared/data/media'
import { MEDIA_COPY } from '@/shared/data/media.ar'
import type { ILink } from '@/shared/types'
import { digitalStripStyles as styles } from './digital-strip.styles'

interface IDigitalStripProps {
  digital: {
    title: string
    description: string
    features: string[]
    primary: ILink
    storeNote: string
  }
}

export function DigitalStrip({ digital }: IDigitalStripProps) {
  const headingId = useId()

  return (
    <Section tone="surface" labelledBy={headingId} id="digital">
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
        <MediaFigure
          media={MEDIA.digitalPhone}
          alt={MEDIA_COPY.digitalPhone.alt}
          caption={MEDIA_COPY.digitalPhone.caption}
          ratio="4/5"
          className={styles.media}
        />
      </div>
    </Section>
  )
}
