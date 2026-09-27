import type { ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'
import { layoutPrimitiveStyles } from './layout-primitives.styles'

interface IContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: IContainerProps) {
  return <div className={cn(layoutPrimitiveStyles.container, className)}>{children}</div>
}
