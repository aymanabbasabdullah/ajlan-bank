import { ProductCatalog } from '@/modules/products'
import { Seo } from '@/shared/components/layout'
import { AnchorNav, CtaBanner, FaqSection, PageHero, StepsSection } from '@/shared/components/sections'
import { ROUTES } from '@/shared/constants/routes'
import { heroMediaForPath } from '@/shared/data/media.ar'
import { FINANCING_CONTENT } from '../../data/financing.ar'
import { FinancingCalculator } from './components/FinancingCalculator'
import { FinancingRequirements } from './components/FinancingRequirements'

export function FinancingPage() {
  const content = FINANCING_CONTENT
  const heroMedia = heroMediaForPath(ROUTES.financing)

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
      <ProductCatalog section="financing" />
      <FinancingRequirements requirements={content.requirements} />
      <StepsSection header={content.stepsHeader} steps={content.steps} id="steps" />
      <FinancingCalculator content={content.calculator} />
      <FaqSection header={content.faqHeader} items={content.faqs} />
      <CtaBanner cta={content.cta} />
    </>
  )
}
