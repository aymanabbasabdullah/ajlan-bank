import { ROUTES } from '@/shared/constants/routes'
import type { INewsContent } from '../types/news.types'

export const NEWS_CONTENT: INewsContent = {
  seo: {
    title: 'المركز الإعلامي',
    description: 'آخر أخبار بنك عجلان: افتتاح الفروع، والخدمات الجديدة، وبرامج التمويل، ومبادرات المسؤولية المجتمعية.',
    path: ROUTES.news,
  },
  header: {
    title: 'المركز الإعلامي',
    lead: 'أخبار البنك وإعلاناته الرسمية ومبادراته في المجتمع.',
  },
  breadcrumbs: [{ label: 'المركز الإعلامي', href: ROUTES.news }],
  publishedLabel: 'تاريخ النشر',
  backLabel: 'العودة إلى جميع الأخبار',
  moreNewsTitle: 'أخبار أخرى',
}
