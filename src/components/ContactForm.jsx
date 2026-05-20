import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const json = await res.json()
      if (res.ok && json.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', company: '', service: '', message: '' })
      } else {
        setError(json.error || 'Failed to send message')
      }
    } catch (err) {
      setError('Network error. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold text-white mb-2">Message Sent</h3>
        <p className="text-gray-400 mb-4">Your message was successfully sent. We'll respond within 24 hours.</p>
        <Button variant="secondary" onClick={() => setSubmitted(false)}>
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
      {error && (
        <div className="rounded-md bg-red-900/60 border border-red-700 p-3 text-sm text-red-100">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
            placeholder="john@company.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
            placeholder="Your Company"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Service Interest</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
          >
            <option value="">Select a service</option>
            <option value="web">Website Development</option>
            <option value="design">Graphic Design</option>
            <option value="social">Social Media Marketing</option>
            <option value="bundle">Full Package</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto">
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
