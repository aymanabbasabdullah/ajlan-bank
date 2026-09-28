import { ROUTES, productPath } from '@/shared/constants/routes'
import type { ISiteContent } from '@/shared/types'

const FOUNDED_YEAR = 2004

// Placeholder values: license, registration, SWIFT, phone numbers, and key figures
// must be replaced with the bank's verified values before launch.
export const SITE: ISiteContent = {
  brand: {
    name: 'بنك عجلان',
    latinName: 'Ajlan Bank',
    tagline: 'شريككم المصرفي منذ 2004',
    description:
      'بنك عجلان بنك يمني يقدّم منذ عام 2004 حسابات وبطاقات وحوالات وحلول تمويل للأفراد والشركات والمشاريع، عبر شبكة فروع في ست محافظات وتحت رقابة البنك المركزي اليمني.',
    foundedYear: FOUNDED_YEAR,
  },

  mainNav: [
    { label: 'الأفراد', href: ROUTES.individuals },
    { label: 'الشركات', href: ROUTES.business },
    { label: 'تمويل المشاريع', href: ROUTES.financing },
    { label: 'عن البنك', href: ROUTES.about },
    { label: 'الفروع والصرافات', href: ROUTES.branches },
    { label: 'تواصل معنا', href: ROUTES.contact },
  ],

  utilityNav: [
    { label: 'التوعية الأمنية', href: ROUTES.security },
    { label: 'المركز الإعلامي', href: ROUTES.news },
    { label: 'الوظائف', href: ROUTES.careers },
    { label: 'الأسئلة الشائعة', href: ROUTES.faq },
  ],

  headerCta: { label: 'افتح حسابك', href: productPath('individuals', 'current-account') },

  footerGroups: [
    {
      title: 'الأفراد',
      links: [
        { label: 'الحساب الجاري', href: productPath('individuals', 'current-account') },
        { label: 'حساب التوفير', href: productPath('individuals', 'savings-account') },
        { label: 'الودائع لأجل', href: productPath('individuals', 'term-deposits') },
        { label: 'فيزا كلاسيك', href: productPath('individuals', 'debit-card') },
        { label: 'فيزا الذهبية', href: productPath('individuals', 'visa-gold') },
        { label: 'الحوالات', href: productPath('individuals', 'remittances') },
      ],
    },
    {
      title: 'الشركات',
      links: [
        { label: 'حسابات الشركات', href: productPath('business', 'corporate-accounts') },
        { label: 'الاعتمادات المستندية', href: productPath('business', 'letters-of-credit') },
        { label: 'خطابات الضمان', href: productPath('business', 'letters-of-guarantee') },
        { label: 'توطين الرواتب', href: productPath('business', 'payroll') },
        { label: 'نقاط البيع', href: productPath('business', 'pos-terminals') },
      ],
    },
    {
      title: 'التمويل',
      links: [
        { label: 'المنشآت الصغيرة والمتوسطة', href: productPath('financing', 'sme-financing') },
        { label: 'رواد الأعمال', href: productPath('financing', 'entrepreneurs') },
        { label: 'رأس المال العامل', href: productPath('financing', 'working-capital') },
        { label: 'تمويل المعدات', href: productPath('financing', 'equipment-financing') },
        { label: 'المشاريع الكبرى', href: productPath('financing', 'project-finance') },
      ],
    },
    {
      title: 'البنك',
      links: [
        { label: 'عن البنك', href: ROUTES.about },
        { label: 'المركز الإعلامي', href: ROUTES.news },
        { label: 'الوظائف', href: ROUTES.careers },
        { label: 'الفروع والصرافات', href: ROUTES.branches },
        { label: 'التوعية الأمنية', href: ROUTES.security },
      ],
    },
  ],

  legalLinks: [
    { label: 'سياسة الخصوصية', href: ROUTES.privacy },
    { label: 'الشروط والأحكام', href: ROUTES.terms },
    { label: 'الأسئلة الشائعة', href: ROUTES.faq },
  ],

  contact: {
    callCenter: '8001010',
    callCenterHref: 'tel:8001010',
    internationalPhone: '+967 1 440 500',
    internationalPhoneHref: 'tel:+9671440500',
    email: 'care@ajlanbank.com.ye',
    fraudEmail: 'fraud@ajlanbank.com.ye',
    headOffice: 'المركز الرئيسي: شارع الزبيري، صنعاء، الجمهورية اليمنية',
    streetAddress: 'شارع الزبيري',
    city: 'صنعاء',
    countryCode: 'YE',
    workingHours: 'السبت – الخميس، من 8:00 صباحًا حتى 2:00 ظهرًا',
  },

  legal: {
    regulator: 'البنك المركزي اليمني',
    regulatorStatement:
      'بنك عجلان شركة مساهمة يمنية مرخّصة من البنك المركزي اليمني وتخضع لرقابته وإشرافه، وتلتزم بأنظمة مكافحة غسل الأموال وتمويل الإرهاب.',
    licenseNumber: '17/2004',
    commercialRegistration: '28614',
    swiftCode: 'AJLNYESA',
    copyright: 'جميع الحقوق محفوظة لبنك عجلان',
  },

  keyFigures: [
    { value: String(new Date().getFullYear() - FOUNDED_YEAR), label: 'عامًا من العمل المصرفي' },
    { value: '12', label: 'فرعًا في ست محافظات' },
    { value: '38', label: 'صرافًا آليًا على مدار الساعة' },
    { value: '180 ألف', label: 'عميل من الأفراد والمؤسسات' },
  ],

  ui: {
    skipToContent: 'تخطَّ إلى المحتوى الرئيسي',
    mainNavLabel: 'التنقل الرئيسي',
    footerNavLabel: 'روابط الموقع',
    breadcrumbLabel: 'مسار التصفح',
    home: 'الرئيسية',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    menuTitle: 'القائمة',
    callCenterLabel: 'مركز الاتصال',
    learnMore: 'اعرف المزيد',
    readMore: 'اقرأ الخبر',
    licenseLabel: 'رقم الترخيص',
    swiftLabel: 'رمز السويفت',
    commercialRegistrationLabel: 'السجل التجاري',
    contactHeading: 'تواصل معنا',
    onThisPage: 'أقسام الصفحة',
  },
}
