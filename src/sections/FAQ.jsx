import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import FAQItem from '../components/FAQItem'
import { faqItems } from '../data/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section-padding bg-dark-900/30">
      <div className="container-custom max-w-3xl">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before starting your project."
        />
        <div className="glass-card p-6 md:p-8">
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
