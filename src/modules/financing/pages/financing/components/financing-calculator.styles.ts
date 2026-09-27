export const financingCalculatorStyles = {
  layout: 'grid overflow-hidden rounded-2xl border border-line bg-surface shadow-xs lg:grid-cols-12',
  form: 'space-y-8 p-6 md:p-10 lg:col-span-7',
  field: 'min-w-0',
  labelRow: 'flex flex-wrap items-baseline justify-between gap-2',
  label: 'mb-3 block font-medium text-ink',
  select:
    'h-12 w-full rounded-lg border border-line-strong bg-surface px-4 text-ink transition-colors duration-200 hover:border-brand-300 focus-visible:border-brand-500',
  amountValue: 'tabular mb-3 text-lg font-semibold text-brand-700',
  range: 'h-2 w-full cursor-pointer accent-brand-600',
  rangeLimits: 'tabular mt-2 flex justify-between text-sm text-muted',
  durations: 'flex flex-wrap gap-2',
  duration:
    'inline-flex min-h-11 cursor-pointer items-center gap-1 rounded-full border border-line-strong bg-surface px-4 text-[15px] font-medium text-body transition-colors duration-200 hover:border-brand-300 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand-300',
  durationActive: 'border-brand-600 bg-brand-600 text-white hover:border-brand-600',
  radio: 'sr-only',
  durationValue: 'tabular',

  result: 'flex flex-col border-t border-line bg-brand-50 p-6 md:p-10 lg:col-span-5 lg:border-t-0 lg:border-s',
  resultLabel: 'font-medium text-brand-700',
  resultValue: 'tabular mt-2 text-[34px] leading-tight font-bold text-brand-900 md:text-[40px]',
  breakdown: 'mt-8 divide-y divide-brand-100 border-y border-brand-100',
  breakdownRow: 'flex items-center justify-between gap-4 py-3.5 text-body [&>dd]:font-semibold [&>dd]:text-ink',
  cta: 'mt-8 w-full',
  disclaimer: 'mt-5 text-sm leading-[1.7] text-muted',
} as const
