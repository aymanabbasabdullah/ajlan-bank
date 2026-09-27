import { NavLink } from 'react-router'
import { SITE } from '@/shared/data/site.ar'
import { useScrolled } from '@/shared/hooks/useScrolled'
import { cn } from '@/shared/utils/cn'
import { ButtonLink } from '../../ui/button/ButtonLink'
import { Container } from '../../ui/layout-primitives/Container'
import { Logo } from '../logo/Logo'
import { MobileNav } from '../mobile-nav/MobileNav'
import { headerStyles } from './header.styles'

export function Header() {
  const isScrolled = useScrolled()
  const { mainNav, headerCta, ui } = SITE

  return (
    <header className={cn(headerStyles.header, isScrolled && headerStyles.scrolled)}>
      <Container className={headerStyles.bar}>
        <Logo />
        <nav aria-label={ui.mainNavLabel} className={headerStyles.nav}>
          <ul className={headerStyles.navList}>
            {mainNav.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) => cn(headerStyles.navLink, isActive && headerStyles.navLinkActive)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={headerStyles.actions}>
          <ButtonLink href={headerCta.href} className={headerStyles.cta}>
            {headerCta.label}
          </ButtonLink>
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
