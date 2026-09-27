export const newsCardStyles = {
  card: 'group flex h-full flex-col',
  meta: 'flex flex-wrap items-center justify-between gap-3',
  date: 'tabular text-sm text-muted',
  title: 'mt-5 text-lg leading-[1.6] font-semibold',
  link: 'transition-colors duration-200 after:absolute after:inset-0 after:rounded-xl group-hover:text-brand-700 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-brand-300',
  excerpt: 'mt-3 flex-1 text-body',
} as const
