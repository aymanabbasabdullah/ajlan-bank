export const legalDocumentStyles = {
  updated: 'text-sm text-muted',
  layout: 'grid gap-10 lg:grid-cols-12 lg:gap-16',
  toc: 'self-start rounded-xl border border-line bg-surface p-6 lg:sticky lg:top-28 lg:col-span-4',
  tocTitle: 'text-sm font-semibold text-muted',
  tocList: 'mt-4 space-y-1',
  tocLink:
    'block rounded-md px-2 py-1.5 text-[15px] text-body transition-colors duration-200 hover:bg-sand-100 hover:text-ink',
  body: 'max-w-3xl lg:col-span-8',
  section: 'border-b border-line pb-10 not-first:pt-10',
  sectionTitle: 'text-xl font-semibold',
  number: 'tabular text-brand-500',
  paragraph: 'mt-4 leading-[1.9] text-body',
  list: 'mt-4 list-disc space-y-2 ps-5 leading-[1.8] text-body marker:text-brand-300',
  questions: 'mt-10 rounded-xl bg-brand-50 p-6 text-body',
  questionsTitle: 'text-lg font-semibold',
} as const
