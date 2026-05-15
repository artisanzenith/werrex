import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'
import { staggerContainer, scaleIn } from '../utils/animations'

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-dark-900/30">
      <div className="container-custom">
        <SectionHeading
          badge="Portfolio"
          title="Recent Projects"
          subtitle="Explore our latest work across web development, branding, and social media campaigns."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={scaleIn}
              whileHover={{ y: -8 }}
              className="group glass-card overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-80" />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-accent/80 text-white">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
