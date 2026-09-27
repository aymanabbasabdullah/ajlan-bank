import { ROUTES, productPath } from '@/shared/constants/routes'
import type { IBranchesContent } from '../types/branch.types'

export const BRANCHES_CONTENT: IBranchesContent = {
  seo: {
    title: 'الفروع والصرافات',
    description:
      'عناوين فروع بنك عجلان وأرقام هواتفها وأوقات عملها في صنعاء وعدن وتعز والمكلا والحديدة وإب، مع الخدمات المتاحة في كل فرع.',
    path: ROUTES.branches,
  },
  header: {
    title: 'الفروع والصرافات الآلية',
    lead: 'اثنا عشر فرعًا في ست محافظات، وصرافات آلية تعمل على مدار الساعة. اختر مدينتك لعرض الفروع القريبة منك.',
  },
  breadcrumbs: [{ label: 'الفروع والصرافات', href: ROUTES.branches }],
  listHeader: {
    title: 'دليل الفروع',
  },
  filterLabel: 'تصفية حسب المدينة',
  allCitiesLabel: 'كل المدن',
  resultsLabel: (count) => (count === 1 ? 'فرع واحد' : count === 2 ? 'فرعان' : `${count} فروع`),
  headOfficeLabel: 'المركز الرئيسي',
  addressLabel: 'العنوان',
  phoneLabel: 'الهاتف',
  hoursLabel: 'أوقات العمل',
  servicesLabel: 'الخدمات المتاحة',
  mapLabel: 'عرض على الخريطة',
  serviceLabels: {
    atm: 'صراف آلي',
    women: 'قسم نسائي',
    remittances: 'حوالات',
    trade: 'تجارة خارجية',
    business: 'خدمات الشركات',
    cards: 'إصدار البطاقات',
  },
  facilitiesHeader: {
    title: 'خدمات في كل فروعنا',
    description: 'حرصنا على أن تكون تجربة زيارة الفرع مريحة للجميع.',
  },
  facilities: [
    {
      icon: 'vault',
      title: 'صرافات على مدار الساعة',
      description: 'سحب نقدي واستعلام عن الرصيد وتغيير الرقم السري في أي وقت، بالريال اليمني.',
    },
    {
      icon: 'users',
      title: 'أقسام نسائية',
      description: 'أقسام مخصصة للعميلات بموظفات متخصصات في معظم الفروع الرئيسية.',
    },
    {
      icon: 'handshake',
      title: 'أولوية لكبار السن',
      description: 'خدمة ذات أولوية لكبار السن وذوي الإعاقة، ومداخل مهيأة في الفروع الحديثة.',
    },
    {
      icon: 'headset',
      title: 'مساعدة قبل الزيارة',
      description: 'اتصل بمركز الاتصال لمعرفة المستندات المطلوبة وتوفير وقت انتظارك في الفرع.',
    },
  ],
  cta: {
    title: 'لم تجد فرعًا قريبًا منك؟',
    description: 'كثير من خدماتنا متاحة عبر تطبيق عجلان موبايل ومركز الاتصال دون الحاجة إلى زيارة الفرع.',
    primary: { label: 'تواصل معنا', href: ROUTES.contact },
    secondary: { label: 'الخدمات الرقمية', href: productPath('individuals', 'mobile-banking') },
  },
}
