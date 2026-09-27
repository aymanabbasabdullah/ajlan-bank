import type { IProductFact } from '../../../types/product.types'
import { productDetailStyles } from '../product-detail.styles'

interface IProductFactsProps {
  label: string
  facts: IProductFact[]
}

export function ProductFacts({ label, facts }: IProductFactsProps) {
  return (
    <dl aria-label={label} className={productDetailStyles.facts}>
      {facts.map((fact) => (
        <div key={fact.label} className={productDetailStyles.fact}>
          <dt className={productDetailStyles.factLabel}>{fact.label}</dt>
          <dd className={productDetailStyles.factValue}>{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}
