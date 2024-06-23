import React from 'react'
import { motion } from 'framer-motion'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

const newsItems = [
  {
    id: 1,
    title: "LionAGI Launches New AI Platform",
    date: "2024-03-15",
    excerpt: "We're excited to announce the launch of our new AI platform, designed to revolutionize how businesses interact with artificial intelligence.",
    imageUrl: "/placeholder-image-1.jpg"
  },
  {
    id: 2,
    title: "Partnership with Leading Tech Firm Announced",
    date: "2024-02-28",
    excerpt: "LionAGI has partnered with a leading tech firm to bring cutting-edge AI solutions to a wider audience. This collaboration marks a significant milestone in our growth.",
    imageUrl: "/placeholder-image-2.jpg"
  },
  {
    id: 3,
    title: "AI Ethics: Our Commitment to Responsible Innovation",
    date: "2024-02-10",
    excerpt: "At LionAGI, we believe in the responsible development and deployment of AI. Read about our commitment to ethical AI practices and how we're leading the way in this crucial area.",
    imageUrl: "/placeholder-image-3.jpg"
  }
]

export default function NewsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">LionAGI News</h1>
          <p className="text-xl max-w-3xl mx-auto">Stay up to date with the latest developments, announcements, and insights from LionAGI.</p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {newsItems.map((item, index) => (
            <motion.article 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="mb-12 bg-[#222222] p-6 rounded-lg flex flex-col md:flex-row gap-6"
            >
              <div className="md:w-1/3">
                <div className="aspect-video bg-[#333333] rounded-lg"></div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold text-[#D4AF37] mb-2">{item.title}</h2>
                <p className="text-sm text-[#999999] mb-4">{item.date}</p>
                <p className="mb-4">{item.excerpt}</p>
                <a href="#" className="text-[#D4AF37] hover:underline">Read more</a>
              </div>
            </motion.article>
          ))}
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}