import { ROUTES } from '@/shared/constants/routes'
import { SITE } from '@/shared/data/site.ar'
import type { IContactContent } from '../types/contact.types'

const { contact } = SITE

export const CONTACT_CONTENT: IContactContent = {
  seo: {
    title: 'تواصل معنا',
    description:
      'تواصل مع بنك عجلان عبر مركز الاتصال المجاني 8001010 أو البريد الإلكتروني أو نموذج التواصل، أو زر المركز الرئيسي في شارع الزبيري بصنعاء.',
    path: ROUTES.contact,
  },
  header: {
    title: 'نحن هنا لخدمتك',
    lead: 'اختر الطريقة الأنسب لك للتواصل معنا، أو أرسل استفسارك عبر النموذج وسيتواصل معك أحد موظفينا خلال يوم عمل واحد.',
  },
  breadcrumbs: [{ label: 'تواصل معنا', href: ROUTES.contact }],

  channelsHeader: {
    title: 'قنوات التواصل',
  },
  channels: [
    {
      icon: 'headset',
      title: 'مركز الاتصال',
      value: contact.callCenter,
      href: contact.callCenterHref,
      description: 'مجاني من داخل اليمن، على مدار الساعة للبطاقات والطوارئ.',
    },
    {
      icon: 'globe',
      title: 'من خارج اليمن',
      value: contact.internationalPhone,
      href: contact.internationalPhoneHref,
      description: 'للعملاء المقيمين في الخارج خلال أوقات العمل الرسمية.',
    },
    {
      icon: 'envelope',
      title: 'البريد الإلكتروني',
      value: contact.email,
      href: `mailto:${contact.email}`,
      description: 'للاستفسارات العامة، ونرد خلال يوم عمل واحد.',
    },
    {
      icon: 'chat',
      title: 'الشكاوى والمقترحات',
      value: 'نموذج التواصل',
      href: '#contact-form',
      description: 'اختر "شكوى" في النموذج، وتصلك رسالة برقم مرجعي لمتابعتها.',
    },
  ],

  form: {
    title: 'أرسل استفسارك',
    description: 'الحقول المطلوبة: الاسم ورقم الهاتف والموضوع والرسالة.',
    labels: {
      name: 'الاسم الكامل',
      phone: 'رقم الهاتف',
      email: 'البريد الإلكتروني',
      topic: 'الموضوع',
      message: 'رسالتك',
    },
    placeholders: {
      phone: '7XX XXX XXX',
      message: 'اكتب استفسارك بإيجاز…',
    },
    optionalLabel: 'اختياري',
    topicPlaceholder: 'اختر الموضوع',
    topics: [
      { id: 'accounts', label: 'الحسابات والودائع' },
      { id: 'cards', label: 'البطاقات' },
      { id: 'financing', label: 'التمويل' },
      { id: 'business', label: 'خدمات الشركات' },
      { id: 'complaint', label: 'شكوى' },
      { id: 'other', label: 'موضوع آخر' },
    ],
    errors: {
      nameRequired: 'يرجى كتابة اسمك الكامل.',
      phoneRequired: 'يرجى كتابة رقم هاتفك.',
      phoneInvalid: 'رقم الهاتف غير صحيح. مثال: 771234567',
      emailInvalid: 'صيغة البريد الإلكتروني غير صحيحة.',
      topicRequired: 'يرجى اختيار موضوع الرسالة.',
      messageRequired: 'يرجى كتابة رسالتك.',
      messageTooShort: 'الرسالة قصيرة جدًا، يرجى توضيح طلبك في 20 حرفًا على الأقل.',
      submitFailed: 'تعذّر إرسال الرسالة. يرجى المحاولة مرة أخرى أو الاتصال بمركز الاتصال.',
    },
    submit: 'إرسال',
    submitting: 'جارٍ الإرسال…',
    privacyNote: 'لا تكتب أبدًا رقم بطاقتك أو الرقم السري أو رمز التحقق في هذا النموذج.',
    success: {
      title: 'تم استلام رسالتك',
      text: (reference) => `شكرًا لتواصلك معنا. رقمك المرجعي هو ${reference}، وسيتواصل معك أحد موظفينا خلال يوم عمل واحد.`,
      again: 'إرسال رسالة أخرى',
    },
  },

  office: {
    title: 'المركز الرئيسي',
    addressLabel: 'العنوان',
    hoursLabel: 'أوقات العمل',
    swiftLabel: SITE.ui.swiftLabel,
  },

  fraud: {
    title: 'للإبلاغ عن احتيال',
    text: 'إذا تلقيت اتصالًا أو رسالة مشبوهة باسم البنك، أو لاحظت عملية لم تقم بها، أوقف بطاقتك فورًا عبر مركز الاتصال وأبلغنا.',
    link: { label: 'إرشادات التوعية الأمنية', href: ROUTES.security },
  },
}
