import { useId } from 'react'
import type { ISectionHeader, IStep } from '@/shared/types'
import { Section } from '../../ui/layout-primitives/Section'
import type { SectionTone } from '../../ui/layout-primitives/layout-primitives.styles'
import { SectionHeading } from '../../ui/section-heading/SectionHeading'
import { StepList } from '../step-list/StepList'

interface IStepsSectionProps {
  header: ISectionHeader
  steps: IStep[]
  tone?: SectionTone
  id?: string
}

export function StepsSection({ header, steps, tone = 'canvas', id }: IStepsSectionProps) {
  const headingId = useId()

  return (
    <Section tone={tone} labelledBy={headingId} id={id}>
      <SectionHeading id={headingId} title={header.title} description={header.description} />
      <StepList steps={steps} />
    </Section>
  )
}
