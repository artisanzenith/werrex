import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { team } from '../data/team'
import { staggerContainer, scaleIn } from '../utils/animations'

export default function Team() {
  return (
    <section id="team" className="section-padding bg-dark-900/30">
      <div className="container-custom">
        <SectionHeading
          badge="Our Team"
          title="Meet the Experts"
          subtitle="Passionate creatives and developers dedicated to your success."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member) => (
            <motion.article
              key={member.id}
              variants={scaleIn}
              whileHover={{ y: -8 }}
              className="glass-card overflow-hidden group text-center"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-accent-light text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
