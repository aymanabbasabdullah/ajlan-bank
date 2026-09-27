import { OG_IMAGE_PATH, SITE_URL } from '@/shared/constants/site'
import { SITE } from '@/shared/data/site.ar'
import { OG_LOCALE } from '@/shared/i18n/locale'
import type { ILink, ISeoMeta } from '@/shared/types'
import { breadcrumbJsonLd, serializeJsonLd, type JsonLd } from '@/shared/utils/structured-data'

interface ISeoProps {
  meta: ISeoMeta
  type?: 'website' | 'article'
  jsonLd?: JsonLd[]
  breadcrumbs?: ILink[]
}

export function Seo({ meta, type = 'website', jsonLd = [], breadcrumbs }: ISeoProps) {
  const { brand } = SITE
  const isHome = meta.path === '/'
  const fullTitle = isHome ? `${brand.name} | ${meta.title}` : `${meta.title} | ${brand.name}`
  const url = `${SITE_URL}${isHome ? '' : meta.path}`
  const structuredData = breadcrumbs ? [...jsonLd, breadcrumbJsonLd(breadcrumbs)] : jsonLd

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={brand.name} />
      <meta property="og:locale" content={OG_LOCALE} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}${OG_IMAGE_PATH}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={meta.description} />
      {structuredData.map((data, index) => (
        <script
          key={`${String(data['@type'])}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
        />
      ))}
    </>
  )
}
