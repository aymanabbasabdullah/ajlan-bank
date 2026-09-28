export type MediaRatio = '16/10' | '4/5' | '3/2' | '1/1'

export interface IMediaAsset {
  id: string
  src: string
  width: number
  height: number
  credit: string
}

export const MEDIA = {
  heroStreet: {
    id: 'hero-street',
    src: '/media/hero-street.webp',
    width: 1800,
    height: 1200,
    credit: '',
  },
  individualsStreet: {
    id: 'individuals-street',
    src: '/media/individuals-street.webp',
    width: 1400,
    height: 933,
    credit: 'Roman Kraft ',
  },
  businessShop: {
    id: 'business-shop',
    src: '/media/business-shop.webp',
    width: 1400,
    height: 933,
    credit: 'Blake Wisz ',
  },
  financingWorkshop: {
    id: 'financing-workshop',
    src: '/media/financing-workshop.webp',
    width: 1400,
    height: 933,
    credit: 'Daniel McCullough ',
  },
  digitalPhone: {
    id: 'digital-phone',
    src: '/media/digital-phone.webp',
    width: 1400,
    height: 933,
    credit: ' ',
  },
  aboutArchitecture: {
    id: 'about-architecture',
    src: '/media/about-architecture.webp',
    width: 1600,
    height: 1067,
    credit: 'David Rodrigo ',
  },
  city: {
    id: 'city',
    src: '/media/city.webp',
    width: 1600,
    height: 1067,
    credit: 'Pedro Lastra ',
  },
  cafe: {
    id: 'cafe',
    src: '/media/cafe.webp',
    width: 1400,
    height: 933,
    credit: 'Nathan Dumlao ',
  },
  crafts: {
    id: 'crafts',
    src: '/media/crafts.webp',
    width: 1400,
    height: 933,
    credit: 'Letizia Bordoni ',
  },
  family: {
    id: 'family',
    src: '/media/family.webp',
    width: 1400,
    height: 933,
    credit: 'National Cancer Institute ',
  },
  market: {
    id: 'market',
    src: '/media/market.webp',
    width: 1400,
    height: 933,
    credit: 'Jakub Kapusnak ',
  },
  desk: {
    id: 'desk',
    src: '/media/desk.webp',
    width: 1400,
    height: 933,
    credit: 'Nastuh Abootalebi ',
  },
  retail: {
    id: 'retail',
    src: '/media/retail.webp',
    width: 1400,
    height: 933,
    credit: 'Christiann Koepke ',
  },
  harbor: {
    id: 'harbor',
    src: '/media/harbor.webp',
    width: 1400,
    height: 933,
    credit: 'Damiano Baschiera ',
  },
} as const satisfies Record<string, IMediaAsset>

export type MediaId = keyof typeof MEDIA

export const PAGE_MEDIA: Record<string, MediaId> = {
  '/individuals': 'individualsStreet',
  '/business': 'businessShop',
  '/financing': 'financingWorkshop',
  '/about': 'aboutArchitecture',
  '/branches': 'harbor',
  '/contact': 'desk',
  '/security': 'desk',
  '/news': 'city',
  '/careers': 'cafe',
  '/faq': 'family',
  '/privacy': 'desk',
  '/terms': 'desk',
}

export const PRODUCT_MEDIA: Record<string, MediaId> = {
  'current-account': 'cafe',
  'savings-account': 'family',
  'term-deposits': 'crafts',
  'debit-card': 'retail',
  'prepaid-card': 'harbor',
  'visa-gold': 'cafe',
  'visa-business': 'desk',
  'personal-finance': 'family',
  remittances: 'individualsStreet',
  'mobile-banking': 'digitalPhone',
  'corporate-accounts': 'desk',
  'cash-management': 'retail',
  'letters-of-credit': 'harbor',
  'letters-of-guarantee': 'crafts',
  payroll: 'cafe',
  'pos-terminals': 'businessShop',
  'sme-financing': 'financingWorkshop',
  entrepreneurs: 'market',
  'working-capital': 'retail',
  'equipment-financing': 'financingWorkshop',
  'project-finance': 'city',
}

export function mediaIdForProduct(slug: string): MediaId {
  return PRODUCT_MEDIA[slug] ?? 'city'
}

export function mediaForProduct(slug: string): IMediaAsset {
  return MEDIA[mediaIdForProduct(slug)]
}

export function mediaIdForPage(path: string): MediaId | undefined {
  return PAGE_MEDIA[path]
}

export function mediaForPage(path: string): IMediaAsset | undefined {
  const id = PAGE_MEDIA[path]
  return id ? MEDIA[id] : undefined
}
