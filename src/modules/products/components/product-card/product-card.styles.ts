export const productCardStyles = {
  card: 'group flex h-full flex-col',
  title: 'mt-5 text-lg leading-[1.5] font-semibold',
  link: 'transition-colors duration-200 after:absolute after:inset-0 after:rounded-xl group-hover:text-brand-700 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-brand-300',
  summary: 'mt-2 flex-1 text-body',
  more: 'mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-700',
  arrow: 'transition-transform duration-200 ease-out group-hover:-translate-x-1 motion-reduce:transition-none',
} as const
