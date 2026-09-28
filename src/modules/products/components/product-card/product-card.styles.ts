export const productCardStyles = {
  card: 'group flex h-full flex-col overflow-hidden p-0 md:p-0',
  photo: 'overflow-hidden bg-sand-100',
  image: 'aspect-3/2 w-full object-cover transition-transform duration-300 ease-out-soft motion-safe:group-hover:scale-[1.03]',
  body: 'flex flex-1 flex-col p-6 md:p-7',
  title: 'text-lg leading-[1.5] font-semibold',
  link: 'transition-colors duration-200 after:absolute after:inset-0 after:rounded-xl group-hover:text-brand-700 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-brand-300',
  summary: 'mt-2 flex-1 text-body',
  more: 'mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-700',
  arrow: 'transition-transform duration-200 ease-out group-hover:-translate-x-1 motion-reduce:transition-none',
} as const
