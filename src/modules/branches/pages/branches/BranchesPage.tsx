import { Seo } from '@/shared/components/layout'
import { CtaBanner, FeaturesSection, PageHero } from '@/shared/components/sections'
import { ROUTES } from '@/shared/constants/routes'
import { heroMediaForPath } from '@/shared/data/media.ar'
import { BRANCHES_CONTENT } from '../../data/branches-page.ar'
import { BranchDirectory } from './components/BranchDirectory'

export function BranchesPage() {
  const content = BRANCHES_CONTENT
  const heroMedia = heroMediaForPath(ROUTES.branches)

  return (
    <>
      <Seo meta={content.seo} breadcrumbs={content.breadcrumbs} />
      <PageHero
        title={content.header.title}
        lead={content.header.lead}
        breadcrumbs={content.breadcrumbs}
        media={heroMedia?.media}
        mediaCopy={heroMedia?.mediaCopy}
      />
      <BranchDirectory />
      <FeaturesSection header={content.facilitiesHeader} items={content.facilities} columns={4} variant="plain" />
      <CtaBanner cta={content.cta} />
    </>
  )
}
