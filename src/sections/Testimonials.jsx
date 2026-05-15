import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { testimonials } from '../data/testimonials'
import { staggerContainer, fadeInUp } from '../utils/animations'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Client Reviews"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it — hear from brands we've helped transform."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.blockquote
              key={t.id}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="glass-card p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 flex-1 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <footer className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <cite className="font-semibold text-white not-italic">{t.name}</cite>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
