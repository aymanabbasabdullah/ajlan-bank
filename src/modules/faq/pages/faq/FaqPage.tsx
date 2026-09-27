import { Seo } from '@/shared/components/layout'
import { AnchorNav, CtaBanner, FaqSection, PageHero } from '@/shared/components/sections'
import { FAQ_CATEGORIES } from '../../data/faq-categories.ar'
import { FAQ_CONTENT } from '../../data/faq-page.ar'
import { faqPageJsonLd } from '../../utils/faq-structured-data'

export function FaqPage() {
  const content = FAQ_CONTENT
  const categories = FAQ_CATEGORIES
  const quickLinks = categories.map((category) => ({ label: category.title, href: `#${category.id}` }))

  return (
    <>
      <Seo
        meta={content.seo}
        jsonLd={[faqPageJsonLd(categories.flatMap((category) => category.items))]}
        breadcrumbs={content.breadcrumbs}
      />
      <PageHero title={content.header.title} lead={content.header.lead} breadcrumbs={content.breadcrumbs}>
        <AnchorNav links={quickLinks} />
      </PageHero>
      {categories.map((category, index) => (
        <FaqSection
          key={category.id}
          id={category.id}
          header={{ title: category.title, description: category.description }}
          items={category.items}
          tone={index % 2 === 0 ? 'canvas' : 'sand'}
        />
      ))}
      <CtaBanner cta={content.cta} />
    </>
  )
}
