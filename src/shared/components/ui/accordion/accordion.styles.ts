export const accordionStyles = {
  list: 'divide-y divide-line border-y border-line',
  item: 'group',
  summary:
    'flex min-h-14 list-none items-center justify-between gap-6 py-5 text-start text-[17px] font-semibold text-ink transition-colors duration-200 hover:text-brand-700 [&::-webkit-details-marker]:hidden',
  icon: 'shrink-0 text-brand-600 transition-transform duration-200 ease-out group-open:rotate-45 motion-reduce:transition-none',
  answer: 'max-w-3xl pb-6 text-body',
} as const
