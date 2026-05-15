import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClass =
    align === 'center'
      ? 'text-center mx-auto'
      : align === 'left'
        ? 'text-left'
        : 'text-right ml-auto'

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
      className={`max-w-3xl mb-12 md:mb-16 ${alignClass} ${className}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-accent/20 text-accent-light border border-accent/30">
          {badge}
        </span>
      )}
      <h2 className="section-heading mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
