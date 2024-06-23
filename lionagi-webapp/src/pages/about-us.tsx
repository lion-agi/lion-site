import React from 'react'
import { motion } from 'framer-motion'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#CCCCCC]">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">About LionAGI</h1>
          <p className="text-xl max-w-3xl mx-auto">Empowering businesses with advanced AI solutions for unparalleled growth and innovation.</p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">Our Mission</h2>
          <p className="mb-4">At LionAGI, we're on a mission to democratize artificial intelligence and make it accessible to businesses of all sizes. We believe that AI has the power to transform industries and drive innovation, and we're committed to providing the tools and expertise needed to harness this potential.</p>
          <p>Our team of dedicated experts works tirelessly to develop cutting-edge AI solutions that are both powerful and user-friendly, enabling our clients to stay ahead in an increasingly competitive landscape.</p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-[#222222] p-6 rounded-lg">
                <div className="w-32 h-32 bg-[#333333] rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">Team Member {member}</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            ))}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}