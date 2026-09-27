import type { ProductSection } from '../../types/product.types'
import { getCatalog } from '../../utils/catalog'
import { ProductCatalogSection } from '../product-catalog-section/ProductCatalogSection'

interface IProductCatalogProps {
  section: ProductSection
}

/** Renders every category of a section, alternating backgrounds. */
export function ProductCatalog({ section }: IProductCatalogProps) {
  return getCatalog(section).categories.map((category, index) => (
    <ProductCatalogSection
      key={category.id}
      section={section}
      category={category}
      tone={index % 2 === 0 ? 'canvas' : 'sand'}
    />
  ))
}
