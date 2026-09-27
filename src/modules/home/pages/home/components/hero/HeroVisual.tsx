import { WifiHighIcon } from '@phosphor-icons/react'
import { Icon } from '@/shared/components/ui'
import { cn } from '@/shared/utils/cn'
import type { IHomeHero } from '../../../../types/home.types'
import { heroVisualStyles as styles } from './hero-visual.styles'

type HeroVisualProps = Pick<IHomeHero, 'card' | 'activity'>

/** Decorative composition: a flat bank card and a recent-activity panel. */
export function HeroVisual({ card, activity }: HeroVisualProps) {
  return (
    <div className={styles.stage} aria-hidden>
      <span className={styles.ringLarge} />
      <span className={styles.ringSmall} />

      <div className={styles.card}>
        <span className={styles.cardCircleA} />
        <span className={styles.cardCircleB} />
        <div className={styles.cardTop}>
          <span className={styles.cardBank}>{card.bankName}</span>
          <WifiHighIcon size={22} className={styles.contactless} />
        </div>
        <span className={styles.chip} />
        <div className={styles.cardBottom}>
          <span className={styles.cardNumber} dir="ltr">
            {card.maskedNumber}
          </span>
          <div className={styles.cardMeta}>
            <span>{card.type}</span>
            <span dir="ltr">{card.expiry}</span>
          </div>
        </div>
      </div>

      <div className={styles.activity}>
        <p className={styles.activityTitle}>{activity.title}</p>
        <ul className={styles.activityList}>
          {activity.items.map((item) => (
            <li key={item.label} className={styles.activityItem}>
              <span className={styles.activityIcon}>
                <Icon name={item.icon} size={18} />
              </span>
              <span className={styles.activityText}>
                <span className={styles.activityLabel}>{item.label}</span>
                <span className={styles.activityMeta}>{item.meta}</span>
              </span>
              <span
                className={cn(styles.activityAmount, item.direction === 'in' ? styles.amountIn : styles.amountOut)}
                dir="ltr"
              >
                {item.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
