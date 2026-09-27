import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { isExternalHref } from '@/shared/utils/format'

interface ISmartLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

/** Internal paths use the router; tel:, mailto:, and http links use a plain anchor. */
export function SmartLink({ href, children, className, onClick }: ISmartLinkProps) {
  if (isExternalHref(href)) {
    const opensNewTab = href.startsWith('http')
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        {...(opensNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}
