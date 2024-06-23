import React from 'react'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ComparisonTable } from "@/components/comparison/ComparisonTable"

const faqItems = [
  {
    question: "What is LionAGI?",
    answer: "LionAGI is a cutting-edge AI solution that provides powerful features for LLM orchestration, including prompt engineering, model tuning, real-time inference, monitoring, governance, and scalability."
  },
  {
    question: "How does LionAGI ensure data security?",
    answer: "LionAGI implements industry-leading security measures, including robust encryption, access controls, and regular security audits to ensure your data is protected at all times."
  },
  {
    question: "Can I customize LionAGI for my specific business needs?",
    answer: "Yes, LionAGI offers highly customizable solutions that can be tailored to your unique business requirements, ensuring a perfect fit for your organization."
  },
  {
    question: "What kind of support does LionAGI offer?",
    answer: "LionAGI provides comprehensive support, including 24/7 technical assistance, regular updates, and dedicated account managers to ensure your success with our platform."
  },
  {
    question: "How does LionAGI handle scalability?",
    answer: "LionAGI is designed to seamlessly scale with your growing needs, allowing you to handle increasing workloads and user demands without compromising performance."
  }
]

export default function FAQ() {
  return (
    <div className="bg-[#111111] text-white">
      <Header />
      <main className="pt-16">
        {/* FAQ Section */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-[#0f0f0f] to-[#111111]">
          <div className="container mx-auto px-4 md:px-6 space-y-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F1C40F]">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-[#CCCCCC] text-center max-w-2xl mx-auto">
              Get quick answers to common questions about LionAGI. If you need more information, don't hesitate to contact our support team.
            </p>
            <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#333333]">
                  <AccordionTrigger className="text-left text-lg font-semibold py-4 hover:text-[#D4AF37]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#CCCCCC] pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 md:py-32 bg-[#0f0f0f]">
          <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F1C40F]">
              How We Compare
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-[#CCCCCC] max-w-3xl mx-auto">
              See how LionAGI stacks up against the competition. We pride ourselves on offering superior features, performance, and value.
            </p>
            <ComparisonTable />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}