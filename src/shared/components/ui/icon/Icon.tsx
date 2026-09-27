import { createElement } from 'react'
import type { IconName } from '@/shared/types'
import { ICON_REGISTRY } from './icon-registry'

interface IIconProps {
  name: IconName
  size?: number
  className?: string
}

export function Icon({ name, size = 24, className }: IIconProps) {
  return createElement(ICON_REGISTRY[name], {
    size,
    weight: 'regular',
    className,
    'aria-hidden': true,
  })
}
