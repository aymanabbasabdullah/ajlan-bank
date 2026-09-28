import { Reveal } from '@/shared/components/ui'
import type { INewsArticle } from '../../types/news.types'
import { NewsCard } from '../news-card/NewsCard'
import { newsGridStyles } from './news-grid.styles'

interface INewsGridProps {
  articles: INewsArticle[]
}

export function NewsGrid({ articles }: INewsGridProps) {
  const [featured, second, third, ...rest] = articles

  return (
    <div>
      {featured && (
        <Reveal className={newsGridStyles.lead}>
          <div className={newsGridStyles.featured}>
            <NewsCard article={featured} featured />
          </div>
          {(second || third) && (
            <div className={newsGridStyles.side}>
              {second && <NewsCard article={second} />}
              {third && <NewsCard article={third} />}
            </div>
          )}
        </Reveal>
      )}
      {rest.length > 0 && (
        <Reveal as="ul" stagger className={newsGridStyles.rest}>
          {rest.map((article) => (
            <li key={article.slug}>
              <NewsCard article={article} />
            </li>
          ))}
        </Reveal>
      )}
    </div>
  )
}
