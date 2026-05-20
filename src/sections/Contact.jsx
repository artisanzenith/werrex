import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import { slideInLeft, slideInRight } from '../utils/animations'

const contactInfo = [
  { label: 'Email', value: 'info@werrex.com', href: 'mailto:info@werrex.com' },
  { label: 'Phone', value: '+1 321 357 6140', href: 'tel:+13213576140' },
  { label: 'Office', value: 'Norbert Ave Warren Michigan', href: 'https://www.google.com/maps/search/Norbert+Ave+Warren+Michigan' },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Contact"
          title="Let's Start Your Project"
          subtitle="Ready to transform your digital presence? Get in touch for a free consultation."
        />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <ContactForm />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                We typically respond within 24 hours. For urgent inquiries, call us directly.
              </p>
              <ul className="space-y-4">
                {contactInfo.map((item) => (
                  <li key={item.label}>
                    <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                    <a href={item.href} className="text-white hover:text-accent-light transition-colors font-medium">
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80"
                alt="Office"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
