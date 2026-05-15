import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { processSteps } from '../data/process'
import { staggerContainer, fadeInUp } from '../utils/animations'

export default function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Our Process"
          title="How We Bring Ideas to Life"
          subtitle="A proven four-step methodology that ensures clarity, quality, and results at every stage."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={fadeInUp}
              className="relative"
            >
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
              )}
              <div className="glass-card p-6 h-full">
                <span className="font-display text-4xl font-bold text-accent/30">{step.step}</span>
                <h3 className="font-display text-xl font-bold text-white mt-2 mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
