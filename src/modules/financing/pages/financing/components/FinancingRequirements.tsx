import { InfoIcon } from '@phosphor-icons/react'
import { CheckList } from '@/shared/components/sections'
import { Reveal, Section } from '@/shared/components/ui'
import type { IFinancingContent } from '../../../types/financing.types'
import { financingPageStyles } from '../financing.styles'

interface IFinancingRequirementsProps {
  requirements: IFinancingContent['requirements']
}

export function FinancingRequirements({ requirements }: IFinancingRequirementsProps) {
  return (
    <Section id="requirements">
      <Reveal stagger className={financingPageStyles.requirements}>
        <CheckList title={requirements.eligibilityTitle} items={requirements.eligibility} icon="checkCircle" />
        <CheckList title={requirements.documentsTitle} items={requirements.documents} icon="fileText" />
      </Reveal>
      <p className={financingPageStyles.note}>
        <InfoIcon size={18} aria-hidden className={financingPageStyles.noteIcon} />
        <span>{requirements.note}</span>
      </p>
    </Section>
  )
}
