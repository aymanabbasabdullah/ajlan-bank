import type { IFaqItem } from '@/shared/types'
import type { JsonLd } from '@/shared/utils/structured-data'

export function faqPageJsonLd(items: IFaqItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}
