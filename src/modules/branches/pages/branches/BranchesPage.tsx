import { Seo } from '@/shared/components/layout'
import { CtaBanner, FeaturesSection, PageHero } from '@/shared/components/sections'
import { BRANCHES_CONTENT } from '../../data/branches-page.ar'
import { BranchDirectory } from './components/BranchDirectory'

export function BranchesPage() {
  const content = BRANCHES_CONTENT

  return (
    <>
      <Seo meta={content.seo} breadcrumbs={content.breadcrumbs} />
      <PageHero title={content.header.title} lead={content.header.lead} breadcrumbs={content.breadcrumbs} />
      <BranchDirectory />
      <FeaturesSection header={content.facilitiesHeader} items={content.facilities} columns={4} variant="plain" tone="sand" />
      <CtaBanner cta={content.cta} />
    </>
  )
}
