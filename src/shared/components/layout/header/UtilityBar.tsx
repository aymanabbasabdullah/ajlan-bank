import { PhoneIcon } from '@phosphor-icons/react'
import { Link } from 'react-router'
import { SITE } from '@/shared/data/site.ar'
import { Container } from '../../ui/layout-primitives/Container'
import { headerStyles } from './header.styles'

export function UtilityBar() {
  const { utilityNav, contact, ui } = SITE

  return (
    <div className={headerStyles.utility}>
      <Container className={headerStyles.utilityInner}>
        <a href={contact.callCenterHref} className={headerStyles.utilityPhone}>
          <PhoneIcon size={16} aria-hidden />
          <span>{ui.callCenterLabel}</span>
          <span className="tabular" dir="ltr">
            {contact.callCenter}
          </span>
        </a>
        <ul className={headerStyles.utilityList}>
          {utilityNav.map((link) => (
            <li key={link.href}>
              <Link to={link.href} className={headerStyles.utilityLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
