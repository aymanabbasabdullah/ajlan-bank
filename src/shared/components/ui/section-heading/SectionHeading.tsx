import type { ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'
import { sectionHeadingStyles } from './section-heading.styles'

interface ISectionHeadingProps {
  id?: string
  title: string
  description?: string
  align?: 'start' | 'center'
  action?: ReactNode
  className?: string
}

export function SectionHeading({ id, title, description, align = 'start', action, className }: ISectionHeadingProps) {
  return (
    <div className={cn(sectionHeadingStyles.wrapper, action && sectionHeadingStyles.withAction, className)}>
      <div className={cn(sectionHeadingStyles.text, align === 'center' && sectionHeadingStyles.center)}>
        <h2 id={id} className={sectionHeadingStyles.title}>
          {title}
        </h2>
        {description && <p className={sectionHeadingStyles.description}>{description}</p>}
      </div>
      {action && <div className={sectionHeadingStyles.action}>{action}</div>}
    </div>
  )
}
