import { useId } from 'react'
import type { IFeature, ISectionHeader } from '@/shared/types'
import { Section } from '../../ui/layout-primitives/Section'
import type { SectionTone } from '../../ui/layout-primitives/layout-primitives.styles'
import { SectionHeading } from '../../ui/section-heading/SectionHeading'
import { FeatureGrid } from '../feature-grid/FeatureGrid'
import type { FeatureGridColumns } from '../feature-grid/feature-grid.styles'

interface IFeaturesSectionProps {
  header: ISectionHeader
  items: IFeature[]
  columns?: FeatureGridColumns
  variant?: 'cards' | 'plain'
  tone?: SectionTone
  id?: string
}

export function FeaturesSection({ header, items, columns, variant, tone = 'canvas', id }: IFeaturesSectionProps) {
  const headingId = useId()

  return (
    <Section tone={tone} labelledBy={headingId} id={id}>
      <SectionHeading id={headingId} title={header.title} description={header.description} />
      <FeatureGrid items={items} columns={columns} variant={variant} />
    </Section>
  )
}
