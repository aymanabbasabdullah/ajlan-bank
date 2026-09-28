import { Seo } from '@/shared/components/layout'
import { PageHero } from '@/shared/components/sections'
import { Section } from '@/shared/components/ui'
import { ROUTES } from '@/shared/constants/routes'
import { heroMediaForPath } from '@/shared/data/media.ar'
import { NewsGrid } from '../../components/news-grid/NewsGrid'
import { NEWS_CONTENT } from '../../data/news-page.ar'
import { getAllNews } from '../../utils/news'

export function NewsListPage() {
  const content = NEWS_CONTENT
  const heroMedia = heroMediaForPath(ROUTES.news)

  return (
    <>
      <Seo meta={content.seo} breadcrumbs={content.breadcrumbs} />
      <PageHero
        title={content.header.title}
        lead={content.header.lead}
        breadcrumbs={content.breadcrumbs}
        media={heroMedia?.media}
        mediaCopy={heroMedia?.mediaCopy}
      />
      <Section>
        <NewsGrid articles={getAllNews()} />
      </Section>
    </>
  )
}
