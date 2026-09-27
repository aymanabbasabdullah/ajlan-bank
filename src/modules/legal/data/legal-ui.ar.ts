import { SITE } from '@/shared/data/site.ar'
import type { ILegalUiStrings } from '../types/legal.types'

export const LEGAL_UI: ILegalUiStrings = {
  tocLabel: 'محتويات الصفحة',
  updatedLabel: 'آخر تحديث',
  questionsTitle: 'لديك سؤال؟',
  questionsText: `راسلنا على ${SITE.contact.email} أو اتصل على ${SITE.contact.callCenter}.`,
}
