import type { ReactNode } from 'react'
import type { ILink } from '@/shared/types'
import { Breadcrumbs } from '../../layout/breadcrumbs/Breadcrumbs'
import { Container } from '../../ui/layout-primitives/Container'
import { pageHeroStyles } from './page-hero.styles'

interface IPageHeroProps {
  title: string
  lead: string
  breadcrumbs: ILink[]
  children?: ReactNode
}

export function PageHero({ title, lead, breadcrumbs, children }: IPageHeroProps) {
  return (
    <header className={pageHeroStyles.wrapper}>
      <Container>
        <Breadcrumbs items={breadcrumbs} />
        <div className={pageHeroStyles.body}>
          <h1 className={pageHeroStyles.title}>{title}</h1>
          <p className={pageHeroStyles.lead}>{lead}</p>
          {children && <div className={pageHeroStyles.extra}>{children}</div>}
        </div>
      </Container>
    </header>
  )
}
