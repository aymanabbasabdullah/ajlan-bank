export type FeatureGridColumns = 2 | 3 | 4

export const featureGridStyles = {
  grid: 'grid gap-5 sm:grid-cols-2',
  columns: {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  } satisfies Record<FeatureGridColumns, string>,
  item: {
    cards: 'rounded-xl border border-line bg-surface p-6 shadow-xs md:p-7',
    plain: 'border-t border-line pt-6',
  },
  title: 'mt-5 text-lg leading-[1.5] font-semibold text-ink',
  description: 'mt-2 text-body',
} as const
