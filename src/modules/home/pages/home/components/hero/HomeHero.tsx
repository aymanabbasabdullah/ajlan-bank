import { ButtonLink, Container, IslamicPattern, Reveal, TextLink } from '@/shared/components/ui'
import { MEDIA } from '@/shared/data/media'
import { MEDIA_COPY } from '@/shared/data/media.ar'
import type { IHomeHero, IVisaCard } from '../../../../types/home.types'
import { HeroVisaDeck } from './HeroVisaDeck'
import { homeHeroStyles as styles } from './home-hero.styles'

interface IHomeHeroProps {
  hero: IHomeHero
  cards: IVisaCard[]
}

const HERO_MEDIA = MEDIA.heroStreet
const HERO_COPY = MEDIA_COPY.heroStreet

export function HomeHero({ hero, cards }: IHomeHeroProps) {
  const front = cards[0]
  const rear = cards[1] ?? cards[0]

  return (
    <section className={styles.section}>
      <div className={styles.photo}>
        <img
          src={HERO_MEDIA.src}
          alt={HERO_COPY.alt}
          width={HERO_MEDIA.width}
          height={HERO_MEDIA.height}
          fetchPriority="high"
          decoding="async"
          className={styles.image}
        />
        <div className={styles.veil} aria-hidden />
        <IslamicPattern className={styles.pattern} patternId="ajlan-hero-star" />
      </div>
      <Container className={styles.inner}>
        <div className={styles.grid}>
          <Reveal className={styles.copy}>
            <h1 className={styles.title}>{hero.title}</h1>
            <p className={styles.lead}>{hero.lead}</p>
            <div className={styles.actions}>
              <ButtonLink href={hero.primary.href} size="lg">
                {hero.primary.label}
              </ButtonLink>
              <ButtonLink href={hero.secondary.href} variant="inverse" size="lg">
                {hero.secondary.label}
              </ButtonLink>
            </div>
            {/* <p className={styles.trust}>
              <ShieldCheckIcon size={20} aria-hidden className={styles.trustIcon} />
              <span>{hero.trustNote}</span>
            </p> */}
            <TextLink href={hero.cardLink.href} className={styles.cardLink}>
              {hero.cardLink.label}
            </TextLink>
          </Reveal>
          {front && rear && (
            <Reveal className={styles.visual}>
              <HeroVisaDeck front={front} rear={rear} />
            </Reveal>
          )}
        </div>
        <p className={styles.caption}>
          <span>{HERO_COPY.caption}</span>
          <span>{HERO_MEDIA.credit}</span>
        </p>
      </Container>
    </section>
  )
}
