import type { IFeature } from '@/shared/types'
import { cn } from '@/shared/utils/cn'
import { IconTile } from '../../ui/icon/IconTile'
import { Reveal } from '../../ui/reveal/Reveal'
import { featureGridStyles, type FeatureGridColumns } from './feature-grid.styles'

interface IFeatureGridProps {
  items: IFeature[]
  columns?: FeatureGridColumns
  variant?: 'cards' | 'plain'
}

export function FeatureGrid({ items, columns = 3, variant = 'cards' }: IFeatureGridProps) {
  return (
    <Reveal as="ul" stagger className={cn(featureGridStyles.grid, featureGridStyles.columns[columns])}>
      {items.map((item) => (
        <li key={item.title} className={featureGridStyles.item[variant]}>
          <IconTile name={item.icon} />
          <h3 className={featureGridStyles.title}>{item.title}</h3>
          <p className={featureGridStyles.description}>{item.description}</p>
        </li>
      ))}
    </Reveal>
  )
}
