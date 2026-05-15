import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

export default function PricingModal({ service, isOpen, onClose }) {
  if (!service) return null

  const scrollToContact = () => {
    onClose()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
          >
            <div className="w-full max-w-5xl max-h-[90vh] overflow-y-auto">
              <div className="glass-card p-6 md:p-8 w-full">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                  <div className="flex-1">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                      {service.title} Pricing
                    </h3>
                    <p className="text-gray-400">{service.shortDescription}</p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                    aria-label="Close"
                  >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.packages.map((pkg) => (
                  <motion.div
                    key={pkg.name}
                    whileHover={{ y: -4 }}
                    className={`relative rounded-2xl p-6 border transition-all ${
                      pkg.recommended
                        ? 'border-accent bg-gradient-to-b from-accent/20 to-transparent shadow-lg shadow-accent/20'
                        : 'border-white/10 bg-dark-800/50 hover:border-white/20'
                    }`}
                  >
                    {pkg.recommended && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold rounded-full bg-accent text-white">
                        Recommended
                      </span>
                    )}
                    <h4 className="font-display text-xl font-bold text-white mb-1">{pkg.name}</h4>
                    <div className="mb-4">
                      <span className="text-3xl font-bold gradient-text">${pkg.price.toLocaleString()}</span>
                      {service.id === 'socialmedia' && (
                        <span className="text-gray-400 text-sm">/mo</span>
                      )}
                    </div>
                    <p className="text-sm text-cyan-glow mb-4">Delivery: {pkg.delivery}</p>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                          <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
                      Get Started
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
