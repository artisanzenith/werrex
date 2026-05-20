import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { services } from '../data/services'

export default function Pricing() {
  const [activeService, setActiveService] = useState(services[0])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Pricing"
          title="Transparent Packages"
          subtitle="Choose the plan that fits your goals. All packages include dedicated support and clear deliverables."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setActiveService(service)}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all ${
                activeService.id === service.id
                  ? 'bg-accent text-white shadow-lg shadow-accent/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        <motion.div
          key={activeService.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {activeService.packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-8 border transition-all ${
                pkg.recommended
                  ? 'border-accent bg-gradient-to-b from-accent/20 to-transparent scale-105 shadow-xl shadow-accent/20'
                  : 'border-white/10 glass-card hover:border-white/20'
              }`}
            >
              {pkg.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-full bg-accent text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold gradient-text">
                  ${pkg.price.toLocaleString()}
                </span>
                {activeService.id === 'socialmedia' && (
                  <span className="text-gray-400">/mo</span>
                )}
              </div>
              <p className="text-cyan-glow text-sm mb-6">Delivery: {pkg.delivery}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={pkg.recommended ? 'primary' : 'secondary'}
                onClick={scrollToContact}
              >
                Contact
              </Button>
              <a
                href={`mailto:hello@werrex.com?subject=${encodeURIComponent(
                  `Purchase Request - ${activeService.title} - ${pkg.name}`
                )}&body=${encodeURIComponent(
                  `I want to purchase the ${pkg.name} package for ${activeService.title}. Please contact me with next steps.`
                )}`}
                className="mt-3 block text-center text-sm text-gray-300 hover:text-white"
              >
                Purchase
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
