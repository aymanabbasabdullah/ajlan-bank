export const productDetailStyles = {
  heroIcon: 'mt-8',
  facts: 'grid w-full gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3',
  fact: 'bg-surface p-5',
  factLabel: 'text-sm text-muted',
  factValue: 'mt-1 font-semibold text-ink',

  features: 'grid gap-x-10 gap-y-8 md:grid-cols-2',
  feature: 'flex gap-4',
  featureIcon: 'mt-0.5 shrink-0 text-brand-600',
  featureTitle: 'text-lg leading-[1.5] font-semibold',
  featureText: 'mt-1.5 text-body',

  requirements: 'grid gap-5 lg:grid-cols-2',
} as const
