import React from 'react'
import { motion } from 'framer-motion'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Button } from '../components/ui/button'

const codeExample = `
import lionagi as lai

# Initialize a LionAGI model
model = lai.Model('text-generation')

# Generate text
result = model.generate("Once upon a time")

print(result)
`

export default function PythonPackageLionAGIPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">Python Package lionagi</h1>
          <p className="text-xl max-w-3xl mx-auto">Integrate powerful AI capabilities into your Python projects with ease.</p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-8">Features</h2>
          <ul className="list-disc pl-5 space-y-4 bg-[#222222] p-6 rounded-lg">
            <li>Easy-to-use API for common AI tasks</li>
            <li>Pre-trained models for text, image, and speech processing</li>
            <li>Customizable model architectures</li>
            <li>Efficient data handling and preprocessing tools</li>
            <li>Seamless integration with popular Python libraries</li>
          </ul>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-8">Installation</h2>
          <div className="bg-[#222222] p-6 rounded-lg">
            <p className="mb-4">Install lionagi using pip:</p>
            <pre className="bg-[#333333] p-4 rounded overflow-x-auto">
              <code>pip install lionagi</code>
            </pre>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-8">Quick Start</h2>
          <div className="bg-[#222222] p-6 rounded-lg">
            <p className="mb-4">Here's a simple example to get you started:</p>
            <pre className="bg-[#333333] p-4 rounded overflow-x-auto">
              <code>{codeExample}</code>
            </pre>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">Ready to Get Started?</h2>
          <p className="mb-8">Explore our comprehensive documentation to learn more about lionagi's capabilities.</p>
          <Button className="bg-[#D4AF37] text-[#111111] hover:bg-[#c9b436] px-8 py-3 rounded-full text-lg font-semibold">
            View Documentation
          </Button>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}