export type CardTone = 'surface' | 'tinted' | 'sand'

export const cardStyles = {
  base: 'relative rounded-xl border p-6 md:p-7',
  tone: {
    surface: 'border-line bg-surface',
    tinted: 'border-line bg-sand-100',
    sand: 'border-sand-200 bg-sand-100',
  } satisfies Record<CardTone, string>,
  interactive:
    'transition-[transform,box-shadow,border-color] duration-200 ease-out-soft hover:border-line-strong hover:shadow-xs motion-safe:hover:-translate-y-0.5 focus-within:border-ink',
} as const
