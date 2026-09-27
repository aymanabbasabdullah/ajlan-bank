import { ROUTES, productPath } from '@/shared/constants/routes'
import type { IHomeContent } from '../types/home.types'

export const HOME_CONTENT: IHomeContent = {
  seo: {
    title: 'شريككم المصرفي منذ 2004',
    description:
      'بنك عجلان بنك يمني يقدم حسابات وبطاقات وحوالات للأفراد، وحلولًا مصرفية للشركات، وبرامج لتمويل المشاريع، عبر 12 فرعًا في ست محافظات وتحت رقابة البنك المركزي اليمني.',
    path: ROUTES.home,
  },

  hero: {
    title: 'خدمات مصرفية واضحة تبني الثقة مع كل معاملة',
    lead: 'منذ عام 2004 نرافق الأفراد والأسر والشركات في اليمن بحسابات وتمويلات وحوالات بشروط معلنة وخدمة تعرف احتياجاتك.',
    primary: { label: 'افتح حسابك', href: productPath('individuals', 'current-account') },
    secondary: { label: 'حلول تمويل المشاريع', href: ROUTES.financing },
    trustNote: 'مرخّص من البنك المركزي اليمني ويخضع لرقابته',
    card: {
      bankName: 'بنك عجلان',
      type: 'بطاقة خصم مباشر',
      maskedNumber: '•••• •••• •••• 2048',
      expiry: '09/29',
    },
    activity: {
      title: 'آخر العمليات',
      items: [
        { icon: 'transfer', label: 'حوالة واردة', meta: 'من الرياض', amount: '+ 250,000 ر.ي', direction: 'in' },
        { icon: 'receipt', label: 'فاتورة الكهرباء', meta: 'سداد عبر التطبيق', amount: '− 18,400 ر.ي', direction: 'out' },
        { icon: 'piggyBank', label: 'عائد التوفير', meta: 'الربع الثالث', amount: '+ 12,750 ر.ي', direction: 'in' },
      ],
    },
  },

  trustHeader: {
    title: 'أكثر من عقدين في خدمة الاقتصاد اليمني',
    description: 'نمو ثابت قائم على الالتزام والشفافية وقرب فروعنا من عملائنا.',
  },

  pathsHeader: {
    title: 'ماذا تبحث عنه اليوم؟',
    description: 'اختر المسار الأقرب إليك لتصل إلى الخدمات التي تحتاجها مباشرة.',
  },
  paths: [
    {
      icon: 'users',
      title: 'للأفراد والأسر',
      description: 'حسابات وبطاقات وتمويل شخصي وحوالات تصل أهلك في اليوم نفسه.',
      highlights: [
        { label: 'الحساب الجاري', href: productPath('individuals', 'current-account') },
        { label: 'الودائع لأجل', href: productPath('individuals', 'term-deposits') },
        { label: 'الحوالات المحلية والدولية', href: productPath('individuals', 'remittances') },
      ],
      link: { label: 'جميع خدمات الأفراد', href: ROUTES.individuals },
    },
    {
      icon: 'buildings',
      title: 'للشركات والمؤسسات',
      description: 'حسابات مؤسسية وتجارة خارجية وتوطين رواتب ونقاط بيع مع مدير علاقة مخصص.',
      highlights: [
        { label: 'حسابات الشركات', href: productPath('business', 'corporate-accounts') },
        { label: 'الاعتمادات المستندية', href: productPath('business', 'letters-of-credit') },
        { label: 'توطين الرواتب', href: productPath('business', 'payroll') },
      ],
      link: { label: 'جميع خدمات الشركات', href: ROUTES.business },
    },
    {
      icon: 'chartUp',
      title: 'لأصحاب المشاريع',
      description: 'برامج تمويل للمنشآت الصغيرة والمتوسطة ورواد الأعمال والمعدات والمشاريع الكبرى.',
      highlights: [
        { label: 'تمويل المنشآت الصغيرة والمتوسطة', href: productPath('financing', 'sme-financing') },
        { label: 'تمويل رواد الأعمال', href: productPath('financing', 'entrepreneurs') },
        { label: 'تمويل المعدات والآلات', href: productPath('financing', 'equipment-financing') },
      ],
      link: { label: 'برامج التمويل وحاسبة القسط', href: ROUTES.financing },
    },
  ],

  featuredHeader: {
    title: 'خدمات يختارها عملاؤنا',
    description: 'أكثر خدماتنا طلبًا من الأفراد والشركات وأصحاب المشاريع.',
  },

  digital: {
    title: 'البنك في هاتفك مع تطبيق عجلان موبايل',
    description: 'تابع حساباتك وأنجز معاملاتك اليومية من أي مكان، مع حماية بالبصمة ورموز تحقق لكل عملية.',
    features: [
      'تحويلات فورية بين حساباتك وإلى عملاء البنك',
      'سداد فواتير الكهرباء والمياه والاتصالات',
      'إيقاف البطاقة وتعديل حدودها بلمسة',
      'كشف حساب لحظي وإشعارات بكل عملية',
    ],
    primary: { label: 'تعرّف على التطبيق', href: productPath('individuals', 'mobile-banking') },
    storeNote: 'متوفر على أندرويد و iOS',
    phone: {
      greeting: 'صباح الخير',
      balanceLabel: 'الرصيد المتاح',
      balance: '1,240,500 ر.ي',
      accountLabel: 'الحساب الجاري • 4417',
      actions: [
        { icon: 'transfer', label: 'تحويل' },
        { icon: 'receipt', label: 'فواتير' },
        { icon: 'creditCard', label: 'بطاقاتي' },
      ],
      recentTitle: 'العمليات الأخيرة',
      recent: [
        { icon: 'storefront', label: 'مركز التسوق', meta: 'نقطة بيع', amount: '− 32,000', direction: 'out' },
        { icon: 'transfer', label: 'تحويل وارد', meta: 'حساب داخلي', amount: '+ 150,000', direction: 'in' },
      ],
    },
  },

  valuesHeader: {
    title: 'لماذا يختار العملاء بنك عجلان',
    description: 'مبادئ نلتزم بها في كل فرع وكل معاملة.',
  },
  values: [
    {
      icon: 'shieldCheck',
      title: 'رقابة والتزام',
      description: 'نعمل تحت رقابة البنك المركزي اليمني ونطبّق أنظمة مكافحة غسل الأموال بصرامة.',
    },
    {
      icon: 'receipt',
      title: 'رسوم معلنة',
      description: 'جدول الرسوم متاح في كل فرع، ولا نضيف رسومًا لم تُعلن لك مسبقًا.',
    },
    {
      icon: 'mapPin',
      title: 'قريبون منك',
      description: 'اثنا عشر فرعًا وثمانية وثلاثون صرافًا آليًا في ست محافظات يمنية.',
    },
    {
      icon: 'headset',
      title: 'خدمة تفهمك',
      description: 'موظفون يشرحون لك الخيارات بلغة واضحة، ومركز اتصال يرد على استفساراتك.',
    },
  ],

  newsHeader: {
    title: 'آخر الأخبار',
    description: 'إعلانات البنك ومبادراته وخدماته الجديدة.',
  },
  newsLink: { label: 'جميع الأخبار', href: ROUTES.news },

  cta: {
    title: 'زر أقرب فرع أو تحدّث معنا',
    description: 'فريقنا جاهز للإجابة عن أسئلتك ومساعدتك في اختيار الخدمة المناسبة.',
    primary: { label: 'اعثر على فرع', href: ROUTES.branches },
    secondary: { label: 'تواصل معنا', href: ROUTES.contact },
  },
}
