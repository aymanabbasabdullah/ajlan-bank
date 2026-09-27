import { PlusIcon } from '@phosphor-icons/react'
import type { IFaqItem } from '@/shared/types'
import { accordionStyles } from './accordion.styles'

interface IAccordionProps {
  items: IFaqItem[]
}

export function Accordion({ items }: IAccordionProps) {
  return (
    <div className={accordionStyles.list}>
      {items.map((item) => (
        <details key={item.question} className={accordionStyles.item}>
          <summary className={accordionStyles.summary}>
            <span>{item.question}</span>
            <PlusIcon size={20} weight="regular" aria-hidden className={accordionStyles.icon} />
          </summary>
          <p className={accordionStyles.answer}>{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
