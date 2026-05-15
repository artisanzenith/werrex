import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { staggerContainer, fadeInUp } from '../utils/animations'

const reasons = [
  {
    title: 'Proven Track Record',
    description: '250+ successful projects with 98% client satisfaction. We deliver results, not just deliverables.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Full-Service Expertise',
    description: 'Web, design, and social under one roof. Cohesive brand experiences without juggling multiple vendors.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  },
  {
    title: 'Dedicated Support',
    description: 'Your success is our priority. From kickoff to launch and beyond, we are with you every step.',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
  },
  {
    title: 'Modern Technology',
    description: 'React, Next.js, and cutting-edge tools ensure fast, scalable, and future-proof solutions.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  {
    title: 'Transparent Pricing',
    description: 'Clear packages with no hidden fees. Know exactly what you get before we start.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Fast Turnaround',
    description: 'Efficient workflows and agile processes mean your project launches on time, every time.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-dark-900/30">
      <div className="container-custom">
        <SectionHeading
          badge="Why Choose Us"
          title="The Nexus Advantage"
          subtitle="We do not just build websites — we build partnerships that fuel lasting success."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="glass-card p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent-light mb-4 group-hover:bg-accent/30 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={reason.icon} />
                </svg>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
