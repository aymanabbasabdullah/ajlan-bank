export type CardTone = 'surface' | 'tinted' | 'sand'

export const cardStyles = {
  base: 'relative rounded-xl border p-6 md:p-7',
  tone: {
    surface: 'border-line bg-surface shadow-xs',
    tinted: 'border-brand-100 bg-brand-50',
    sand: 'border-sand-200 bg-sand-100',
  } satisfies Record<CardTone, string>,
  interactive:
    'transition-[transform,box-shadow,border-color] duration-200 ease-out-soft hover:border-brand-200 hover:shadow-hover motion-safe:hover:-translate-y-0.5 focus-within:border-brand-200',
} as const
