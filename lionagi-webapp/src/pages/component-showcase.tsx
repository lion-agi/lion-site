import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card'
import { Tooltip, TooltipTrigger, TooltipContent } from '../components/ui/tooltip'
import { FeatureCard } from '../components/features/FeatureCard'
import { TestimonialCard } from '../components/testimonials/TestimonialCard'
import { ComparisonTable } from '../components/comparison/ComparisonTable'
import { FAQAccordion } from '../components/FAQAccordion'
import { ContactForm } from '../components/ContactForm'
import { BoltIcon, ShieldIcon, SettingsIcon } from '../components/ui/icons'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        LionAGI Component Showcase
      </motion.h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
        <nav className="flex space-x-4">
          <Link href="/features" passHref>
            <Button variant="outline">Features</Button>
          </Link>
          <Link href="/testimonials" passHref>
            <Button variant="outline">Testimonials</Button>
          </Link>
          <Link href="/comparison" passHref>
            <Button variant="outline">Comparison</Button>
          </Link>
          <Link href="/faq" passHref>
            <Button variant="outline">FAQ</Button>
          </Link>
        </nav>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">UI Components</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Card Component</CardTitle>
              <CardDescription>This is an example of the Card component.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content goes here.</p>
            </CardContent>
          </Card>

          <div>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip!</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Feature Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard icon={BoltIcon} title="Fast Performance" description="Lightning-quick response times for your AI needs." />
          <FeatureCard icon={ShieldIcon} title="Secure" description="Top-notch security for your data and models." />
          <FeatureCard icon={SettingsIcon} title="Customizable" description="Tailor the platform to your specific requirements." />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Testimonial</h2>
        <TestimonialCard 
          content="LionAGI has transformed our AI operations. Highly recommended!"
          author="Jane Doe"
          role="CTO, Tech Inc."
          avatarSrc="/placeholder-avatar.jpg"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Comparison Table</h2>
        <ComparisonTable />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <FAQAccordion />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
        <ContactForm />
      </section>
    </div>
  )
}