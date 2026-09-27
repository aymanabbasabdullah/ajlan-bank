import { Seo } from '@/shared/components/layout'
import { CtaBanner, FeaturesSection, PageHero, StepsSection } from '@/shared/components/sections'
import { CAREERS_CONTENT } from '../../data/careers.ar'
import { JOB_OPENINGS } from '../../data/openings.ar'
import { JobOpenings } from './components/JobOpenings'

export function CareersPage() {
  const content = CAREERS_CONTENT

  return (
    <>
      <Seo meta={content.seo} breadcrumbs={content.breadcrumbs} />
      <PageHero title={content.header.title} lead={content.header.lead} breadcrumbs={content.breadcrumbs} />
      <FeaturesSection header={content.benefitsHeader} items={content.benefits} columns={4} variant="plain" />
      <JobOpenings
        header={content.openingsHeader}
        jobs={JOB_OPENINGS}
        labels={content.labels}
        email={content.careersEmail}
      />
      <StepsSection header={content.applyHeader} steps={content.applySteps} />
      <CtaBanner cta={content.cta} />
    </>
  )
}
