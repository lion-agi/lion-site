// src/pages/404.tsx
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#111111] text-white">
      <motion.h1 
        className="text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p 
        className="text-2xl mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link href="/" className="bg-[#D4AF37] text-[#111111] px-6 py-2 rounded-md hover:bg-[#c9b436] transition-colors">
          Go back home
        </Link>
      </motion.div>
    </div>
  )
}