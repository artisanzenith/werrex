import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-cyan-glow flex items-center justify-center mb-6"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <span className="font-display font-bold text-2xl text-white">N</span>
      </motion.div>
      <motion.p
        className="text-gray-400 font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading Nexus Digital...
      </motion.p>
      <div className="mt-6 w-48 h-1 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent to-cyan-glow rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
