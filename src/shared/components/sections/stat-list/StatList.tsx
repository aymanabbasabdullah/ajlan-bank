import type { IStat } from '@/shared/types'
import { Reveal } from '../../ui/reveal/Reveal'
import { statListStyles } from './stat-list.styles'

interface IStatListProps {
  stats: IStat[]
}

export function StatList({ stats }: IStatListProps) {
  return (
    <Reveal as="dl" stagger className={statListStyles.list}>
      {stats.map((stat) => (
        <div key={stat.label} className={statListStyles.item}>
          <dt className={statListStyles.label}>{stat.label}</dt>
          <dd className={statListStyles.value}>{stat.value}</dd>
        </div>
      ))}
    </Reveal>
  )
}
