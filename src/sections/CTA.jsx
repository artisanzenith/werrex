import { motion } from 'framer-motion'
import Button from '../components/Button'
import { fadeInUp } from '../utils/animations'

export default function CTA() {
  return (
    <section className="section-padding pt-0">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center glass-card p-12 md:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
              Join 250+ successful brands. Book a free strategy call and discover how we can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Book Free Consultation
              </Button>
              <Button variant="secondary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Services
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
