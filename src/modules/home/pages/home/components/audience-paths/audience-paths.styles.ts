export const audiencePathsStyles = {
  layout: 'grid gap-6 lg:grid-cols-12 lg:gap-8',
  featured: 'lg:col-span-7',
  stack: 'grid gap-6 lg:col-span-5',
  tile: 'group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface',
  photo: 'overflow-hidden',
  image: 'aspect-16/10 w-full object-cover transition-transform duration-300 ease-out-soft motion-safe:group-hover:scale-[1.03]',
  compactImage: 'aspect-3/2 w-full object-cover transition-transform duration-300 ease-out-soft motion-safe:group-hover:scale-[1.03]',
  body: 'flex flex-1 flex-col p-6 md:p-8',
  title: 'text-xl leading-[1.4] font-semibold md:text-2xl',
  description: 'mt-2 text-body',
  highlights: 'mt-5 flex-1 space-y-2',
  highlight:
    'block text-[15px] font-medium text-ink transition-colors duration-200 hover:text-brand-700',
  more: 'mt-5',
} as const
