import { useId } from 'react'
import { Section, SectionHeading } from '@/shared/components/ui'
import { ProductGrid } from '../../../components/product-grid/ProductGrid'
import type { IProduct } from '../../../types/product.types'

interface IRelatedProductsProps {
  title: string
  products: IProduct[]
}

export function RelatedProducts({ title, products }: IRelatedProductsProps) {
  const headingId = useId()
  if (products.length === 0) return null

  return (
    <Section tone="sand" labelledBy={headingId}>
      <SectionHeading id={headingId} title={title} />
      <ProductGrid products={products} />
    </Section>
  )
}
