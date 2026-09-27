import { useId } from 'react'
import { Reveal, Section, SectionHeading } from '@/shared/components/ui'
import type { ISectionHeader } from '@/shared/types'
import type { IMilestone } from '../../../../types/about.types'
import { timelineStyles as styles } from './timeline.styles'

interface ITimelineProps {
  header: ISectionHeader
  milestones: IMilestone[]
}

export function Timeline({ header, milestones }: ITimelineProps) {
  const headingId = useId()

  return (
    <Section tone="sand" labelledBy={headingId}>
      <SectionHeading id={headingId} title={header.title} description={header.description} />
      <Reveal as="ol" stagger className={styles.list}>
        {milestones.map((milestone) => (
          <li key={milestone.year} className={styles.item}>
            <span className={styles.dot} />
            <span className={styles.year}>{milestone.year}</span>
            <h3 className={styles.title}>{milestone.title}</h3>
            <p className={styles.description}>{milestone.description}</p>
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
