import { NEWS_ARTICLES } from '../data/articles.ar'

const SORTED_ARTICLES = [...NEWS_ARTICLES].sort((a, b) => b.date.localeCompare(a.date))

export function getAllNews() {
  return SORTED_ARTICLES
}

export function getLatestNews(limit = 3) {
  return SORTED_ARTICLES.slice(0, limit)
}

export function getNewsBySlug(slug: string) {
  return SORTED_ARTICLES.find((article) => article.slug === slug)
}

export function getOtherNews(slug: string, limit = 3) {
  return SORTED_ARTICLES.filter((article) => article.slug !== slug).slice(0, limit)
}
