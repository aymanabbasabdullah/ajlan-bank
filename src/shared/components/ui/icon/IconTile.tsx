import type { IconName } from '@/shared/types'
import { cn } from '@/shared/utils/cn'
import { Icon } from './Icon'
import { iconTileStyles, type IconTileTone } from './icon-tile.styles'

interface IIconTileProps {
  name: IconName
  tone?: IconTileTone
  className?: string
}

export function IconTile({ name, tone = 'brand', className }: IIconTileProps) {
  return (
    <span className={cn(iconTileStyles.base, iconTileStyles.tone[tone], className)}>
      <Icon name={name} size={24} />
    </span>
  )
}
