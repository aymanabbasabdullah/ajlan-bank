import { useId } from 'react'
import { getFeaturedProducts, ProductGrid } from '@/modules/products'
import { Section, SectionHeading } from '@/shared/components/ui'
import type { ISectionHeader } from '@/shared/types'

interface IFeaturedProductsProps {
  header: ISectionHeader
}

export function FeaturedProducts({ header }: IFeaturedProductsProps) {
  const headingId = useId()

  return (
    <Section tone="sand" labelledBy={headingId}>
      <SectionHeading id={headingId} title={header.title} description={header.description} />
      <ProductGrid products={getFeaturedProducts()} />
    </Section>
  )
}
