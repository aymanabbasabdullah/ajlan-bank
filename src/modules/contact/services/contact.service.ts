import type { IContactFormValues } from '../types/contact.types'

export interface IContactSubmission {
  reference: string
}

const SIMULATED_LATENCY_MS = 900

/**
 * Frontend-only stub. Replace the body with a POST to the bank's contact API
 * once it exists; callers depend only on the returned promise shape.
 */
export async function submitContactRequest(values: IContactFormValues): Promise<IContactSubmission> {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS))
  const serial = String(Date.now() % 1_000_000).padStart(6, '0')
  return { reference: `AJ-${values.topic.slice(0, 2).toUpperCase()}-${serial}` }
}
