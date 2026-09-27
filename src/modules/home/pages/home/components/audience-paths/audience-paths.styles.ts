export const audiencePathsStyles = {
  grid: 'grid gap-5 lg:grid-cols-3',
  card: 'flex h-full flex-col',
  title: 'mt-5 text-xl leading-[1.5] font-semibold',
  description: 'mt-2 text-body',
  highlights: 'mt-6 flex-1 divide-y divide-line border-y border-line',
  highlight:
    'group/item flex min-h-12 items-center justify-between gap-3 py-2 font-medium text-ink transition-colors duration-200 hover:text-brand-700',
  highlightArrow:
    'text-muted transition-transform duration-200 group-hover/item:-translate-x-1 group-hover/item:text-brand-600 motion-reduce:transition-none',
  more: 'mt-4',
} as const
