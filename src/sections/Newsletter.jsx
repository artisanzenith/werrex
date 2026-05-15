import { motion } from 'framer-motion'
import NewsletterForm from '../components/NewsletterForm'
import { fadeInUp } from '../utils/animations'

export default function Newsletter() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent/30 via-dark-800 to-cyan-glow/20 border border-white/10 p-8 md:p-12 lg:p-16"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                Stay Ahead of Digital Trends
              </h2>
              <p className="text-gray-400">
                Join 5,000+ marketers and founders. Get weekly insights on web design, branding, and social growth.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
