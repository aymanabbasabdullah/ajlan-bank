export const headerStyles = {
  utility: 'hidden border-b border-line bg-sand-100 text-sm lg:block',
  utilityInner: 'flex h-10 items-center justify-between',
  utilityPhone: 'inline-flex items-center gap-2 font-medium text-sand-700 transition-colors duration-200 hover:text-brand-700',
  utilityList: 'flex items-center gap-6',
  utilityLink: 'text-muted transition-colors duration-200 hover:text-brand-700',

  header:
    'sticky top-0 z-40 border-b border-transparent bg-surface transition-[border-color,box-shadow] duration-200',
  scrolled: 'border-line shadow-xs',
  bar: 'flex h-18 items-center justify-between gap-6',
  nav: 'hidden lg:block',
  navList: 'flex items-center gap-1',
  navLink:
    'relative inline-flex min-h-11 items-center rounded-lg px-3 text-[15px] font-medium text-body transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700',
  navLinkActive:
    'text-brand-700 after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-brand-600',
  actions: 'flex items-center gap-2',
  cta: 'hidden lg:inline-flex',
} as const
