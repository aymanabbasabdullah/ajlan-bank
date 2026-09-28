import { VisaCardFace } from '@/shared/components/ui'
import type { IVisaCard } from '../../../../types/home.types'
import { heroVisaStyles as styles } from './hero-visa.styles'

interface IHeroVisaDeckProps {
  cards: IVisaCard[]
}

export function HeroVisaDeck({ cards }: IHeroVisaDeckProps) {
  const front = cards[0]
  const back = cards[1] ?? cards[0]
  const mid = cards[2] ?? back

  if (!front) return null

  return (
    <div className={styles.stage} aria-hidden>
      <div className={styles.deck}>
        <div className={styles.layer} data-hero-layer="back">
          <VisaCardFace card={back} />
        </div>
        <div className={styles.layer} data-hero-layer="mid">
          <VisaCardFace card={mid} />
        </div>
        <div className={styles.layer} data-hero-layer="front">
          <VisaCardFace card={front} />
        </div>
      </div>
    </div>
  )
}
