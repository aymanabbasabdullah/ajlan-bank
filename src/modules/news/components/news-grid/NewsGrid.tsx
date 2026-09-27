import { Reveal } from '@/shared/components/ui'
import type { INewsArticle } from '../../types/news.types'
import { NewsCard } from '../news-card/NewsCard'
import { newsGridStyles } from './news-grid.styles'

interface INewsGridProps {
  articles: INewsArticle[]
}

export function NewsGrid({ articles }: INewsGridProps) {
  return (
    <Reveal as="ul" stagger className={newsGridStyles.grid}>
      {articles.map((article) => (
        <li key={article.slug}>
          <NewsCard article={article} />
        </li>
      ))}
    </Reveal>
  )
}
