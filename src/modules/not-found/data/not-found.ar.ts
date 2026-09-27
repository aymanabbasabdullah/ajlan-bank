import { ROUTES } from '@/shared/constants/routes'
import type { ILink, ISeoMeta } from '@/shared/types'

interface INotFoundContent {
  seo: ISeoMeta
  code: string
  title: string
  description: string
  primary: ILink
  suggestionsTitle: string
  suggestions: ILink[]
}

export const NOT_FOUND_CONTENT: INotFoundContent = {
  seo: {
    title: 'الصفحة غير موجودة',
    description: 'تعذّر العثور على الصفحة المطلوبة في موقع بنك عجلان.',
    path: '/404',
  },
  code: '404',
  title: 'لم نعثر على هذه الصفحة',
  description: 'ربما تغيّر عنوان الصفحة أو أُزيلت. يمكنك العودة إلى الرئيسية أو زيارة أحد الأقسام التالية.',
  primary: { label: 'العودة إلى الرئيسية', href: ROUTES.home },
  suggestionsTitle: 'أقسام قد تهمك',
  suggestions: [
    { label: 'خدمات الأفراد', href: ROUTES.individuals },
    { label: 'خدمات الشركات', href: ROUTES.business },
    { label: 'تمويل المشاريع', href: ROUTES.financing },
    { label: 'الفروع والصرافات', href: ROUTES.branches },
    { label: 'تواصل معنا', href: ROUTES.contact },
  ],
}
