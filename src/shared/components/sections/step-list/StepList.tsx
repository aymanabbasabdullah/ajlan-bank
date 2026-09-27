import type { IStep } from '@/shared/types'
import { formatNumber } from '@/shared/utils/format'
import { Reveal } from '../../ui/reveal/Reveal'
import { stepListStyles } from './step-list.styles'

interface IStepListProps {
  steps: IStep[]
}

export function StepList({ steps }: IStepListProps) {
  return (
    <Reveal as="ol" stagger className={stepListStyles.list}>
      {steps.map((step, index) => (
        <li key={step.title} className={stepListStyles.item}>
          <span className={stepListStyles.number} aria-hidden>
            {formatNumber(index + 1)}
          </span>
          <h3 className={stepListStyles.title}>{step.title}</h3>
          <p className={stepListStyles.description}>{step.description}</p>
        </li>
      ))}
    </Reveal>
  )
}
