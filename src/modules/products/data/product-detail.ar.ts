import { ROUTES } from '@/shared/constants/routes'
import type { IProductDetailContent } from '../types/product.types'

export const PRODUCT_DETAIL_CONTENT: IProductDetailContent = {
  factsLabel: 'معلومات أساسية',
  featuresTitle: 'ما الذي تحصل عليه',
  eligibilityTitle: 'شروط الأهلية',
  documentsTitle: 'المستندات المطلوبة',
  faqTitle: 'أسئلة شائعة',
  relatedTitle: 'خدمات ذات صلة',
  notFoundTitle: 'الخدمة غير موجودة',
  cta: {
    title: 'هل ترغب في التقديم أو معرفة التفاصيل؟',
    description: 'تواصل مع فريقنا أو زر أقرب فرع، وسنرشدك إلى الخيار الأنسب والمستندات اللازمة.',
    primary: { label: 'تواصل معنا', href: ROUTES.contact },
    secondary: { label: 'اعثر على فرع', href: ROUTES.branches },
  },
}
