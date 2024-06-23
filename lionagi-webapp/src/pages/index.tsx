import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { PauseIcon, TimerIcon, InfoIcon, MonitorIcon, GlobeIcon, ScalingIcon, ArrowRightIcon } from "@/components/ui/icons"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const features = [
  { icon: PauseIcon, title: "Prompt Engineering", description: "Leverage advanced prompt engineering techniques to fine-tune your LLMs for specific tasks and use cases.", id: "prompt-engineering" },
  { icon: TimerIcon, title: "Model Tuning", description: "Easily fine-tune your LLMs with custom datasets and hyperparameters for optimal performance.", id: "model-tuning" },
  { icon: InfoIcon, title: "Real-Time Inference", description: "Leverage LionAGI's scalable infrastructure for real-time inference, with low latency and high throughput.", id: "real-time-inference" },
  { icon: MonitorIcon, title: "Monitoring & Observability", description: "Gain deep insights into your LLM's performance with comprehensive monitoring and observability tools.", id: "monitoring-observability" },
  { icon: GlobeIcon, title: "Governance & Security", description: "Ensure compliance and security with LionAGI's robust governance and access control features.", id: "governance-security" },
  { icon: ScalingIcon, title: "Scalability", description: "Seamlessly scale your LLM infrastructure to handle growing workloads and user demands.", id: "scalability" },
]

const testimonials = [
  {
    content: "LionAGI has revolutionized our business operations. Their AI solutions have streamlined our processes and increased our efficiency tenfold.",
    author: "John Doe",
    position: "CEO, Acme Inc."
  },
  {
    content: "The customizable AI solutions from LionAGI have given us a competitive edge in our industry. Highly recommended!",
    author: "Jane Smith",
    position: "CTO, Tech Innovators"
  },
  {
    content: "LionAGI's commitment to security and speed has made them our go-to partner for all our AI needs. Simply outstanding.",
    author: "Mark Johnson",
    position: "Director of Operations, Global Solutions"
  },
]

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#111111] text-white">
      <Header />
      <main>
        {/* Hero Section with Background Image */}
        <section className="relative h-screen">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/homepage1.jpg" 
              alt="LionAGI AI Visualization" 
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60" />
          </div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center text-white">
              Welcome to LionAGI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center max-w-3xl">
              Empowering businesses with advanced AI solutions for unparalleled growth and innovation.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-[#D4AF37] hover:bg-[#c9b436] text-[#111111]"
                onClick={() => scrollToSection('features')}
              >
                Explore Features
              </Button>
              <Link href="/contact" passHref>
                <Button variant="outline" size="lg" className="text-[#D4AF37] border-[#D4AF37] hover:bg-[#D4AF37]/20">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Overview Section */}
        <section id="features" className="py-20 bg-[#0f0f0f]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#D4AF37]">Our Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#1f1f1f] rounded-lg p-6 space-y-4 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => scrollToSection(feature.id)}
                >
                  <feature.icon className="h-8 w-8 text-[#d4af37]" />
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-[#cccccc]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-gradient-to-b from-[#111111] to-[#0f0f0f]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#D4AF37]">What Our Customers Say</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 h-full">
                    <div className="p-4 h-full">
                      <div className="bg-[#1a1a1a] rounded-lg p-6 h-full border border-[#333333] shadow-lg transition-all duration-300 hover:shadow-[#D4AF37]/20 hover:border-[#D4AF37]/50 flex flex-col justify-between">
                        <p className="text-gray-300 mb-4 flex-grow">{testimonial.content}</p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#111111] font-bold text-lg mr-3">
                            {testimonial.author[0]}
                          </div>
                          <div>
                            <p className="font-semibold text-[#D4AF37]">{testimonial.author}</p>
                            <p className="text-sm text-gray-400">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37]" />
              <CarouselNext className="right-0 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37]" />
            </Carousel>
          </div>
        </section>

        {/* Detailed Feature Sections */}
        {features.map((feature, index) => (
          <section key={index} id={feature.id} className="py-16 md:py-24 bg-[#111111]">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center gap-12">
                <div className="space-y-6 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] flex items-center justify-center gap-4">
                    <feature.icon className="h-8 w-8" />
                    {feature.title}
                  </h2>
                  <p className="text-lg text-[#cccccc] max-w-2xl">{feature.description}</p>
                  {/* Add more detailed description or benefits here */}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Call to Action Section */}
        <section className="py-20 bg-[#0f0f0f]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#D4AF37]/20 to-[#F1C40F]/20 rounded-xl p-8">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D4AF37]">Ready to Transform Your Business?</h2>
                <p className="text-lg text-gray-300">
                  Discover how LionAGI's AI solutions can drive innovation and growth for your company.
                </p>
              </div>
              <div>
                <Link href="/contact" passHref>
                  <Button size="lg" className="bg-[#D4AF37] hover:bg-[#c9b436] text-[#111111] text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-[#D4AF37]/50 hover:scale-105">
                    Get Started Today
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}