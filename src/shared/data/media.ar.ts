import { MEDIA, PAGE_MEDIA, PRODUCT_MEDIA, type IMediaAsset, type MediaId } from './media'

export interface IMediaCopy {
  alt: string
  caption: string
}

export const MEDIA_COPY: Record<keyof typeof MEDIA, IMediaCopy> = {
  heroStreet: {
    alt: 'ممر حجري مظلل في مدينة قديمة، يمر فيه الناس بين المحال والجدران الطينية.',
    caption: '',
  },
  individualsStreet: {
    alt: 'ناس يعبرون ساحة عامة في ضوء النهار بين المباني والمتاجر.',
    caption: 'حركة الناس في وسط المدينة',
  },
  businessShop: {
    alt: 'صاحب محل يتعامل مع زبون عند طاولة البيع.',
    caption: 'محل تجاري يستقبل زبائنه',
  },
  financingWorkshop: {
    alt: 'عمال في موقع بناء يجهزون معدات وأعمال خرسانة.',
    caption: 'ورشة عمل ومعدات على الأرض',
  },
  digitalPhone: {
    alt: 'شخص يمسك هاتفًا في الخارج ويراجع شاشته.',
    caption: 'إدارة الحساب من الهاتف',
  },
  aboutArchitecture: {
    alt: 'واجهة معمارية مقوّسة بزخارف حجرية هادئة.',
    caption: 'عمارة محلية بتفاصيل حجرية',
  },
  city: {
    alt: 'أفق مدينة حديثة عند الغروب مع أبراج وطرق.',
    caption: 'أفق مدينة في ساعة المغرب',
  },
  cafe: {
    alt: 'طاولة مقهى خشبية مع فناجين وأوراق عمل.',
    caption: 'جلسة عمل في مقهى',
  },
  crafts: {
    alt: 'يدان تعملان على حرفة يدوية فوق طاولة خشبية.',
    caption: 'ورشة حرفية صغيرة',
  },
  family: {
    alt: 'أسرة تمشي معًا في ضوء طبيعي.',
    caption: 'أسرة في نزهة هادئة',
  },
  market: {
    alt: 'أكشاك خضار وفاكهة في سوق مفتوح.',
    caption: 'سوق يومي بالخضار والفاكهة',
  },
  desk: {
    alt: 'مكتب عمل مرتب بإضاءة نهارية من النافذة.',
    caption: 'مكتب خدمة في ضوء النهار',
  },
  retail: {
    alt: 'ممر متجر بملابس معروضة على جانبيه.',
    caption: 'قاعة بيع بالتجزئة',
  },
  harbor: {
    alt: 'قوارب راسية على قناة محاطة بمبانٍ قديمة.',
    caption: 'ميناء هادئ في ضوء النهار',
  },
}

export interface IHeroMedia {
  media: IMediaAsset
  mediaCopy: IMediaCopy
}

export function heroMediaForPath(path: string): IHeroMedia | undefined {
  const id = PAGE_MEDIA[path]
  if (!id) return undefined
  return { media: MEDIA[id], mediaCopy: MEDIA_COPY[id] }
}

export function heroMediaForProduct(slug: string): IHeroMedia {
  const id = PRODUCT_MEDIA[slug] ?? 'city'
  return { media: MEDIA[id], mediaCopy: MEDIA_COPY[id] }
}

export function copyForMedia(id: MediaId): IMediaCopy {
  return MEDIA_COPY[id]
}
