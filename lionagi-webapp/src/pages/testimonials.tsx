// src/pages/testimonials.tsx
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { TestimonialCarousel } from "@/components/testimonials/TestimonialCarousel"

export default function Testimonials() {
  return (
    <div className="bg-[#111111] text-white">
      <Header />
      <main className="pt-16">
        <section className="py-32 md:py-48 lg:py-64 bg-[#0f0f0f]">
          <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">What Our Customers Say</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#CCCCCC]">
              Hear from businesses that have experienced the power of LionAGI.
            </p>
            <TestimonialCarousel />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
