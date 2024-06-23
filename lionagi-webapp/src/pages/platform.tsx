import React from 'react'
import { motion } from 'framer-motion'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Button } from '../components/ui/button'

const features = [
  { title: "Advanced AI Models", description: "Access state-of-the-art AI models trained on diverse datasets." },
  { title: "Easy Integration", description: "Seamlessly integrate AI capabilities into your existing applications." },
  { title: "Scalable Infrastructure", description: "Our platform grows with your needs, handling projects of any size." },
  { title: "Customization Options", description: "Tailor AI models to your specific use cases and requirements." }
]

export default function LionAGIPlatformPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">LionAGI Platform</h1>
          <p className="text-xl max-w-3xl mx-auto">Harness the power of advanced AI to drive innovation and growth for your business.</p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="bg-[#222222] p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-8 text-center">Use Cases</h2>
          <div className="bg-[#222222] p-8 rounded-lg">
            <ul className="list-disc pl-5 space-y-4">
              <li>Natural Language Processing for customer support chatbots</li>
              <li>Computer Vision for quality control in manufacturing</li>
              <li>Predictive Analytics for business intelligence and forecasting</li>
              <li>Recommendation Systems for e-commerce and content platforms</li>
            </ul>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">Ready to Get Started?</h2>
          <p className="mb-8">Experience the power of LionAGI Platform and transform your business today.</p>
          <Button className="bg-[#D4AF37] text-[#111111] hover:bg-[#c9b436] px-8 py-3 rounded-full text-lg font-semibold">
            Request a Demo
          </Button>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}