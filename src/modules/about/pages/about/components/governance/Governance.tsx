import { SealCheckIcon } from '@phosphor-icons/react'
import { useId } from 'react'
import { FeatureGrid } from '@/shared/components/sections'
import { Section, SectionHeading } from '@/shared/components/ui'
import { SITE } from '@/shared/data/site.ar'
import type { IFeature, ISectionHeader } from '@/shared/types'
import { governanceStyles as styles } from './governance.styles'

interface IGovernanceProps {
  header: ISectionHeader
  items: IFeature[]
}

export function Governance({ header, items }: IGovernanceProps) {
  const headingId = useId()

  return (
    <Section tone="sand" labelledBy={headingId}>
      <SectionHeading id={headingId} title={header.title} description={header.description} />
      <FeatureGrid items={items} columns={4} variant="plain" />
      <div className={styles.statement}>
        <SealCheckIcon size={24} className={styles.statementIcon} aria-hidden />
        <p>{SITE.legal.regulatorStatement}</p>
      </div>
    </Section>
  )
}
