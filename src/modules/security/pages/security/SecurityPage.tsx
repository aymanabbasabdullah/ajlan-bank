import { Seo } from '@/shared/components/layout'
import { CtaBanner, FeaturesSection, PageHero, StepsSection } from '@/shared/components/sections'
import { SECURITY_CONTENT } from '../../data/security.ar'
import { NeverAskPanel } from './components/NeverAskPanel'

export function SecurityPage() {
  const content = SECURITY_CONTENT

  return (
    <>
      <Seo meta={content.seo} breadcrumbs={content.breadcrumbs} />
      <PageHero title={content.header.title} lead={content.header.lead} breadcrumbs={content.breadcrumbs} />
      <NeverAskPanel content={content.neverAsk} />
      <FeaturesSection header={content.scamsHeader} items={content.scams} columns={4} tone="sand" />
      <FeaturesSection header={content.tipsHeader} items={content.tips} columns={3} variant="plain" />
      <StepsSection header={content.reportHeader} steps={content.reportSteps} tone="surface" />
      <CtaBanner cta={content.cta} />
    </>
  )
}
