import { ListIcon, PhoneIcon, XIcon } from '@phosphor-icons/react'
import { useEffect, useRef, type MouseEvent } from 'react'
import { NavLink, useLocation } from 'react-router'
import { SITE } from '@/shared/data/site.ar'
import { cn } from '@/shared/utils/cn'
import { ButtonLink } from '../../ui/button/ButtonLink'
import { Logo } from '../logo/Logo'
import { mobileNavStyles } from './mobile-nav.styles'

export function MobileNav() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const location = useLocation()
  const { mainNav, utilityNav, headerCta, contact, ui } = SITE

  const open = () => dialogRef.current?.showModal()
  const close = () => dialogRef.current?.close()

  useEffect(() => {
    close()
  }, [location.pathname, location.search])

  const closeOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) close()
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        aria-label={ui.openMenu}
        className={mobileNavStyles.trigger}
      >
        <ListIcon size={24} aria-hidden />
      </button>

      <dialog ref={dialogRef} data-drawer aria-label={ui.menuTitle} onClick={closeOnBackdrop} className={mobileNavStyles.dialog}>
        <div className={mobileNavStyles.panel}>
          <div className={mobileNavStyles.top}>
            <Logo onNavigate={close} />
            <button type="button" onClick={close} aria-label={ui.closeMenu} className={mobileNavStyles.close}>
              <XIcon size={22} aria-hidden />
            </button>
          </div>

          <nav aria-label={ui.mainNavLabel} className={mobileNavStyles.nav}>
            <ul className={mobileNavStyles.mainList}>
              {mainNav.map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    onClick={close}
                    className={({ isActive }) => cn(mobileNavStyles.mainLink, isActive && mobileNavStyles.mainLinkActive)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ul className={mobileNavStyles.utilityList}>
              {utilityNav.map((link) => (
                <li key={link.href}>
                  <NavLink to={link.href} onClick={close} className={mobileNavStyles.utilityLink}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={mobileNavStyles.footer}>
            <ButtonLink href={headerCta.href} size="lg" className={mobileNavStyles.cta}>
              {headerCta.label}
            </ButtonLink>
            <a href={contact.callCenterHref} className={mobileNavStyles.phone}>
              <PhoneIcon size={18} aria-hidden />
              <span>{ui.callCenterLabel}</span>
              <span className="tabular" dir="ltr">
                {contact.callCenter}
              </span>
            </a>
          </div>
        </div>
      </dialog>
    </>
  )
}
