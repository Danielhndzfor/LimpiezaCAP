import { useState } from 'react'
import type { Faq } from '../../data/faqs'
import styles from './FaqAccordion.module.css'

interface FaqAccordionProps {
  items: Faq[]
}

function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <div className={styles['faq-accordion']}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={item.question}
            className={`${styles['faq-item']}${isOpen ? ` ${styles['faq-item--open']}` : ''}`}
          >
            <button
              type="button"
              className={styles['faq-item__question']}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              {item.question}
              <span className={styles['faq-item__toggle']}>+</span>
            </button>
            <div className={styles['faq-item__answer']}>
              <p>{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FaqAccordion
