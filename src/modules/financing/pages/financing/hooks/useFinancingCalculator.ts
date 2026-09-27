import { useState } from 'react'
import type { ICalculatorProgram } from '../../../types/financing.types'
import { calculateInstallment, clamp } from '../../../utils/installment'

const DEFAULT_MONTHS = 24

function initialAmount(program: ICalculatorProgram) {
  const midpoint = (program.minAmount + program.maxAmount) / 4
  return Math.round(midpoint / program.step) * program.step
}

export function useFinancingCalculator(programs: ICalculatorProgram[], durations: number[]) {
  const [programId, setProgramId] = useState(programs[0].id)
  const program = programs.find((item) => item.id === programId) ?? programs[0]

  const [amount, setAmount] = useState(() => initialAmount(program))
  const [months, setMonths] = useState(Math.min(DEFAULT_MONTHS, program.maxMonths))

  const availableDurations = durations.filter((value) => value <= program.maxMonths)

  const selectProgram = (id: string) => {
    const next = programs.find((item) => item.id === id)
    if (!next) return
    setProgramId(next.id)
    setAmount((current) => clamp(current, next.minAmount, next.maxAmount))
    setMonths((current) => Math.min(current, next.maxMonths))
  }

  const updateAmount = (value: number) => setAmount(clamp(value, program.minAmount, program.maxAmount))

  return {
    program,
    amount,
    months,
    availableDurations,
    result: calculateInstallment(amount, program.annualRate, months),
    selectProgram,
    updateAmount,
    selectMonths: setMonths,
  }
}
