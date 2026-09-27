import { Link } from 'react-router'
import { Badge, Card } from '@/shared/components/ui'
import { newsPath } from '@/shared/constants/routes'
import { formatDate } from '@/shared/utils/format'
import type { INewsArticle } from '../../types/news.types'
import { newsCardStyles } from './news-card.styles'

interface INewsCardProps {
  article: INewsArticle
}

export function NewsCard({ article }: INewsCardProps) {
  return (
    <Card as="article" interactive className={newsCardStyles.card}>
      <div className={newsCardStyles.meta}>
        <Badge>{article.category}</Badge>
        <time dateTime={article.date} className={newsCardStyles.date}>
          {formatDate(article.date)}
        </time>
      </div>
      <h3 className={newsCardStyles.title}>
        <Link to={newsPath(article.slug)} className={newsCardStyles.link}>
          {article.title}
        </Link>
      </h3>
      <p className={newsCardStyles.excerpt}>{article.excerpt}</p>
    </Card>
  )
}
