import { ROUTES } from '@/shared/constants/routes'
import type { ICta, IFaqItem, ILink, IPageHeader, ISectionHeader, ISeoMeta, IStep } from '@/shared/types'

interface IBusinessContent {
  seo: ISeoMeta
  header: IPageHeader
  breadcrumbs: ILink[]
  quickLinks: ILink[]
  stepsHeader: ISectionHeader
  steps: IStep[]
  faqHeader: ISectionHeader
  faqs: IFaqItem[]
  cta: ICta
}

export const BUSINESS_CONTENT: IBusinessContent = {
  seo: {
    title: 'خدمات الشركات',
    description:
      'حسابات الشركات، وإدارة النقد، والاعتمادات المستندية، وخطابات الضمان، وتوطين الرواتب، ونقاط البيع. حلول بنك عجلان للشركات والمؤسسات في اليمن.',
    path: ROUTES.business,
  },
  header: {
    title: 'حلول مصرفية للشركات والمؤسسات',
    lead: 'نعمل مع التجار والمصانع والمقاولين والمنظمات منذ أكثر من عقدين، ونوفر لكل عميل مؤسسي مدير علاقة يفهم نشاطه ويختصر عليه الإجراءات.',
  },
  breadcrumbs: [{ label: 'الشركات', href: ROUTES.business }],
  quickLinks: [
    { label: 'الحسابات وإدارة النقد', href: '#accounts' },
    { label: 'التجارة الخارجية', href: '#trade' },
    { label: 'خدمات المنشآت', href: '#services' },
  ],
  stepsHeader: {
    title: 'كيف نبدأ العمل معًا',
    description: 'خطوات واضحة من أول لقاء حتى تفعيل الخدمات التي تحتاجها شركتك.',
  },
  steps: [
    { title: 'لقاء تعريفي', description: 'يزوركم مدير العلاقة للتعرف على نشاط الشركة واحتياجاتها المصرفية.' },
    { title: 'فتح الحساب', description: 'نراجع مستندات الشركة ونفتح الحسابات خلال يومي عمل.' },
    { title: 'تصميم الحلول', description: 'نقترح مجموعة الخدمات المناسبة: إدارة النقد، الرواتب، التجارة الخارجية.' },
    { title: 'متابعة مستمرة', description: 'مراجعة دورية للخدمات وتطويرها مع نمو أعمالكم.' },
  ],
  faqHeader: {
    title: 'أسئلة الشركات',
    description: 'ما تحتاج معرفته قبل فتح حساب لشركتك أو طلب خدمة تجارية.',
  },
  faqs: [
    {
      question: 'ما المستندات الأساسية لفتح حساب شركة؟',
      answer: 'السجل التجاري، وعقد التأسيس، والبطاقة الضريبية، وقرار المخولين بالتوقيع مع وثائق هوياتهم.',
    },
    {
      question: 'هل تخدمون المنظمات غير الحكومية؟',
      answer: 'نعم، نفتح حسابات للمنظمات والجمعيات المرخصة ونوفر لها خدمات صرف الرواتب والمدفوعات.',
    },
    {
      question: 'كيف أحصل على مدير علاقة؟',
      answer: 'يُخصص مدير علاقة لكل عميل مؤسسي عند فتح الحساب، ويمكنك طلب لقاء عبر صفحة التواصل.',
    },
  ],
  cta: {
    title: 'تحدّث مع فريق الشركات',
    description: 'اترك بياناتك وسيتواصل معك مدير علاقة خلال يوم عمل لترتيب لقاء في مقر شركتك.',
    primary: { label: 'اطلب لقاء', href: ROUTES.contact },
    secondary: { label: 'حلول التمويل', href: ROUTES.financing },
  },
}
