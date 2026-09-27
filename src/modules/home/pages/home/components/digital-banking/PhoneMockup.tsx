import { Icon } from '@/shared/components/ui'
import { cn } from '@/shared/utils/cn'
import type { IDigitalBanking } from '../../../../types/home.types'
import { phoneMockupStyles as styles } from './phone-mockup.styles'

interface IPhoneMockupProps {
  phone: IDigitalBanking['phone']
}

/** Decorative app preview built from flat surfaces. */
export function PhoneMockup({ phone }: IPhoneMockupProps) {
  return (
    <div className={styles.stage} aria-hidden>
      <span className={styles.backdrop} />
      <div className={styles.frame}>
        <div className={styles.screen}>
          <span className={styles.notch} />
          <p className={styles.greeting}>{phone.greeting}</p>

          <div className={styles.balanceCard}>
            <span className={styles.balanceLabel}>{phone.balanceLabel}</span>
            <span className={styles.balance} dir="ltr">
              {phone.balance}
            </span>
            <span className={styles.account}>{phone.accountLabel}</span>
          </div>

          <ul className={styles.actions}>
            {phone.actions.map((action) => (
              <li key={action.label} className={styles.action}>
                <span className={styles.actionIcon}>
                  <Icon name={action.icon} size={20} />
                </span>
                <span>{action.label}</span>
              </li>
            ))}
          </ul>

          <p className={styles.recentTitle}>{phone.recentTitle}</p>
          <ul className={styles.recent}>
            {phone.recent.map((item) => (
              <li key={item.label} className={styles.recentItem}>
                <span className={styles.recentIcon}>
                  <Icon name={item.icon} size={16} />
                </span>
                <span className={styles.recentText}>
                  <span className={styles.recentLabel}>{item.label}</span>
                  <span className={styles.recentMeta}>{item.meta}</span>
                </span>
                <span className={cn(styles.recentAmount, item.direction === 'in' && styles.amountIn)} dir="ltr">
                  {item.amount}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
