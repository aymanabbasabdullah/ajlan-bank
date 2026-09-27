import { CaretLeftIcon } from '@phosphor-icons/react'
import { Fragment } from 'react'
import { Link } from 'react-router'
import { SITE } from '@/shared/data/site.ar'
import type { ILink } from '@/shared/types'
import { breadcrumbsStyles } from './breadcrumbs.styles'

interface IBreadcrumbsProps {
  items: ILink[]
}

export function Breadcrumbs({ items }: IBreadcrumbsProps) {
  const trail = [{ label: SITE.ui.home, href: '/' }, ...items]

  return (
    <nav aria-label={SITE.ui.breadcrumbLabel}>
      <ol className={breadcrumbsStyles.list}>
        {trail.map((item, index) => {
          const isCurrent = index === trail.length - 1
          return (
            <Fragment key={item.href}>
              <li>
                {isCurrent ? (
                  <span aria-current="page" className={breadcrumbsStyles.current}>
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.href} className={breadcrumbsStyles.link}>
                    {item.label}
                  </Link>
                )}
              </li>
              {!isCurrent && (
                <li aria-hidden className={breadcrumbsStyles.separator}>
                  <CaretLeftIcon size={14} className={breadcrumbsStyles.separatorIcon} />
                </li>
              )}
            </Fragment>
          )
        })}
      </ol>
    </nav>
  )
}
