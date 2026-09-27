import { EnvelopeSimpleIcon, MapPinIcon, PhoneIcon } from '@phosphor-icons/react'
import { Link } from 'react-router'
import { SITE } from '@/shared/data/site.ar'
import { Container } from '../../ui/layout-primitives/Container'
import { Logo } from '../logo/Logo'
import { footerStyles } from './footer.styles'

export function Footer() {
  const { brand, footerGroups, legalLinks, contact, legal, ui } = SITE
  const year = new Date().getFullYear()

  return (
    <footer className={footerStyles.footer}>
      <Container>
        <div className={footerStyles.top}>
          <div className={footerStyles.brand}>
            <Logo />
            <p className={footerStyles.description}>{brand.description}</p>
            <ul className={footerStyles.contactList} aria-label={ui.contactHeading}>
              <li>
                <a href={contact.callCenterHref} className={footerStyles.contactItem}>
                  <PhoneIcon size={18} aria-hidden className={footerStyles.contactIcon} />
                  <span>{ui.callCenterLabel}</span>
                  <span className="tabular" dir="ltr">
                    {contact.callCenter}
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className={footerStyles.contactItem}>
                  <EnvelopeSimpleIcon size={18} aria-hidden className={footerStyles.contactIcon} />
                  <span dir="ltr">{contact.email}</span>
                </a>
              </li>
              <li className={footerStyles.contactItem}>
                <MapPinIcon size={18} aria-hidden className={footerStyles.contactIcon} />
                <span>{contact.headOffice}</span>
              </li>
            </ul>
          </div>

          <nav aria-label={ui.footerNavLabel} className={footerStyles.groups}>
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className={footerStyles.groupTitle}>{group.title}</h2>
                <ul className={footerStyles.groupList}>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link to={link.href} className={footerStyles.groupLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={footerStyles.legal}>
          <p className={footerStyles.regulator}>{legal.regulatorStatement}</p>
          <dl className={footerStyles.legalFacts}>
            <div className={footerStyles.legalFact}>
              <dt>{ui.licenseLabel}</dt>
              <dd className="tabular">{legal.licenseNumber}</dd>
            </div>
            <div className={footerStyles.legalFact}>
              <dt>{ui.commercialRegistrationLabel}</dt>
              <dd className="tabular">{legal.commercialRegistration}</dd>
            </div>
            <div className={footerStyles.legalFact}>
              <dt>{ui.swiftLabel}</dt>
              <dd dir="ltr">{legal.swiftCode}</dd>
            </div>
          </dl>
        </div>

        <div className={footerStyles.bottom}>
          <p>
            © <span className="tabular">{year}</span> {legal.copyright}
          </p>
          <ul className={footerStyles.bottomLinks}>
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className={footerStyles.bottomLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
