import { Link } from 'react-router'
import { Card, DirectionalArrow, IconTile } from '@/shared/components/ui'
import { SITE } from '@/shared/data/site.ar'
import type { IProduct } from '../../types/product.types'
import { getProductHref } from '../../utils/catalog'
import { productCardStyles } from './product-card.styles'

interface IProductCardProps {
  product: IProduct
}

export function ProductCard({ product }: IProductCardProps) {
  return (
    <Card as="article" interactive className={productCardStyles.card}>
      <IconTile name={product.icon} />
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
    </Card>
  )
}
