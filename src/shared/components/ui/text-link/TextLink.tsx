import type { ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'
import { DirectionalArrow } from '../icon/DirectionalArrow'
import { SmartLink } from '../smart-link/SmartLink'
import { textLinkStyles } from './text-link.styles'

interface ITextLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function TextLink({ href, children, className }: ITextLinkProps) {
  return (
    <SmartLink href={href} className={cn(textLinkStyles.link, className)}>
      <span>{children}</span>
      <DirectionalArrow size={16} className={textLinkStyles.arrow} />
    </SmartLink>
  )
}
