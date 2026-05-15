import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function StatCounter({ value, suffix = '', label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <p className="text-gray-400 font-medium">{label}</p>
    </motion.div>
  )
}
