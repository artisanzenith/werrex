import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { slideInLeft, slideInRight } from '../utils/animations'

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Our team at work"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 max-w-[200px] hidden sm:block">
              <p className="font-display text-3xl font-bold gradient-text">12+</p>
              <p className="text-sm text-gray-400">Years of Excellence</p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <SectionHeading
              badge="About Us"
              title="Digital strategy with a polished, human-first approach"
              subtitle="Werrex designs modern websites, brand systems, and campaigns that work reliably for your team and your customers."
              align="left"
              className="mb-6"
            />
            <p className="text-gray-400 mb-4 leading-relaxed">
              We pair thoughtful design with web engineering standards so your website looks distinctive and performs beautifully across devices.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              From initial concept to launch, our process is structured, transparent, and centered on your business goals.
            </p>
            <ul className="space-y-3 mb-8">
              {['Client first approach', 'Transparent communication', 'Results driven strategy', 'Long term partnerships'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Work With Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
