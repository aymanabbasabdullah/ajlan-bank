import { productPath } from '@/shared/constants/routes'
import { BUSINESS_CATALOG } from '../data/business.products.ar'
import { FINANCING_CATALOG } from '../data/financing.products.ar'
import { INDIVIDUALS_CATALOG } from '../data/individuals.products.ar'
import type { IProduct, ISectionCatalog, ProductSection } from '../types/product.types'

const CATALOGS: Record<ProductSection, ISectionCatalog> = {
  individuals: INDIVIDUALS_CATALOG,
  business: BUSINESS_CATALOG,
  financing: FINANCING_CATALOG,
}

export function isProductSection(value: string): value is ProductSection {
  return Object.hasOwn(CATALOGS, value)
}

export function getCatalog(section: ProductSection) {
  return CATALOGS[section]
}

export function getProduct(section: ProductSection, slug: string) {
  return CATALOGS[section].products.find((product) => product.slug === slug)
}

export function getProductsByCategory(section: ProductSection, categoryId: string) {
  return CATALOGS[section].products.filter((product) => product.categoryId === categoryId)
}

export function getFeaturedProducts(perSection = 2) {
  return Object.values(CATALOGS).flatMap((catalog) =>
    catalog.products.filter((product) => product.featured).slice(0, perSection),
  )
}

export function getRelatedProducts(product: IProduct, limit = 3) {
  const siblings = CATALOGS[product.section].products.filter((item) => item.slug !== product.slug)
  const sameCategory = siblings.filter((item) => item.categoryId === product.categoryId)
  const others = siblings.filter((item) => item.categoryId !== product.categoryId)
  return [...sameCategory, ...others].slice(0, limit)
}

export function getProductHref(product: IProduct) {
  return productPath(product.section, product.slug)
}
