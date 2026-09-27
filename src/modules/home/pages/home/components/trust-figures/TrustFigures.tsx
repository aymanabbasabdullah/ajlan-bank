import { useId } from 'react'
import { StatList } from '@/shared/components/sections'
import { Section, SectionHeading } from '@/shared/components/ui'
import { SITE } from '@/shared/data/site.ar'
import type { ISectionHeader } from '@/shared/types'
import { trustFiguresStyles as styles } from './trust-figures.styles'

interface ITrustFiguresProps {
  header: ISectionHeader
}

export function TrustFigures({ header }: ITrustFiguresProps) {
  const headingId = useId()

  return (
    <Section tone="sand" spacing="compact" labelledBy={headingId}>
      <div className={styles.layout}>
        <SectionHeading id={headingId} title={header.title} description={header.description} className={styles.heading} />
        <div className={styles.figures}>
          <StatList stats={SITE.keyFigures} />
        </div>
      </div>
    </Section>
  )
}
