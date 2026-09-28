import type { IVisaCard } from '../../../../types/home.types'
import { VisaCardFace } from '../visa-cards/VisaCardFace'
import { heroVisaStyles as styles } from './hero-visa.styles'

interface IHeroVisaDeckProps {
  front: IVisaCard
  rear: IVisaCard
}

export function HeroVisaDeck({ front, rear }: IHeroVisaDeckProps) {
  return (
    <div className={styles.stage} aria-hidden>
      <span className={styles.glow} />
      <div className={styles.deck}>
        <div className={styles.rear}>
          <VisaCardFace card={rear} state="active" />
        </div>
        <div className={styles.front} data-hero-card="">
          <VisaCardFace card={front} state="active" />
        </div>
      </div>
    </div>
  )
}
