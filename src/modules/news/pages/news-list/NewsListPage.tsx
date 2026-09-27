import { Seo } from '@/shared/components/layout'
import { PageHero } from '@/shared/components/sections'
import { Section } from '@/shared/components/ui'
import { NewsGrid } from '../../components/news-grid/NewsGrid'
import { NEWS_CONTENT } from '../../data/news-page.ar'
import { getAllNews } from '../../utils/news'

export function NewsListPage() {
  const content = NEWS_CONTENT

  return (
    <>
      <Seo meta={content.seo} breadcrumbs={content.breadcrumbs} />
      <PageHero title={content.header.title} lead={content.header.lead} breadcrumbs={content.breadcrumbs} />
      <Section>
        <NewsGrid articles={getAllNews()} />
      </Section>
    </>
  )
}
