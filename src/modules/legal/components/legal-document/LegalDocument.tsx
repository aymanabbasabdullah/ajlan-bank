import { useId } from 'react'
import { Seo } from '@/shared/components/layout'
import { PageHero } from '@/shared/components/sections'
import { heroMediaForPath } from '@/shared/data/media.ar'
import { Section } from '@/shared/components/ui'
import { formatDate } from '@/shared/utils/format'
import { LEGAL_UI } from '../../data/legal-ui.ar'
import type { ILegalDocument } from '../../types/legal.types'
import { legalDocumentStyles as styles } from './legal-document.styles'

interface ILegalDocumentProps {
  document: ILegalDocument
}

export function LegalDocument({ document }: ILegalDocumentProps) {
  const tocId = useId()
  const ui = LEGAL_UI

  return (
    <>
      <Seo meta={document.seo} breadcrumbs={document.breadcrumbs} />
      <PageHero
        title={document.header.title}
        lead={document.header.lead}
        breadcrumbs={document.breadcrumbs}
        {...heroMediaForPath(document.seo.path)}
      >
        <p className={styles.updated}>
          {ui.updatedLabel}: <time dateTime={document.updatedAt}>{formatDate(document.updatedAt)}</time>
        </p>
      </PageHero>
      <Section>
        <div className={styles.layout}>
          <nav aria-labelledby={tocId} className={styles.toc}>
            <h2 id={tocId} className={styles.tocTitle}>
              {ui.tocLabel}
            </h2>
            <ol className={styles.tocList}>
              {document.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className={styles.tocLink}>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className={styles.body}>
            {document.sections.map((section, index) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className={styles.section}>
                <h2 id={`${section.id}-title`} className={styles.sectionTitle}>
                  <span className={styles.number}>{index + 1}.</span> {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className={styles.list}>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className={styles.questions}>
              <h2 className={styles.questionsTitle}>{ui.questionsTitle}</h2>
              <p>{ui.questionsText}</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
