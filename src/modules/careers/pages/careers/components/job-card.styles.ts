export const jobCardStyles = {
  top: 'flex flex-col gap-5 md:flex-row md:items-start md:justify-between',
  text: 'max-w-2xl',
  title: 'text-xl font-semibold',
  meta: 'mt-3 flex flex-wrap gap-2',
  metaItem: 'rounded-md bg-sand-100 px-2.5 py-1 text-[13px] font-medium text-sand-700',
  summary: 'mt-4 text-body',
  apply: 'shrink-0 self-start',
  details: 'group mt-6 border-t border-line pt-4',
  summaryToggle:
    'flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 font-medium text-brand-700 [&::-webkit-details-marker]:hidden',
  caret: 'transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none',
  requirements: 'mt-2 list-disc space-y-2 ps-5 text-body marker:text-brand-300',
  reference: 'tabular rounded-md border border-line px-2.5 py-1 text-[13px] text-muted',
  srOnly: 'sr-only',
} as const
