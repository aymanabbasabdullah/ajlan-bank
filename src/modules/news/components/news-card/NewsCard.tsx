import { Link } from 'react-router'
import { Badge, Card } from '@/shared/components/ui'
import { MEDIA } from '@/shared/data/media'
import { MEDIA_COPY } from '@/shared/data/media.ar'
import { newsPath } from '@/shared/constants/routes'
import { cn } from '@/shared/utils/cn'
import { formatDate } from '@/shared/utils/format'
import type { INewsArticle } from '../../types/news.types'
import { newsCardStyles } from './news-card.styles'

interface INewsCardProps {
  article: INewsArticle
  featured?: boolean
}

export function NewsCard({ article, featured = false }: INewsCardProps) {
  const media = MEDIA[article.mediaId]
  const copy = MEDIA_COPY[article.mediaId]

  return (
    <Card as="article" interactive className={newsCardStyles.card}>
      <div className={newsCardStyles.photo}>
        <img
          src={media.src}
          alt={copy.alt}
          width={media.width}
          height={media.height}
          loading="lazy"
          decoding="async"
          className={cn(newsCardStyles.image, featured ? newsCardStyles.featuredImage : newsCardStyles.compactImage)}
        />
      </div>
      <div className={newsCardStyles.body}>
        <div className={newsCardStyles.meta}>
          <Badge>{article.category}</Badge>
          <time dateTime={article.date} className={newsCardStyles.date}>
            {formatDate(article.date)}
          </time>
        </div>
        <h3 className={cn(newsCardStyles.title, featured ? newsCardStyles.featuredTitle : newsCardStyles.compactTitle)}>
          <Link to={newsPath(article.slug)} className={newsCardStyles.link}>
            {article.title}
          </Link>
        </h3>
        <p className={newsCardStyles.excerpt}>{article.excerpt}</p>
      </div>
    </Card>
  )
}
