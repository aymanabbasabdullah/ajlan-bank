import { newsPath } from '@/shared/constants/routes'
import { SITE_URL } from '@/shared/constants/site'
import { SITE } from '@/shared/data/site.ar'
import type { JsonLd } from '@/shared/utils/structured-data'
import type { INewsArticle } from '../types/news.types'

export function newsArticleJsonLd(article: INewsArticle): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    datePublished: article.date,
    description: article.excerpt,
    mainEntityOfPage: `${SITE_URL}${newsPath(article.slug)}`,
    publisher: { '@type': 'BankOrCreditUnion', name: SITE.brand.name },
  }
}
