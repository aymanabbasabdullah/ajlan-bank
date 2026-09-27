export const aboutStoryStyles = {
  grid: 'grid gap-10 lg:grid-cols-12 lg:gap-16',
  text: 'max-w-2xl lg:col-span-7',
  title: 'text-[26px] leading-[1.35] font-semibold md:text-[32px]',
  paragraph: 'mt-5 text-[17px] leading-[1.9] text-body',
  facts: 'self-start divide-y divide-line rounded-xl border border-line bg-surface px-6 shadow-xs lg:col-span-5',
  fact: 'flex items-center justify-between gap-4 py-4',
  factLabel: 'text-muted',
  factValue: 'font-semibold text-ink',
} as const
