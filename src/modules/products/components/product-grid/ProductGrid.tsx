import { Reveal } from '@/shared/components/ui'
import type { IProduct } from '../../types/product.types'
import { ProductCard } from '../product-card/ProductCard'
import { productGridStyles } from './product-grid.styles'

interface IProductGridProps {
  products: IProduct[]
}

export function ProductGrid({ products }: IProductGridProps) {
  return (
    <Reveal as="ul" stagger className={productGridStyles.grid}>
      {products.map((product) => (
        <li key={`${product.section}-${product.slug}`}>
          <ProductCard product={product} />
        </li>
      ))}
    </Reveal>
  )
}
