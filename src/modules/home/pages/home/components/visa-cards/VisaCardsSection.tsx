import { ButtonLink, Container, IslamicPattern } from '@/shared/components/ui'
import { usePinnedScroll } from '@/shared/hooks/usePinnedScroll'
import { cn } from '@/shared/utils/cn'
import type { IVisaCard, IVisaCardsSection } from '../../../../types/home.types'
import { VisaCardFace } from './VisaCardFace'
import { visaCardsStyles as styles } from './visa-cards.styles'

interface IVisaCardsSectionProps {
  visa: IVisaCardsSection
}

export function VisaCardsSection({ visa }: IVisaCardsSectionProps) {
  const { trackRef, index, reduced } = usePinnedScroll(visa.cards.length)
  const active = visa.cards[index] ?? visa.cards[0]

  if (reduced) {
    return (
      <section id="visa-cards" aria-labelledby="visa-cards-title" className={styles.track}>
        <div className={styles.staticPin}>
          <IslamicPattern className={styles.pattern} />
          <Container className={styles.inner}>
            <SectionIntro visa={visa} />
            <ul className={styles.reducedGrid}>
              {visa.cards.map((card) => (
                <li key={card.name} className={styles.reducedItem}>
                  <div className={styles.reducedScene}>
                    <VisaCardFace card={card} state="active" />
                  </div>
                  <CardCopy card={card} sampleNote={visa.sampleNote} />
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </section>
    )
  }

  return (
    <section id="visa-cards" aria-labelledby="visa-cards-title" className={styles.track}>
      <div ref={trackRef} className={styles.tall}>
        <div className={styles.pin}>
          <IslamicPattern className={styles.pattern} />
          <Container className={styles.layout}>
            <div className={styles.copy}>
              <SectionIntro visa={visa} />
              <div aria-live="polite" aria-atomic="true">
                <CardCopy card={active} sampleNote={visa.sampleNote} />
              </div>
            </div>
            <div className={styles.stage}>
              <div className={styles.scene}>
                <div className={styles.deck}>
                  {visa.cards.map((card, cardIndex) => (
                    <VisaCardFace
                      key={card.name}
                      card={card}
                      state={cardIndex === index ? 'active' : cardIndex < index ? 'passed' : 'next'}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.progress}>
                <p className={styles.progressLabel}>
                  {visa.progressLabel} {index + 1} / {visa.cards.length}
                </p>
                <div className={styles.dots} aria-hidden>
                  {visa.cards.map((card, cardIndex) => (
                    <span
                      key={card.name}
                      className={cn(styles.dot, cardIndex === index && styles.dotActive)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}

function SectionIntro({ visa }: { visa: IVisaCardsSection }) {
  return (
    <>
      <p className={styles.eyebrow}>{visa.eyebrow}</p>
      <h2 id="visa-cards-title" className={styles.title}>
        {visa.title}
      </h2>
      <p className={styles.lead}>{visa.description}</p>
    </>
  )
}

function CardCopy({ card, sampleNote }: { card: IVisaCard; sampleNote: string }) {
  return (
    <>
      <p className={styles.cardName}>{card.name}</p>
      <p className={styles.cardTag}>{card.tagline}</p>
      <p className={styles.cardText}>{card.description}</p>
      <dl className={styles.facts}>
        {card.facts.map((fact) => (
          <div key={fact.label} className={styles.fact}>
            <dt className={styles.factLabel}>{fact.label}</dt>
            <dd className={styles.factValue}>{fact.value}</dd>
          </div>
        ))}
      </dl>
      <ul className={styles.highlights}>
        {card.highlights.map((item) => (
          <li key={item} className={styles.highlight}>
            {item}
          </li>
        ))}
      </ul>
      <div className={styles.actions}>
        <ButtonLink href={card.cta.href} variant="inverse">
          {card.cta.label}
        </ButtonLink>
        <p className={styles.sample}>{sampleNote}</p>
      </div>
    </>
  )
}
