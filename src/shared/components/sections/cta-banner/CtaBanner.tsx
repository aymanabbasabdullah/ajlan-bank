import { useId } from 'react'
import type { ICta } from '@/shared/types'
import { ButtonLink } from '../../ui/button/ButtonLink'
import { Container } from '../../ui/layout-primitives/Container'
import { Reveal } from '../../ui/reveal/Reveal'
import { ctaBannerStyles } from './cta-banner.styles'

interface ICtaBannerProps {
  cta: ICta
}

export function CtaBanner({ cta }: ICtaBannerProps) {
  const headingId = useId()

  return (
    <section aria-labelledby={headingId} className={ctaBannerStyles.section}>
      <Container>
        <Reveal className={ctaBannerStyles.panel}>
          <div className={ctaBannerStyles.text}>
            <h2 id={headingId} className={ctaBannerStyles.title}>
              {cta.title}
            </h2>
            <p className={ctaBannerStyles.description}>{cta.description}</p>
          </div>
          <div className={ctaBannerStyles.actions}>
            <ButtonLink href={cta.primary.href} variant="inverse" size="lg">
              {cta.primary.label}
            </ButtonLink>
            {cta.secondary && (
              <ButtonLink href={cta.secondary.href} variant="ghost" size="lg" className={ctaBannerStyles.secondary}>
                {cta.secondary.label}
              </ButtonLink>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
