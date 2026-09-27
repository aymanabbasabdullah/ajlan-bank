import type { ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'
import { Container } from './Container'
import { layoutPrimitiveStyles, type SectionSpacing, type SectionTone } from './layout-primitives.styles'

interface ISectionProps {
  children: ReactNode
  tone?: SectionTone
  spacing?: SectionSpacing
  labelledBy?: string
  id?: string
  className?: string
}

export function Section({ children, tone = 'canvas', spacing = 'default', labelledBy, id, className }: ISectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(layoutPrimitiveStyles.tone[tone], layoutPrimitiveStyles.spacing[spacing], className)}
    >
      <Container>{children}</Container>
    </section>
  )
}
