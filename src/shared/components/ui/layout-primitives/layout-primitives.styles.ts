export type SectionTone = 'canvas' | 'sand' | 'surface'
export type SectionSpacing = 'default' | 'compact'

export const layoutPrimitiveStyles = {
  container: 'mx-auto w-full max-w-7xl px-5 md:px-8',
  tone: {
    canvas: 'bg-canvas',
    sand: 'border-y border-line bg-sand-100',
    surface: 'border-y border-line bg-surface',
  } satisfies Record<SectionTone, string>,
  spacing: {
    default: 'py-16 md:py-24',
    compact: 'py-12 md:py-16',
  } satisfies Record<SectionSpacing, string>,
} as const
