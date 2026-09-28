import { Link } from 'react-router'
import { Card, DirectionalArrow } from '@/shared/components/ui'
import { heroMediaForProduct } from '@/shared/data/media.ar'
import { SITE } from '@/shared/data/site.ar'
import type { IProduct } from '../../types/product.types'
import { getProductHref } from '../../utils/catalog'
import { productCardStyles } from './product-card.styles'

interface IProductCardProps {
  product: IProduct
}

export function ProductCard({ product }: IProductCardProps) {
  const { media, mediaCopy } = heroMediaForProduct(product.slug)

  return (
    <Card as="article" interactive className={productCardStyles.card}>
      <div className={productCardStyles.photo}>
        <img
          src={media.src}
          alt={mediaCopy.alt}
          width={media.width}
          height={media.height}
          loading="lazy"
          decoding="async"
          className={productCardStyles.image}
        />
      </div>
      <div className={productCardStyles.body}>
        <h3 className={productCardStyles.title}>
          <Link to={getProductHref(product)} className={productCardStyles.link}>
            {product.name}
          </Link>
        </h3>
        <p className={productCardStyles.summary}>{product.summary}</p>
        <span aria-hidden className={productCardStyles.more}>
          {SITE.ui.learnMore}
          <DirectionalArrow size={16} className={productCardStyles.arrow} />
        </span>
      </div>
    </Card>
  )
}
