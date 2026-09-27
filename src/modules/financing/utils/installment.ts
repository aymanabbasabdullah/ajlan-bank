export interface IInstallmentResult {
  monthly: number
  total: number
  cost: number
}

/** Standard amortized (equal monthly payment) schedule. */
export function calculateInstallment(principal: number, annualRate: number, months: number): IInstallmentResult {
  const monthlyRate = annualRate / 12
  const monthly =
    monthlyRate === 0 ? principal / months : (principal * monthlyRate) / (1 - (1 + monthlyRate) ** -months)
  const total = monthly * months

  return { monthly, total, cost: total - principal }
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}
