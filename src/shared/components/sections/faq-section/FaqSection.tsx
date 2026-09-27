import { useId } from 'react'
import type { IFaqItem, ISectionHeader } from '@/shared/types'
import { Accordion } from '../../ui/accordion/Accordion'
import { Section } from '../../ui/layout-primitives/Section'
import type { SectionTone } from '../../ui/layout-primitives/layout-primitives.styles'
import { Reveal } from '../../ui/reveal/Reveal'
import { SectionHeading } from '../../ui/section-heading/SectionHeading'
import { faqSectionStyles } from './faq-section.styles'

interface IFaqSectionProps {
  header: ISectionHeader
  items: IFaqItem[]
  tone?: SectionTone
  id?: string
}

export function FaqSection({ header, items, tone = 'canvas', id }: IFaqSectionProps) {
  const headingId = useId()

  return (
    <Section tone={tone} labelledBy={headingId} id={id}>
      <div className={faqSectionStyles.layout}>
        <SectionHeading
          id={headingId}
          title={header.title}
          description={header.description}
          className={faqSectionStyles.heading}
        />
        <Reveal className={faqSectionStyles.content}>
          <Accordion items={items} />
        </Reveal>
      </div>
    </Section>
  )
}
