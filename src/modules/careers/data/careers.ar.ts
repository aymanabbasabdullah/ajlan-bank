import { ROUTES } from '@/shared/constants/routes'
import type { ICareersContent } from '../types/careers.types'

const CAREERS_EMAIL = 'careers@ajlanbank.com.ye'

export const CAREERS_CONTENT: ICareersContent = {
  seo: {
    title: 'الوظائف',
    description:
      'انضم إلى فريق بنك عجلان. تعرّف على الوظائف المتاحة في صنعاء وعدن وتعز، وبرنامج الخريجين، ومزايا العمل في البنك، وطريقة التقديم.',
    path: ROUTES.careers,
  },
  header: {
    title: 'ابنِ مسيرتك المهنية معنا',
    lead: 'يعمل في بنك عجلان فريق من الموظفين والموظفات في ست محافظات. نؤمن بأن نجاح البنك يبدأ من فريقه، ونستثمر في تدريبه وتطويره.',
  },
  breadcrumbs: [{ label: 'الوظائف', href: ROUTES.careers }],
  careersEmail: CAREERS_EMAIL,

  benefitsHeader: {
    title: 'لماذا العمل في بنك عجلان؟',
  },
  benefits: [
    {
      icon: 'graduation',
      title: 'تدريب مستمر',
      description: 'برامج تدريبية داخلية وخارجية، ودعم للحصول على الشهادات المهنية المعتمدة.',
    },
    {
      icon: 'chartUp',
      title: 'مسار وظيفي واضح',
      description: 'تقييم أداء سنوي عادل، وأولوية للترقية من داخل البنك.',
    },
    {
      icon: 'shieldCheck',
      title: 'تأمين صحي',
      description: 'تأمين صحي للموظف وأسرته، وتأمينات اجتماعية وفق القانون.',
    },
    {
      icon: 'usersThree',
      title: 'بيئة عمل محترمة',
      description: 'فريق متنوع، وأقسام نسائية، وسياسة واضحة لتكافؤ الفرص.',
    },
  ],

  openingsHeader: {
    title: 'الوظائف المتاحة',
    description: 'آخر تحديث: سبتمبر 2026.',
  },
  labels: {
    department: 'الإدارة',
    location: 'الموقع',
    type: 'نوع الوظيفة',
    reference: 'رقم الوظيفة',
    requirements: 'المتطلبات',
    apply: 'تقدّم لهذه الوظيفة',
    applySubject: (job) => `طلب توظيف: ${job.title} (${job.id})`,
  },

  applyHeader: {
    title: 'كيف تتقدم؟',
    description: 'لا نطلب أي رسوم مقابل التوظيف في أي مرحلة. احذر من أي جهة تطلب ذلك باسم البنك.',
  },
  applySteps: [
    { title: 'أرسل سيرتك الذاتية', description: `راسلنا على ${CAREERS_EMAIL} مع ذكر رقم الوظيفة في عنوان الرسالة.` },
    { title: 'الفرز الأولي', description: 'تراجع إدارة الموارد البشرية الطلبات خلال أسبوعين من إغلاق الإعلان.' },
    { title: 'الاختبار والمقابلة', description: 'نتواصل مع المرشحين المؤهلين لاختبار فني ومقابلة شخصية.' },
    { title: 'العرض الوظيفي', description: 'يُقدَّم العرض بعد استكمال الفحص الطبي والتحقق من المؤهلات.' },
  ],

  cta: {
    title: 'لم تجد وظيفة تناسبك؟',
    description: 'أرسل سيرتك الذاتية وسنحتفظ بها للفرص القادمة المناسبة لتخصصك.',
    primary: { label: 'أرسل سيرتك الذاتية', href: `mailto:${CAREERS_EMAIL}` },
    secondary: { label: 'عن البنك', href: ROUTES.about },
  },
}
