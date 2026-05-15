import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  if (subscribed) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-accent-light font-medium"
      >
        Thanks for subscribing! Check your inbox for confirmation.
      </motion.p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
      />
      <Button type="submit">Subscribe</Button>
    </form>
  )
}
