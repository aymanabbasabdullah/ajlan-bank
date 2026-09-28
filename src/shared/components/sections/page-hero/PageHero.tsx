import type { ReactNode } from 'react'
import type { IMediaAsset } from '@/shared/data/media'
import type { IMediaCopy } from '@/shared/data/media.ar'
import type { ILink } from '@/shared/types'
import { Breadcrumbs } from '../../layout/breadcrumbs/Breadcrumbs'
import { Container } from '../../ui/layout-primitives/Container'
import { MediaFigure } from '../../ui/media-figure/MediaFigure'
import { pageHeroStyles } from './page-hero.styles'

interface IPageHeroProps {
  title: string
  lead: string
  breadcrumbs: ILink[]
  media?: IMediaAsset
  mediaCopy?: IMediaCopy
  aside?: ReactNode
  children?: ReactNode
}

export function PageHero({ title, lead, breadcrumbs, media, mediaCopy, aside, children }: IPageHeroProps) {
  const visual = aside ? (
    <div className={pageHeroStyles.aside}>{aside}</div>
  ) : media && mediaCopy ? (
    <MediaFigure
      media={media}
      alt={mediaCopy.alt}
      caption={mediaCopy.caption}
      ratio="16/10"
      className={pageHeroStyles.media}
    />
  ) : null

  return (
    <header className={pageHeroStyles.wrapper}>
      <Container>
        <Breadcrumbs items={breadcrumbs} />
        <div className={visual ? pageHeroStyles.grid : undefined}>
          <div className={pageHeroStyles.body}>
            <h1 className={pageHeroStyles.title}>{title}</h1>
            <p className={pageHeroStyles.lead}>{lead}</p>
            {children && <div className={pageHeroStyles.extra}>{children}</div>}
          </div>
          {visual}
        </div>
      </Container>
    </header>
  )
}
