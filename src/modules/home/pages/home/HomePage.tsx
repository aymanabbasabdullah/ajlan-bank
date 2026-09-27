import { Seo } from '@/shared/components/layout'
import { CtaBanner, FeaturesSection } from '@/shared/components/sections'
import { bankJsonLd } from '@/shared/utils/structured-data'
import { HOME_CONTENT } from '../../data/home.ar'
import { AudiencePaths } from './components/audience-paths/AudiencePaths'
import { DigitalBanking } from './components/digital-banking/DigitalBanking'
import { FeaturedProducts } from './components/featured-products/FeaturedProducts'
import { HomeHero } from './components/hero/HomeHero'
import { LatestNews } from './components/latest-news/LatestNews'
import { TrustFigures } from './components/trust-figures/TrustFigures'

export function HomePage() {
  const content = HOME_CONTENT

  return (
    <>
      <Seo meta={content.seo} jsonLd={[bankJsonLd()]} />
      <HomeHero hero={content.hero} />
      <TrustFigures header={content.trustHeader} />
      <AudiencePaths header={content.pathsHeader} paths={content.paths} />
      <FeaturedProducts header={content.featuredHeader} />
      <DigitalBanking digital={content.digital} />
      <FeaturesSection header={content.valuesHeader} items={content.values} columns={4} variant="plain" />
      <LatestNews header={content.newsHeader} link={content.newsLink} />
      <CtaBanner cta={content.cta} />
    </>
  )
}
