import { Seo } from '@/shared/components/layout'
import { PageHero } from '@/shared/components/sections'
import { Section } from '@/shared/components/ui'
import { CONTACT_CONTENT } from '../../data/contact.ar'
import { contactPageStyles as styles } from './contact.styles'
import { ContactAside } from './components/ContactAside'
import { ContactChannels } from './components/ContactChannels'
import { ContactForm } from './components/ContactForm'

export function ContactPage() {
  const content = CONTACT_CONTENT

  return (
    <>
      <Seo meta={content.seo} breadcrumbs={content.breadcrumbs} />
      <PageHero title={content.header.title} lead={content.header.lead} breadcrumbs={content.breadcrumbs} />
      <ContactChannels header={content.channelsHeader} channels={content.channels} />
      <Section tone="sand" id="contact-form">
        <div className={styles.layout}>
          <div className={styles.form}>
            <ContactForm content={content.form} />
          </div>
          <div className={styles.aside}>
            <ContactAside office={content.office} fraud={content.fraud} />
          </div>
        </div>
      </Section>
    </>
  )
}
