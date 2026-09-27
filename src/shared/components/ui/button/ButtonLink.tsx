import type { ReactNode } from 'react'
import { SmartLink } from '../smart-link/SmartLink'
import { buttonClasses, type ButtonSize, type ButtonVariant } from './button.styles'

interface IButtonLinkProps {
  href: string
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

export function ButtonLink({ href, children, variant, size, className }: IButtonLinkProps) {
  return (
    <SmartLink href={href} className={buttonClasses(variant, size, className)}>
      {children}
    </SmartLink>
  )
}
