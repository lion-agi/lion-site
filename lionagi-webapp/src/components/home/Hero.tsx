// src/components/home/Hero.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/components/ui/icons"
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section id="hero" className="relative py-20 md:py-32 lg:py-48 overflow-hidden bg-[#0f0f0f]">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-6">
        <motion.h1 
          className="text-3xl md:text-5xl lg:text-6xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Unlock the Power of AI with LionAGI
        </motion.h1>
        <motion.p 
          className="text-base md:text-lg lg:text-xl text-[#CCCCCC] max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Revolutionize your business with our cutting-edge AI solutions.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button variant="solid" className="bg-[#D4AF37] text-[#111111] hover:bg-[#c9b436] transition-colors">
            Start Free Trial
          </Button>
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 text-[#D4AF37] hover:text-[#c9b436] transition-colors"
          >
            Schedule a Demo
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#111111]/80 to-[#111111] opacity-50" />
      <img
        src="/images/hero-background.jpg"
        alt="Hero Background"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover object-center -z-20 scale-105 blur-sm"
      />
    </section>
  )
}