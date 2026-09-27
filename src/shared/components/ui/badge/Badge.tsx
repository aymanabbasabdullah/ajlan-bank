import type { ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'
import { badgeStyles, type BadgeTone } from './badge.styles'

interface IBadgeProps {
  children: ReactNode
  tone?: BadgeTone
  className?: string
}

export function Badge({ children, tone = 'sand', className }: IBadgeProps) {
  return <span className={cn(badgeStyles.base, badgeStyles.tone[tone], className)}>{children}</span>
}
