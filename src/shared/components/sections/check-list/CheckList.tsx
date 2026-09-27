import { CheckIcon } from '@phosphor-icons/react'
import { useId } from 'react'
import type { IconName } from '@/shared/types'
import { cn } from '@/shared/utils/cn'
import { Card } from '../../ui/card/Card'
import { IconTile } from '../../ui/icon/IconTile'
import { checkListStyles } from './check-list.styles'

interface ICheckListProps {
  title: string
  items: string[]
  icon?: IconName
  tone?: 'surface' | 'tinted'
  className?: string
}

export function CheckList({ title, items, icon, tone = 'surface', className }: ICheckListProps) {
  const headingId = useId()

  return (
    <Card tone={tone} className={cn(checkListStyles.card, className)}>
      <div className={checkListStyles.header}>
        {icon && <IconTile name={icon} tone={tone === 'tinted' ? 'sand' : 'brand'} />}
        <h3 id={headingId} className={checkListStyles.title}>
          {title}
        </h3>
      </div>
      <ul aria-labelledby={headingId} className={checkListStyles.list}>
        {items.map((item) => (
          <li key={item} className={checkListStyles.item}>
            <CheckIcon size={18} weight="bold" aria-hidden className={checkListStyles.icon} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
