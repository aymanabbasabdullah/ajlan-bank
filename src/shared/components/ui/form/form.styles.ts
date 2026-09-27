const control =
  'w-full rounded-lg border border-line-strong bg-surface px-4 text-ink transition-colors duration-200 placeholder:text-muted hover:border-brand-300 focus-visible:border-brand-500 aria-invalid:border-danger'

export const formStyles = {
  label: 'mb-2 block font-medium text-ink',
  optional: 'text-sm font-normal text-muted',
  input: `${control} h-12`,
  select: `${control} h-12`,
  textarea: `${control} min-h-36 resize-y py-3 leading-[1.7]`,
  error: 'mt-2 text-sm font-medium text-danger',
} as const
