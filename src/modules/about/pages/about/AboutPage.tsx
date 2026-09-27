import { useId } from 'react'
import { Seo } from '@/shared/components/layout'
import { CtaBanner, FeaturesSection, PageHero, StatList } from '@/shared/components/sections'
import { Section, SectionHeading } from '@/shared/components/ui'
import { SITE } from '@/shared/data/site.ar'
import { bankJsonLd } from '@/shared/utils/structured-data'
import { ABOUT_CONTENT } from '../../data/about.ar'
import { Governance } from './components/governance/Governance'
import { Leadership } from './components/leadership/Leadership'
import { AboutStory } from './components/story/AboutStory'
import { Timeline } from './components/timeline/Timeline'
import { VisionMission } from './components/vision-mission/VisionMission'

export function AboutPage() {
  const content = ABOUT_CONTENT
  const figuresHeadingId = useId()

  return (
    <>
      <Seo meta={content.seo} jsonLd={[bankJsonLd()]} breadcrumbs={content.breadcrumbs} />
      <PageHero title={content.header.title} lead={content.header.lead} breadcrumbs={content.breadcrumbs} />
      <AboutStory story={content.story} />
      <VisionMission vision={content.vision} mission={content.mission} />
      <FeaturesSection header={content.valuesHeader} items={content.values} columns={4} />
      <Timeline header={content.timelineHeader} milestones={content.timeline} />
      <Section spacing="compact" labelledBy={figuresHeadingId}>
        <SectionHeading id={figuresHeadingId} title={content.figuresHeader.title} />
        <StatList stats={SITE.keyFigures} />
      </Section>
      <Leadership header={content.leadershipHeader} leaders={content.leaders} />
      <Governance header={content.governanceHeader} items={content.governance} />
      <CtaBanner cta={content.cta} />
    </>
  )
}
