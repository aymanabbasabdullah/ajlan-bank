import { CheckList } from '@/shared/components/sections'
import { Reveal, Section } from '@/shared/components/ui'
import { productDetailStyles } from '../product-detail.styles'

interface IProductRequirementsProps {
  eligibilityTitle: string
  eligibility: string[]
  documentsTitle: string
  documents: string[]
}

export function ProductRequirements({ eligibilityTitle, eligibility, documentsTitle, documents }: IProductRequirementsProps) {
  return (
    <Section tone="sand">
      <Reveal stagger className={productDetailStyles.requirements}>
        <CheckList title={eligibilityTitle} items={eligibility} icon="idCard" />
        <CheckList title={documentsTitle} items={documents} icon="fileText" />
      </Reveal>
    </Section>
  )
}
