import { useId } from 'react'
import { MEDIA } from '@/shared/data/media'
import { MEDIA_COPY } from '@/shared/data/media.ar'
import type { ICta } from '@/shared/types'
import { ButtonLink } from '../../ui/button/ButtonLink'
import { IslamicPattern } from '../../ui/islamic-pattern/IslamicPattern'
import { Container } from '../../ui/layout-primitives/Container'
import { Reveal } from '../../ui/reveal/Reveal'
import { TextLink } from '../../ui/text-link/TextLink'
import { ctaBannerStyles as styles } from './cta-banner.styles'

interface ICtaBannerProps {
  cta: ICta
}

const PHOTO = MEDIA.harbor
const PHOTO_COPY = MEDIA_COPY.harbor

export function CtaBanner({ cta }: ICtaBannerProps) {
  const headingId = useId()

  return (
    <section aria-labelledby={headingId} className={styles.section}>
      <IslamicPattern className={styles.pattern} patternId="ajlan-cta-star" />
      <Container>
        <Reveal className={styles.grid}>
          <div className={styles.copy}>
            <span className={styles.rule} aria-hidden />
            <h2 id={headingId} className={styles.title}>
              {cta.title}
            </h2>
            <p className={styles.description}>{cta.description}</p>
            <div className={styles.actions}>
              <ButtonLink href={cta.primary.href} variant="inverse" size="lg">
                {cta.primary.label}
              </ButtonLink>
              {cta.secondary && (
                <TextLink href={cta.secondary.href} className={styles.secondary}>
                  {cta.secondary.label}
                </TextLink>
              )}
            </div>
          </div>
          <figure className={styles.media}>
            <div className={styles.frame}>
              <img
                src={PHOTO.src}
                alt={PHOTO_COPY.alt}
                width={PHOTO.width}
                height={PHOTO.height}
                loading="lazy"
                decoding="async"
                className={styles.image}
              />
            </div>
            <figcaption className={styles.caption}>
              <span>{PHOTO_COPY.caption}</span>
              <span>{PHOTO.credit}</span>
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  )
}
