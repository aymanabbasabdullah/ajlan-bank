export const timelineStyles = {
  list: 'grid border-s border-line-strong md:grid-cols-2 md:border-s-0 lg:grid-cols-4',
  item: 'relative ps-7 pb-10 md:border-t md:border-line-strong md:ps-0 md:pt-8 md:pe-8',
  dot: 'absolute -start-[5px] top-2 size-2.5 rounded-full bg-brand-500 ring-4 ring-sand-100 md:start-0 md:-top-[5px]',
  year: 'tabular text-sm font-semibold text-brand-600',
  title: 'mt-1 text-lg font-semibold',
  description: 'mt-2 text-body',
} as const
