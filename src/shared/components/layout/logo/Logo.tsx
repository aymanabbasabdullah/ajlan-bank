import { Link } from 'react-router'
import { ROUTES } from '@/shared/constants/routes'
import { SITE } from '@/shared/data/site.ar'
import { cn } from '@/shared/utils/cn'
import { LogoMark } from './LogoMark'
import { logoStyles } from './logo.styles'

interface ILogoProps {
  onNavigate?: () => void
  className?: string
}

export function Logo({ onNavigate, className }: ILogoProps) {
  return (
    <Link to={ROUTES.home} onClick={onNavigate} className={cn(logoStyles.link, className)}>
      <LogoMark className={logoStyles.mark} />
      <span className={logoStyles.text}>
        <span className={logoStyles.name}>{SITE.brand.name}</span>
        <span className={logoStyles.latin} lang="en" dir="ltr">
          {SITE.brand.latinName}
        </span>
      </span>
    </Link>
  )
}
