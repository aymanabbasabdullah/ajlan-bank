export const mobileNavStyles = {
  trigger:
    'inline-flex size-11 items-center justify-center rounded-lg border border-line text-ink transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700 lg:hidden',
  dialog:
    'm-0 ms-0 me-auto h-dvh max-h-none w-full max-w-sm overflow-y-auto bg-surface p-0 text-body shadow-sm',
  panel: 'flex min-h-full flex-col px-5 py-4',
  top: 'flex items-center justify-between border-b border-line pb-4',
  close:
    'inline-flex size-11 items-center justify-center rounded-lg text-ink transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700',
  nav: 'flex-1 py-6',
  mainList: 'space-y-1',
  mainLink:
    'flex min-h-12 items-center rounded-lg px-3 text-lg font-semibold text-ink transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700',
  mainLinkActive: 'bg-brand-50 text-brand-700',
  utilityList: 'mt-6 grid grid-cols-2 gap-1 border-t border-line pt-6',
  utilityLink:
    'flex min-h-11 items-center rounded-lg px-3 text-[15px] text-muted transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700',
  footer: 'space-y-3 border-t border-line pt-5',
  cta: 'w-full',
  phone: 'flex min-h-11 items-center justify-center gap-2 font-medium text-sand-700',
} as const
