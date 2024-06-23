// src/components/FAQAccordion.tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What is LionAGI?",
    answer: "LionAGI is a cutting-edge AI orchestration platform that provides powerful features for managing and optimizing large language models (LLMs). It offers capabilities such as prompt engineering, model tuning, real-time inference, monitoring, and scalability."
  },
  {
    question: "How does LionAGI ensure data security?",
    answer: "LionAGI implements industry-leading security measures, including robust encryption, access controls, and regular security audits. We also comply with major data protection regulations to ensure your data is protected at all times."
  },
  {
    question: "Can I customize LionAGI for my specific business needs?",
    answer: "Yes, LionAGI offers highly customizable solutions that can be tailored to your unique business requirements. Our flexible platform allows you to adapt our AI solutions to fit your specific use cases and workflows."
  },
  {
    question: "What kind of support does LionAGI offer?",
    answer: "LionAGI provides comprehensive support, including 24/7 technical assistance, regular updates, and dedicated account managers. We also offer extensive documentation, tutorials, and a community forum to help you get the most out of our platform."
  },
  {
    question: "How does LionAGI handle scalability?",
    answer: "LionAGI is designed to seamlessly scale with your growing needs. Our cloud-native architecture allows you to handle increasing workloads and user demands without compromising performance. We also offer auto-scaling capabilities to optimize resource usage."
  }
]

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}