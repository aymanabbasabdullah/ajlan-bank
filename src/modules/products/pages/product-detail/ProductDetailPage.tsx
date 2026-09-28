import { useParams } from 'react-router'
import { NotFoundPage } from '@/modules/not-found'
import { Seo } from '@/shared/components/layout'
import { CtaBanner, FaqSection, PageHero } from '@/shared/components/sections'
import { VisaCardFace } from '@/shared/components/ui'
import { heroMediaForProduct } from '@/shared/data/media.ar'
import { getVisaCardVisual } from '@/shared/data/visa-cards.ar'
import { PRODUCT_DETAIL_CONTENT } from '../../data/product-detail.ar'
import { getCatalog, getProduct, getProductHref, getRelatedProducts, isProductSection } from '../../utils/catalog'
import { ProductFacts } from './components/ProductFacts'
import { ProductFeatures } from './components/ProductFeatures'
import { ProductRequirements } from './components/ProductRequirements'
import { RelatedProducts } from './components/RelatedProducts'
import { productDetailStyles as styles } from './product-detail.styles'

export function ProductDetailPage() {
  const { section = '', slug = '' } = useParams()
  const product = isProductSection(section) ? getProduct(section, slug) : undefined

  if (!product) return <NotFoundPage />

  const content = PRODUCT_DETAIL_CONTENT
  const catalog = getCatalog(product.section)
  const path = getProductHref(product)
  const breadcrumbs = [
    { label: catalog.label, href: catalog.path },
    { label: product.name, href: path },
  ]
  const visa = getVisaCardVisual(product.slug)
  const heroMedia = visa ? undefined : heroMediaForProduct(product.slug)

  return (
    <>
      <Seo meta={{ title: product.name, description: product.summary, path }} breadcrumbs={breadcrumbs} />
      <PageHero
        title={product.name}
        lead={product.summary}
        breadcrumbs={breadcrumbs}
        media={heroMedia?.media}
        mediaCopy={heroMedia?.mediaCopy}
        aside={
          visa ? (
            <div className={styles.visaStage}>
              <div className={styles.visaDeck} role="img" aria-label={content.cardModelLabel}>
                <VisaCardFace card={visa} />
              </div>
            </div>
          ) : undefined
        }
      >
        <ProductFacts label={content.factsLabel} facts={product.facts} />
      </PageHero>
      <ProductFeatures title={content.featuresTitle} description={product.description} features={product.features} />
      <ProductRequirements
        eligibilityTitle={content.eligibilityTitle}
        eligibility={product.eligibility}
        documentsTitle={content.documentsTitle}
        documents={product.documents}
      />
      <FaqSection header={{ title: content.faqTitle }} items={product.faqs} />
      <RelatedProducts title={content.relatedTitle} products={getRelatedProducts(product)} />
      <CtaBanner cta={content.cta} />
    </>
  )
}
