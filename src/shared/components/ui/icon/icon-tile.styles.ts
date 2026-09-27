export type IconTileTone = 'brand' | 'sand' | 'inverse'

export const iconTileStyles = {
  base: 'inline-flex size-12 shrink-0 items-center justify-center rounded-lg',
  tone: {
    brand: 'bg-brand-50 text-brand-600',
    sand: 'bg-sand-100 text-sand-700',
    inverse: 'bg-white/10 text-white',
  } satisfies Record<IconTileTone, string>,
} as const
