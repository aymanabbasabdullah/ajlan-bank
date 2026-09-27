import { CheckCircleIcon } from '@phosphor-icons/react'
import { useId } from 'react'
import { Reveal, Section, SectionHeading } from '@/shared/components/ui'
import type { IProductFeature } from '../../../types/product.types'
import { productDetailStyles } from '../product-detail.styles'

interface IProductFeaturesProps {
  title: string
  description: string
  features: IProductFeature[]
}

export function ProductFeatures({ title, description, features }: IProductFeaturesProps) {
  const headingId = useId()

  return (
    <Section labelledBy={headingId}>
      <SectionHeading id={headingId} title={title} description={description} />
      <Reveal as="ul" stagger className={productDetailStyles.features}>
        {features.map((feature) => (
          <li key={feature.title} className={productDetailStyles.feature}>
            <CheckCircleIcon size={24} aria-hidden className={productDetailStyles.featureIcon} />
            <div>
              <h3 className={productDetailStyles.featureTitle}>{feature.title}</h3>
              <p className={productDetailStyles.featureText}>{feature.description}</p>
            </div>
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
