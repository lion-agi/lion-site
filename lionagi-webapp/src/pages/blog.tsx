import React from 'react'
import { motion } from 'framer-motion'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import Link from 'next/link'

const featuredPost = {
  title: "The Future of AI: Trends to Watch in 2024",
  excerpt: "Explore the cutting-edge developments shaping the AI landscape this year, from advanced natural language processing to ethical AI practices.",
  date: "2024-03-01",
  author: "Dr. Jane Smith",
  slug: "future-of-ai-2024"
}

const recentPosts = [
  {
    title: "Implementing AI in Healthcare: Challenges and Opportunities",
    excerpt: "Discover how AI is revolutionizing healthcare and the hurdles faced in its implementation.",
    date: "2024-02-15",
    author: "John Doe",
    slug: "ai-in-healthcare"
  },
  {
    title: "Building Ethical AI Systems: A Guide for Developers",
    excerpt: "Learn about the key considerations and best practices for developing AI systems with ethics in mind.",
    date: "2024-01-30",
    author: "Emma Johnson",
    slug: "ethical-ai-development"
  },
  {
    title: "AI and Climate Change: How Machine Learning is Helping to Save the Planet",
    excerpt: "Explore the innovative ways AI is being used to combat climate change and promote sustainability.",
    date: "2024-01-15",
    author: "Dr. Michael Chen",
    slug: "ai-and-climate-change"
  }
]

export default function BlogPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">LionAGI Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">Insights, updates, and thought leadership on AI and its impact on various industries.</p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-8">Featured Post</h2>
          <div className="bg-[#222222] p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-[#D4AF37] mb-4">
              <Link href={`/blog/${featuredPost.slug}`} className="hover:underline">
                {featuredPost.title}
              </Link>
            </h3>
            <p className="mb-4">{featuredPost.excerpt}</p>
            <p className="text-sm text-[#999999]">
              {featuredPost.date} | By {featuredPost.author}
            </p>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-8">Recent Posts</h2>
          <div className="space-y-8">
            {recentPosts.map((post, index) => (
              <motion.article 
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="bg-[#222222] p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="mb-4">{post.excerpt}</p>
                <p className="text-sm text-[#999999]">
                  {post.date} | By {post.author}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link href="/blog/archive" className="text-[#D4AF37] hover:underline text-lg">
            View All Posts
          </Link>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}