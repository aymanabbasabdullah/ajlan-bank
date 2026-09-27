import { useId } from 'react'
import { ButtonLink, Reveal, Section, SectionHeading } from '@/shared/components/ui'
import { cn } from '@/shared/utils/cn'
import { formatCurrency, formatNumber } from '@/shared/utils/format'
import type { ICalculatorContent } from '../../../types/financing.types'
import { useFinancingCalculator } from '../hooks/useFinancingCalculator'
import { financingCalculatorStyles as styles } from './financing-calculator.styles'

interface IFinancingCalculatorProps {
  content: ICalculatorContent
}

export function FinancingCalculator({ content }: IFinancingCalculatorProps) {
  const headingId = useId()
  const programId = useId()
  const amountId = useId()
  const calculator = useFinancingCalculator(content.programs, content.durations)
  const { program, amount, months, result } = calculator

  return (
    <Section tone="surface" labelledBy={headingId} id="calculator">
      <SectionHeading id={headingId} title={content.header.title} description={content.header.description} />

      <Reveal className={styles.layout}>
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <div className={styles.field}>
            <label htmlFor={programId} className={styles.label}>
              {content.programLabel}
            </label>
            <select
              id={programId}
              value={program.id}
              onChange={(event) => calculator.selectProgram(event.target.value)}
              className={styles.select}
            >
              {content.programs.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <div className={styles.labelRow}>
              <label htmlFor={amountId} className={styles.label}>
                {content.amountLabel}
              </label>
              <output htmlFor={amountId} className={styles.amountValue}>
                {formatCurrency(amount)}
              </output>
            </div>
            <input
              id={amountId}
              type="range"
              min={program.minAmount}
              max={program.maxAmount}
              step={program.step}
              value={amount}
              onChange={(event) => calculator.updateAmount(Number(event.target.value))}
              className={styles.range}
            />
            <div className={styles.rangeLimits}>
              <span>{formatNumber(program.minAmount)}</span>
              <span>{formatNumber(program.maxAmount)}</span>
            </div>
          </div>

          <fieldset className={styles.field}>
            <legend className={styles.label}>{content.durationLabel}</legend>
            <div className={styles.durations}>
              {calculator.availableDurations.map((value) => (
                <label key={value} className={cn(styles.duration, value === months && styles.durationActive)}>
                  <input
                    type="radio"
                    name="duration"
                    value={value}
                    checked={value === months}
                    onChange={() => calculator.selectMonths(value)}
                    className={styles.radio}
                  />
                  <span className={styles.durationValue}>{formatNumber(value)}</span> {content.monthsUnit}
                </label>
              ))}
            </div>
          </fieldset>
        </form>

        <div className={styles.result} aria-live="polite">
          <p className={styles.resultLabel}>{content.monthlyLabel}</p>
          <p className={styles.resultValue}>{formatCurrency(result.monthly)}</p>
          <dl className={styles.breakdown}>
            <div className={styles.breakdownRow}>
              <dt>{content.totalLabel}</dt>
              <dd className="tabular">{formatCurrency(result.total)}</dd>
            </div>
            <div className={styles.breakdownRow}>
              <dt>{content.costLabel}</dt>
              <dd className="tabular">{formatCurrency(result.cost)}</dd>
            </div>
            <div className={styles.breakdownRow}>
              <dt>{content.rateLabel}</dt>
              <dd className="tabular">{formatNumber(program.annualRate * 100)}%</dd>
            </div>
          </dl>
          <ButtonLink href={content.cta.href} size="lg" className={styles.cta}>
            {content.cta.label}
          </ButtonLink>
          <p className={styles.disclaimer}>{content.disclaimer}</p>
        </div>
      </Reveal>
    </Section>
  )
}
