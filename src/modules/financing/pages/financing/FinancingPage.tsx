import { ProductCatalog } from '@/modules/products'
import { Seo } from '@/shared/components/layout'
import { AnchorNav, CtaBanner, FaqSection, PageHero, StepsSection } from '@/shared/components/sections'
import { FINANCING_CONTENT } from '../../data/financing.ar'
import { FinancingCalculator } from './components/FinancingCalculator'
import { FinancingRequirements } from './components/FinancingRequirements'

export function FinancingPage() {
  const content = FINANCING_CONTENT

  return (
    <>
      <Seo meta={content.seo} breadcrumbs={content.breadcrumbs} />
      <PageHero title={content.header.title} lead={content.header.lead} breadcrumbs={content.breadcrumbs}>
        <AnchorNav links={content.quickLinks} />
      </PageHero>
      <ProductCatalog section="financing" />
      <FinancingRequirements requirements={content.requirements} />
      <StepsSection header={content.stepsHeader} steps={content.steps} tone="sand" id="steps" />
      <FinancingCalculator content={content.calculator} />
      <FaqSection header={content.faqHeader} items={content.faqs} />
      <CtaBanner cta={content.cta} />
    </>
  )
}
