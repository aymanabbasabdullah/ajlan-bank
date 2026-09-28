import { ProductCatalog } from '@/modules/products'
import { Seo } from '@/shared/components/layout'
import { AnchorNav, CtaBanner, FaqSection, PageHero } from '@/shared/components/sections'
import { ROUTES } from '@/shared/constants/routes'
import { heroMediaForPath } from '@/shared/data/media.ar'
import { INDIVIDUALS_CONTENT } from '../../data/individuals.ar'
import { DigitalStrip } from './components/DigitalStrip'

export function IndividualsPage() {
  const content = INDIVIDUALS_CONTENT
  const heroMedia = heroMediaForPath(ROUTES.individuals)

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
      <ProductCatalog section="individuals" />
      <DigitalStrip digital={content.digital} />
      <FaqSection header={content.faqHeader} items={content.faqs} />
      <CtaBanner cta={content.cta} />
    </>
  )
}
