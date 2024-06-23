import React from 'react'
import { motion } from 'framer-motion'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Button } from '../components/ui/button'

const studioFeatures = [
  { title: "Intuitive Interface", description: "User-friendly design for both beginners and experienced developers." },
  { title: "Collaborative Workspace", description: "Real-time collaboration tools for team projects." },
  { title: "Integrated AI Libraries", description: "Access to popular AI frameworks and pre-trained models." },
  { title: "Version Control", description: "Built-in version control for easy tracking of project changes." }
]

export default function LionAGIStudioPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">LionAGI Studio</h1>
          <p className="text-xl max-w-3xl mx-auto">Your all-in-one AI development environment for building, testing, and deploying intelligent applications.</p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-8 text-center">Studio Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studioFeatures.map((feature, index) => (
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
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-8 text-center">Streamlined Workflow</h2>
          <div className="bg-[#222222] p-8 rounded-lg">
            <ol className="list-decimal pl-5 space-y-4">
              <li>Design your AI model using our intuitive drag-and-drop interface</li>
              <li>Train your model with our integrated data processing tools</li>
              <li>Test and refine your model with real-time performance metrics</li>
              <li>Deploy your AI solution directly from the Studio to our scalable cloud infrastructure</li>
            </ol>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-8 text-center">Why Choose LionAGI Studio?</h2>
          <div className="bg-[#222222] p-8 rounded-lg">
            <ul className="list-disc pl-5 space-y-4">
              <li>Accelerate your AI development process with our comprehensive toolset</li>
              <li>Reduce complexity with our user-friendly interface and pre-built components</li>
              <li>Seamless integration with LionAGI Platform for end-to-end AI solution development</li>
              <li>Continuous updates and support to keep you at the forefront of AI technology</li>
            </ul>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">Start Building with LionAGI Studio</h2>
          <p className="mb-8">Experience the future of AI development and bring your ideas to life.</p>
          <Button className="bg-[#D4AF37] text-[#111111] hover:bg-[#c9b436] px-8 py-3 rounded-full text-lg font-semibold">
            Try LionAGI Studio
          </Button>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}