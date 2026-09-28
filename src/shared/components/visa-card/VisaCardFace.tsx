import { SITE } from '@/shared/data/site.ar'
import type { IVisaCardVisual, VisaCardFaceState } from '@/shared/types'
import { cn } from '@/shared/utils/cn'
import { visaCardFaceStyles as styles } from './visa-card.styles'

interface IVisaCardFaceProps {
  card: IVisaCardVisual
  state?: VisaCardFaceState
}

export function VisaCardFace({ card, state = 'active' }: IVisaCardFaceProps) {
  return (
    <article
      data-visa-face=""
      className={cn(styles.card, styles.motion, styles.tone[card.tone], styles[state])}
      aria-hidden={state !== 'active'}
    >
      <svg className={styles.ornament} viewBox="0 0 72 72" aria-hidden>
        <path
          d="M36 6 L42 24 L60 30 L42 36 L36 54 L30 36 L12 30 L30 24 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M36 18 L40 28 L50 32 L40 36 L36 46 L32 36 L22 32 L32 28 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
      <div>
        <div className={styles.top}>
          <p className={styles.brand}>{SITE.brand.name}</p>
          <p className={styles.network}>{card.network}</p>
        </div>
        <div className={styles.chipRow}>
          <span className={styles.chip} aria-hidden>
            <span className={styles.chipLines}>
              <span className={styles.chipCell} />
              <span className={styles.chipCell} />
              <span className={styles.chipCell} />
              <span className={styles.chipCell} />
              <span className={styles.chipCell} />
              <span className={styles.chipCell} />
            </span>
          </span>
          <svg className={styles.waves} viewBox="0 0 24 24" aria-hidden>
            <path
              d="M8 8c2.2 2.2 2.2 5.8 0 8M11 5.5c3.6 3.6 3.6 9.4 0 13M14 3c5 5 5 13 0 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className={styles.number} dir="ltr">
          {card.maskedNumber}
        </p>
      </div>
      <div className={styles.meta}>
        <div className={styles.metaName}>
          <p className={styles.metaLabel}>{card.holderLabel}</p>
          <p className={styles.metaValue}>{card.name}</p>
        </div>
        <div className={styles.metaExpiry}>
          <p className={styles.metaLabel}>{card.expiryLabel}</p>
          <p className={styles.metaValue} dir="ltr">
            {card.expiry}
          </p>
        </div>
      </div>
    </article>
  )
}
