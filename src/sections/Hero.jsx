import { motion } from 'framer-motion'
import Button from '../components/Button'
import { fadeInUp, slideInRight } from '../utils/animations'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-glow/10 rounded-full blur-[100px] animate-pulse-slow" />

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-accent/20 text-accent-light border border-accent/30"
            >
              Award Winning Digital Agency
            </motion.span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              We Build Brands That{' '}
              <span className="gradient-text">Dominate Digital</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
              Transform your business with stunning websites, captivating design, and social media strategies that drive real growth. Trusted by 250+ brands worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollTo('contact')}>Start Your Project</Button>
              <Button variant="secondary" onClick={() => scrollTo('portfolio')}>
                View Our Work
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/photo-${['1494790108377-be9c29b29330', '1507003211169-0a1dd7228f2d', '1438761681033-6461ffad8d80', '1472099645785-5658abf4ff4e'][i - 1]}?w=80&q=80`}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-dark-950 object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold text-white">250+ Happy Clients</p>
                <p className="text-sm text-gray-400">4.9/5 average rating</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-accent/20 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Team collaboration"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-6 left-6 right-6 glass-card p-4"
              >
                <p className="text-sm text-gray-400 mb-1">Projects delivered</p>
                <p className="font-display text-2xl font-bold gradient-text">250+</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
