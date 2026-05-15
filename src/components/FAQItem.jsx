import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-5 flex justify-between items-center text-left gap-4 hover:text-accent-light transition-colors"
      >
        <span className="font-semibold text-white pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
