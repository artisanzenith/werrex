import { motion } from 'framer-motion'
import { scaleIn } from '../utils/animations'

const icons = {
  code: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  palette: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  share: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  ),
}

export default function ServiceCard({ service, onViewPricing, index = 0 }) {
  return (
    <motion.article
      variants={scaleIn}
      custom={index}
      whileHover={{ y: -8 }}
      className="group glass-card overflow-hidden cursor-pointer"
      onClick={() => onViewPricing(service)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
        <div className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-accent/90 flex items-center justify-center text-white">
          {icons[service.icon]}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-accent-light transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{service.shortDescription}</p>
        <ul className="flex flex-wrap gap-2 mb-4">
          {service.features.slice(0, 3).map((f) => (
            <li key={f} className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-400">
              {f}
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-2 text-accent-light font-medium text-sm group-hover:gap-3 transition-all">
          View Pricing
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </motion.article>
  )
}
