import { Link } from 'react-router'
import { ROUTES } from '@/shared/constants/routes'
import { SITE } from '@/shared/data/site.ar'
import { cn } from '@/shared/utils/cn'
import { logoStyles } from './logo.styles'

interface ILogoProps {
  onNavigate?: () => void
  className?: string
}

export function Logo({ onNavigate, className }: ILogoProps) {
  return (
    <Link
      to={ROUTES.home}
      onClick={onNavigate}
      aria-label={SITE.brand.name}
      className={cn(logoStyles.link, className)}
    >
      <img
        src="/logo.png"
        alt=""
        width={1862}
        height={635}
        className={logoStyles.image}
      />
    </Link>
  )
}
