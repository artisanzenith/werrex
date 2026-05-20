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
              Strategic Digital Studio
            </motion.span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Professional websites and brands built to
              <span className="gradient-text"> perform on every screen.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
              We design refined digital experiences that are fast, clear, and tailored to your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact">Start a Project</Button>
              <Button variant="secondary" to="/services">
                View Services
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {['Trusted by growth teams', 'Mobile-first experiences', 'Clear project delivery'].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-dark-900/70 p-4 text-sm text-gray-300">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-950/40 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80"
                alt="Creative workspace"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-6 left-6 right-6 rounded-3xl bg-slate-950/95 border border-white/10 p-5"
              >
                <p className="text-sm text-gray-400 mb-2">Digital products built for clarity</p>
                <p className="font-display text-2xl font-bold text-white">Professional, dependable, scalable.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
