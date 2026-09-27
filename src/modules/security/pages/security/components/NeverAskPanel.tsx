import { ProhibitIcon, ShieldCheckIcon } from '@phosphor-icons/react'
import { useId } from 'react'
import { Reveal, Section } from '@/shared/components/ui'
import type { ISecurityContent } from '../../../types/security.types'
import { neverAskPanelStyles as styles } from './never-ask-panel.styles'

interface INeverAskPanelProps {
  content: ISecurityContent['neverAsk']
}

export function NeverAskPanel({ content }: INeverAskPanelProps) {
  const headingId = useId()

  return (
    <Section labelledBy={headingId}>
      <div className={styles.panel}>
        <div className={styles.intro}>
          <ShieldCheckIcon size={40} aria-hidden className={styles.shield} />
          <h2 id={headingId} className={styles.title}>
            {content.title}
          </h2>
          <p className={styles.description}>{content.description}</p>
        </div>
        <Reveal as="ul" stagger className={styles.list}>
          {content.items.map((item) => (
            <li key={item} className={styles.item}>
              <ProhibitIcon size={20} aria-hidden className={styles.itemIcon} />
              <span>{item}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
