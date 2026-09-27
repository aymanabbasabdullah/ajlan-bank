import { ROUTES } from '@/shared/constants/routes'
import type { IFaqContent } from '../types/faq.types'

export const FAQ_CONTENT: IFaqContent = {
  seo: {
    title: 'الأسئلة الشائعة',
    description:
      'إجابات عن أكثر الأسئلة شيوعًا حول حسابات بنك عجلان وبطاقاته وتمويله وحوالاته وتطبيق عجلان موبايل والأمان المصرفي.',
    path: ROUTES.faq,
  },
  header: {
    title: 'الأسئلة الشائعة',
    lead: 'جمعنا هنا إجابات أكثر ما يسألنا عنه عملاؤنا. إن لم تجد إجابة سؤالك، فريق مركز الاتصال جاهز لمساعدتك.',
  },
  breadcrumbs: [{ label: 'الأسئلة الشائعة', href: ROUTES.faq }],
  cta: {
    title: 'لم تجد إجابة سؤالك؟',
    description: 'تواصل معنا وسيجيبك أحد موظفينا في أقرب وقت.',
    primary: { label: 'تواصل معنا', href: ROUTES.contact },
    secondary: { label: 'الفروع والصرافات', href: ROUTES.branches },
  },
}
