import { formStyles } from '@/shared/components/ui'

export const contactFormStyles = {
  form: 'rounded-2xl border border-line bg-surface p-6 shadow-xs md:p-10',
  title: 'text-2xl font-semibold',
  description: 'mt-2 text-muted',
  grid: 'mt-8 grid gap-6 md:grid-cols-2',
  full: 'md:col-span-2',
  ltrInput: `${formStyles.input} text-end`,
  privacy: 'mt-6 flex items-start gap-2 rounded-lg bg-sand-100 p-4 text-sm text-sand-700',
  privacyIcon: 'mt-0.5 shrink-0',
  submitError: 'mt-6 rounded-lg bg-danger-bg p-4 text-sm font-medium text-danger',
  submit: 'mt-8 w-full disabled:cursor-wait disabled:opacity-70 md:w-auto md:min-w-48',
} as const
