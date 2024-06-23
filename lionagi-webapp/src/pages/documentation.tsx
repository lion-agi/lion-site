import React from 'react'
import { motion } from 'framer-motion'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import Link from 'next/link'

const docSections = [
  {
    title: "Getting Started",
    items: [
      { name: "Quick Start Guide", link: "/docs/quick-start" },
      { name: "Installation", link: "/docs/installation" },
      { name: "Basic Concepts", link: "/docs/basic-concepts" },
    ]
  },
  {
    title: "LionAGI Platform",
    items: [
      { name: "Platform Overview", link: "/docs/platform-overview" },
      { name: "API Reference", link: "/docs/api-reference" },
      { name: "Model Training", link: "/docs/model-training" },
    ]
  },
  {
    title: "LionAGI Studio",
    items: [
      { name: "Studio Interface", link: "/docs/studio-interface" },
      { name: "Project Management", link: "/docs/project-management" },
      { name: "Deployment", link: "/docs/deployment" },
    ]
  },
  {
    title: "Python Package",
    items: [
      { name: "Package Overview", link: "/docs/package-overview" },
      { name: "Functions Reference", link: "/docs/functions-reference" },
      { name: "Advanced Usage", link: "/docs/advanced-usage" },
    ]
  }
]

export default function DocumentationPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">Documentation</h1>
          <p className="text-xl max-w-3xl mx-auto">Comprehensive guides and references for LionAGI products and services.</p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {docSections.map((section, index) => (
              <motion.div 
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="bg-[#222222] p-6 rounded-lg"
              >
                <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link href={item.link} className="hover:text-[#D4AF37] transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">Need Help?</h2>
          <p className="mb-8">Can't find what you're looking for? Our support team is here to assist you.</p>
          <Link href="/contact" className="bg-[#D4AF37] text-[#111111] hover:bg-[#c9b436] px-8 py-3 rounded-full text-lg font-semibold">
            Contact Support
          </Link>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}