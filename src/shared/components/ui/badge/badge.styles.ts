export type BadgeTone = 'sand' | 'brand' | 'success'

export const badgeStyles = {
  base: 'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm leading-6 font-medium',
  tone: {
    sand: 'bg-sand-100 text-sand-700',
    brand: 'bg-brand-50 text-brand-700',
    success: 'bg-success-bg text-success',
  } satisfies Record<BadgeTone, string>,
} as const
