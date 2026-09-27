import { ROUTES, productPath } from '@/shared/constants/routes'
import type { ICta, IFaqItem, ILink, IPageHeader, ISectionHeader, ISeoMeta } from '@/shared/types'

interface IDigitalStrip {
  title: string
  description: string
  features: string[]
  primary: ILink
  storeNote: string
}

interface IIndividualsContent {
  seo: ISeoMeta
  header: IPageHeader
  breadcrumbs: ILink[]
  quickLinks: ILink[]
  digital: IDigitalStrip
  faqHeader: ISectionHeader
  faqs: IFaqItem[]
  cta: ICta
}

export const INDIVIDUALS_CONTENT: IIndividualsContent = {
  seo: {
    title: 'خدمات الأفراد',
    description:
      'حسابات جارية وتوفير وودائع لأجل، وبطاقات، وتمويل شخصي، وحوالات محلية ودولية، وتطبيق عجلان موبايل. تعرّف على خدمات بنك عجلان للأفراد.',
    path: ROUTES.individuals,
  },
  header: {
    title: 'خدمات مصرفية للأفراد والأسر',
    lead: 'من فتح حسابك الأول إلى ادخار مستقبل أبنائك واستلام حوالات أهلك، نقدّم خدمات واضحة الشروط والرسوم تناسب احتياجاتك اليومية.',
  },
  breadcrumbs: [{ label: 'الأفراد', href: ROUTES.individuals }],
  quickLinks: [
    { label: 'الحسابات والودائع', href: '#accounts' },
    { label: 'البطاقات', href: '#cards' },
    { label: 'التمويل الشخصي', href: '#finance' },
    { label: 'الحوالات والخدمات الرقمية', href: '#transfers' },
  ],
  digital: {
    title: 'البنك في هاتفك مع تطبيق عجلان موبايل',
    description:
      'بعد فتح حسابك تدير معاملاتك اليومية من التطبيق: تحويلات، سداد فواتير، وإيقاف البطاقة، مع دخول بالبصمة ورموز تحقق لكل عملية.',
    features: [
      'تحويلات فورية بين حساباتك وإلى عملاء البنك',
      'سداد فواتير الكهرباء والمياه والاتصالات',
      'إيقاف البطاقة وتعديل حدودها بلمسة',
      'كشف حساب لحظي وإشعارات بكل عملية',
    ],
    primary: { label: 'تعرّف على التطبيق', href: productPath('individuals', 'mobile-banking') },
    storeNote: 'متوفر على أندرويد و iOS',
  },
  faqHeader: {
    title: 'أسئلة يطرحها عملاؤنا',
    description: 'إجابات مختصرة عن أكثر ما يسألنا عنه عملاؤنا من الأفراد.',
  },
  faqs: [
    {
      question: 'ما المستندات التي أحتاجها لفتح حساب؟',
      answer: 'البطاقة الشخصية أو جواز السفر ساري المفعول، وإثبات السكن، وصورة شخصية حديثة.',
    },
    {
      question: 'هل يمكنني فتح حساب دون زيارة الفرع؟',
      answer: 'يتطلب فتح الحساب لأول مرة زيارة الفرع للتحقق من الهوية، ثم يمكنك إدارة حسابك بالكامل من التطبيق.',
    },
    {
      question: 'أين أجد جدول الرسوم والعمولات؟',
      answer: 'جدول الرسوم معلن في جميع الفروع، ويمكنك طلب نسخة منه من موظف خدمة العملاء أو عبر مركز الاتصال.',
    },
    {
      question: 'كيف أحدّث بياناتي الشخصية؟',
      answer: 'يمكنك تحديث بياناتك في أي فرع بتقديم وثيقة هوية سارية، ويُطلب ذلك دوريًا وفق تعليمات البنك المركزي اليمني.',
    },
  ],
  cta: {
    title: 'ابدأ بفتح حسابك الجاري اليوم',
    description: 'زر أقرب فرع ومعك بطاقتك الشخصية، وسنفتح حسابك ونصدر بطاقتك خلال أيام.',
    primary: { label: 'تفاصيل الحساب الجاري', href: productPath('individuals', 'current-account') },
    secondary: { label: 'اعثر على فرع', href: ROUTES.branches },
  },
}
