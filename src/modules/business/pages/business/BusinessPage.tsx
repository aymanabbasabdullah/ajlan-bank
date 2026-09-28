import { ProductCatalog } from '@/modules/products'
import { Seo } from '@/shared/components/layout'
import { AnchorNav, CtaBanner, FaqSection, PageHero, StepsSection } from '@/shared/components/sections'
import { ROUTES } from '@/shared/constants/routes'
import { heroMediaForPath } from '@/shared/data/media.ar'
import { BUSINESS_CONTENT } from '../../data/business.ar'

export function BusinessPage() {
  const content = BUSINESS_CONTENT
  const heroMedia = heroMediaForPath(ROUTES.business)

  return (
    <>
      <Seo meta={content.seo} breadcrumbs={content.breadcrumbs} />
      <PageHero
        title={content.header.title}
        lead={content.header.lead}
        breadcrumbs={content.breadcrumbs}
        media={heroMedia?.media}
        mediaCopy={heroMedia?.mediaCopy}
      >
        <AnchorNav links={content.quickLinks} />
      </PageHero>
      <ProductCatalog section="business" />
      <StepsSection header={content.stepsHeader} steps={content.steps} tone="surface" />
      <FaqSection header={content.faqHeader} items={content.faqs} />
      <CtaBanner cta={content.cta} />
    </>
  )
}
