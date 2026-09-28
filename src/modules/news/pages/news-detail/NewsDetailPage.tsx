import { useId } from 'react'
import { useParams } from 'react-router'
import { NotFoundPage } from '@/modules/not-found'
import { Breadcrumbs, Seo } from '@/shared/components/layout'
import { Badge, Container, MediaFigure, Section, SectionHeading, TextLink } from '@/shared/components/ui'
import { MEDIA } from '@/shared/data/media'
import { MEDIA_COPY } from '@/shared/data/media.ar'
import { ROUTES, newsPath } from '@/shared/constants/routes'
import { formatDate } from '@/shared/utils/format'
import { NewsGrid } from '../../components/news-grid/NewsGrid'
import { NEWS_CONTENT } from '../../data/news-page.ar'
import { getNewsBySlug, getOtherNews } from '../../utils/news'
import { newsArticleJsonLd } from '../../utils/news-structured-data'
import { newsDetailStyles } from './news-detail.styles'

export function NewsDetailPage() {
  const { slug = '' } = useParams()
  const moreHeadingId = useId()
  const article = getNewsBySlug(slug)

  if (!article) return <NotFoundPage />

  const content = NEWS_CONTENT
  const path = newsPath(article.slug)
  const breadcrumbs = [...content.breadcrumbs, { label: article.title, href: path }]

  return (
    <>
      <Seo
        meta={{ title: article.title, description: article.excerpt, path }}
        type="article"
        jsonLd={[newsArticleJsonLd(article)]}
        breadcrumbs={breadcrumbs}
      />
      <article>
        <header className={newsDetailStyles.header}>
          <Container className={newsDetailStyles.headerInner}>
            <Breadcrumbs items={breadcrumbs} />
            <div className={newsDetailStyles.meta}>
              <Badge>{article.category}</Badge>
              <span className={newsDetailStyles.date}>
                {content.publishedLabel}: <time dateTime={article.date}>{formatDate(article.date)}</time>
              </span>
            </div>
            <h1 className={newsDetailStyles.title}>{article.title}</h1>
            <p className={newsDetailStyles.excerpt}>{article.excerpt}</p>
            <MediaFigure
              media={MEDIA[article.mediaId]}
              alt={MEDIA_COPY[article.mediaId].alt}
              caption={MEDIA_COPY[article.mediaId].caption}
              ratio="16/10"
              className={newsDetailStyles.figure}
            />
          </Container>
        </header>
        <Container className={newsDetailStyles.body}>
          {article.body.map((paragraph) => (
            <p key={paragraph} className={newsDetailStyles.paragraph}>
              {paragraph}
            </p>
          ))}
          <TextLink href={ROUTES.news} className={newsDetailStyles.back}>
            {content.backLabel}
          </TextLink>
        </Container>
      </article>
      <Section labelledBy={moreHeadingId}>
        <SectionHeading id={moreHeadingId} title={content.moreNewsTitle} />
        <NewsGrid articles={getOtherNews(article.slug)} />
      </Section>
    </>
  )
}
