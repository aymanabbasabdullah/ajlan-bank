import { SITE } from '@/shared/data/site.ar'
import type { ILink } from '@/shared/types'
import { anchorNavStyles } from './anchor-nav.styles'

interface IAnchorNavProps {
  links: ILink[]
}

export function AnchorNav({ links }: IAnchorNavProps) {
  return (
    <nav aria-label={SITE.ui.onThisPage} className={anchorNavStyles.nav}>
      <ul className={anchorNavStyles.list}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={anchorNavStyles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
