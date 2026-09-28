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
    cardLink: { label: 'استكشف بطاقات فيزا', href: '#visa-cards' },
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
      mediaId: 'individualsStreet',
      title: 'للأفراد والأسر',
      description: 'حسابات وبطاقات وتمويل شخصي وحوالات تصل أهلك في اليوم نفسه.',
      highlights: [
        { label: 'الحساب الجاري', href: productPath('individuals', 'current-account') },
        { label: 'الودائع لأجل', href: productPath('individuals', 'term-deposits') },
        { label: 'بطاقات فيزا', href: '#visa-cards' },
      ],
      link: { label: 'جميع خدمات الأفراد', href: ROUTES.individuals },
    },
    {
      mediaId: 'businessShop',
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
      mediaId: 'financingWorkshop',
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

  visa: {
    eyebrow: 'إصدار البطاقات',
    title: 'بطاقات فيزا عجلان',
    description: 'أربع بطاقات تغطي يومك وسفرك ومشتريات منشأتك. مرّر لأسفل لتتقارب كل بطاقة وتكشف تفاصيلها.',
    progressLabel: 'البطاقة',
    sampleNote: '',
    cards: [
      {
        tone: 'classic',
        network: 'Visa',
        name: 'فيزا كلاسيك',
        tagline: 'لحسابك اليومي داخل اليمن',
        description:
          'بطاقة خصم مباشر مرتبطة بحسابك للسحب من صرافات البنك والشراء عبر نقاط البيع، مع إيقاف فوري من التطبيق.',
        facts: [
          { label: 'الإصدار', value: 'خلال 3 أيام عمل' },
          { label: 'الرسوم', value: 'مجانية في السنة الأولى' },
          { label: 'الاستخدام', value: 'محلي عبر شبكة فيزا' },
        ],
        highlights: ['سحب على مدار الساعة', 'حدود يومية قابلة للتعديل', 'إيقاف مؤقت من عجلان موبايل'],
        holderLabel: 'حامل البطاقة',
        maskedNumber: '•••• •••• •••• 4417',
        expiryLabel: 'تنتهي',
        expiry: '09/30',
        cta: { label: 'تفاصيل فيزا كلاسيك', href: productPath('individuals', 'debit-card') },
      },
      {
        tone: 'gold',
        network: 'Visa',
        name: 'فيزا الذهبية',
        tagline: 'حدود أعلى وخدمة أولوية',
        description:
          'لبطاقات العملاء الذين يحتاجون سقف شراء أوسع وخدمة أسرع في الفروع، مع تغطية أوسع للعمليات داخل اليمن وخارجه.',
        facts: [
          { label: 'الإصدار', value: 'خلال 5 أيام عمل' },
          { label: 'الحد اليومي', value: 'أعلى من الكلاسيك' },
          { label: 'الخدمة', value: 'أولوية في الفرع ومركز الاتصال' },
        ],
        highlights: ['سقف شراء أعلى', 'خدمة عملاء مخصصة', 'إشعارات فورية لكل عملية'],
        holderLabel: 'حامل البطاقة',
        maskedNumber: '•••• •••• •••• 8802',
        expiryLabel: 'تنتهي',
        expiry: '11/30',
        cta: { label: 'تفاصيل فيزا الذهبية', href: productPath('individuals', 'visa-gold') },
      },
      {
        tone: 'travel',
        network: 'Visa',
        name: 'فيزا مسبقة الدفع',
        tagline: 'للسفر والتسوق الإلكتروني',
        description:
          'بطاقة بالدولار تشحنها بالمبلغ الذي تحتاجه فقط، منفصلة عن حسابك الرئيسي، ومناسبة للدراسة والسفر والشراء عبر الإنترنت.',
        facts: [
          { label: 'العملة', value: 'دولار أمريكي' },
          { label: 'الشحن', value: 'من الفرع أو التطبيق' },
          { label: 'الاستخدام', value: 'دولي وإلكتروني' },
        ],
        highlights: ['إنفاق بحدود الرصيد', 'رمز تحقق لكل شراء إلكتروني', 'بطاقة إضافية لفرد من الأسرة'],
        holderLabel: 'حامل البطاقة',
        maskedNumber: '•••• •••• •••• 1964',
        expiryLabel: 'تنتهي',
        expiry: '03/31',
        cta: { label: 'تفاصيل فيزا مسبقة الدفع', href: productPath('individuals', 'prepaid-card') },
      },
      {
        tone: 'business',
        network: 'Visa',
        name: 'فيزا الأعمال',
        tagline: 'لمصروفات الشركة والمشتريات',
        description:
          'بطاقة مؤسسية بصلاحيات محددة ومدير علاقة يتابع الحدود والتقارير، لتفصل مصروفات العمل عن الحسابات الشخصية.',
        facts: [
          { label: 'الإصدار', value: 'بعد اعتماد المفوضين' },
          { label: 'الصلاحيات', value: 'حسب قرار الشركة' },
          { label: 'التقارير', value: 'كشف شهري بالمصروفات' },
        ],
        highlights: ['حدود لكل موظف مفوّض', 'فصل مصروفات المنشأة', 'إيقاف فوري عند فقدان البطاقة'],
        holderLabel: 'الجهة',
        maskedNumber: '•••• •••• •••• 2271',
        expiryLabel: 'تنتهي',
        expiry: '07/30',
        cta: { label: 'تفاصيل فيزا الأعمال', href: productPath('business', 'visa-business') },
      },
    ],
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
    title: 'نلتقيكم في الفرع، أو نردّ عليكم من الهاتف',
    description: 'اثنا عشر فرعًا في ست محافظات، ومركز الاتصال 8001010 يعمل يوميًا لمساعدتك في اختيار الخدمة.',
    primary: { label: 'اعثر على فرع', href: ROUTES.branches },
    secondary: { label: 'تواصل معنا', href: ROUTES.contact },
  },
}
