export const phoneMockupStyles = {
  stage: 'relative mx-auto flex w-full max-w-md justify-center py-6 lg:col-span-6',
  backdrop: 'absolute inset-x-6 inset-y-16 rounded-3xl bg-sand-100',
  frame: 'relative w-[270px] rounded-[2.5rem] bg-brand-900 p-2.5 shadow-sm md:w-[290px]',
  screen: 'relative overflow-hidden rounded-[2rem] bg-canvas px-4 pt-9 pb-6',
  notch: 'absolute inset-x-0 top-2.5 mx-auto h-5 w-20 rounded-full bg-brand-900',
  greeting: 'text-sm font-semibold text-ink',

  balanceCard: 'mt-3 flex flex-col rounded-2xl bg-brand-600 p-4 text-white',
  balanceLabel: 'text-xs text-brand-100',
  balance: 'tabular mt-1 text-end text-2xl font-bold',
  account: 'mt-2 text-xs text-brand-100',

  actions: 'mt-4 grid grid-cols-3 gap-2',
  action: 'flex flex-col items-center gap-1.5 rounded-xl border border-line bg-surface py-3 text-xs font-medium text-ink',
  actionIcon: 'text-brand-600',

  recentTitle: 'mt-5 text-xs font-semibold text-muted',
  recent: 'mt-2 space-y-2',
  recentItem: 'flex items-center gap-2.5 rounded-xl border border-line bg-surface p-2.5',
  recentIcon: 'inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-sand-100 text-sand-700',
  recentText: 'flex min-w-0 flex-1 flex-col',
  recentLabel: 'truncate text-xs font-semibold text-ink',
  recentMeta: 'truncate text-[11px] text-muted',
  recentAmount: 'tabular shrink-0 text-xs font-semibold text-ink',
  amountIn: 'text-success',
} as const
