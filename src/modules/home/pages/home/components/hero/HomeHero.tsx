import { ShieldCheckIcon } from '@phosphor-icons/react'
import { ButtonLink, Container } from '@/shared/components/ui'
import type { IHomeHero } from '../../../../types/home.types'
import { HeroVisual } from './HeroVisual'
import { homeHeroStyles as styles } from './home-hero.styles'

interface IHomeHeroProps {
  hero: IHomeHero
}

export function HomeHero({ hero }: IHomeHeroProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        <div className={styles.text}>
          <h1 className={styles.title}>{hero.title}</h1>
          <p className={styles.lead}>{hero.lead}</p>
          <div className={styles.actions}>
            <ButtonLink href={hero.primary.href} size="lg">
              {hero.primary.label}
            </ButtonLink>
            <ButtonLink href={hero.secondary.href} variant="secondary" size="lg">
              {hero.secondary.label}
            </ButtonLink>
          </div>
          <p className={styles.trust}>
            <ShieldCheckIcon size={20} aria-hidden className={styles.trustIcon} />
            <span>{hero.trustNote}</span>
          </p>
        </div>
        <HeroVisual card={hero.card} activity={hero.activity} />
      </Container>
    </section>
  )
}
