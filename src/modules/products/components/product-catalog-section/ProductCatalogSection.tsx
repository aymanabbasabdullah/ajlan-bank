import { useId } from 'react'
import { Section, SectionHeading } from '@/shared/components/ui'
import type { IProductCategory, ProductSection } from '../../types/product.types'
import { getProductsByCategory } from '../../utils/catalog'
import { ProductGrid } from '../product-grid/ProductGrid'

interface IProductCatalogSectionProps {
  section: ProductSection
  category: IProductCategory
  tone?: 'canvas' | 'sand'
}

export function ProductCatalogSection({ section, category, tone = 'canvas' }: IProductCatalogSectionProps) {
  const headingId = useId()

  return (
    <Section tone={tone} labelledBy={headingId} id={category.id}>
      <SectionHeading id={headingId} title={category.title} description={category.description} />
      <ProductGrid products={getProductsByCategory(section, category.id)} />
    </Section>
  )
}
