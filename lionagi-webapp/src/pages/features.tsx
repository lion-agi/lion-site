import React from 'react'
import Image from 'next/image'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { PauseIcon, TimerIcon, InfoIcon, MonitorIcon, GlobeIcon, ScalingIcon, ShieldIcon, BrainIcon, CloudIcon } from "@/components/ui/icons"
import Link from 'next/link'

const features = [
  {
    icon: PauseIcon,
    title: "Prompt Engineering",
    shortDescription: "Leverage advanced prompt engineering techniques to fine-tune your LLMs for specific tasks and use cases.",
    fullDescription: "LionAGI provides advanced prompt engineering techniques to help you fine-tune your LLMs for specific tasks and use cases. Our platform allows you to easily experiment with different prompt structures, incorporate context and metadata, and leverage techniques like few-shot learning and prompt chaining.",
    benefits: [
      "Advanced prompt structuring and formatting",
      "Context and metadata incorporation",
      "Few-shot learning and prompt chaining",
      "Collaborative prompt engineering",
      "Performance analysis and optimization"
    ],
    id: "prompt-engineering"
  },
  {
    icon: TimerIcon,
    title: "Model Tuning",
    shortDescription: "Easily fine-tune your LLMs with custom datasets and hyperparameters for optimal performance.",
    fullDescription: "LionAGI enables you to easily fine-tune your LLMs with custom datasets and hyperparameters for optimal performance. Our platform supports a wide range of model types and provides a streamlined workflow for data preparation, model training, and evaluation.",
    benefits: [
      "Custom dataset support",
      "Hyperparameter tuning",
      "Support for various model types (GPT, BERT, RoBERTa, etc.)",
      "Streamlined workflow for data preparation, training, and evaluation",
      "Performance optimization and efficiency"
    ],
    id: "model-tuning"
  },
  {
    icon: InfoIcon,
    title: "Real-Time Inference",
    shortDescription: "Leverage LionAGI's scalable infrastructure for real-time inference, with low latency and high throughput.",
    fullDescription: "LionAGI's scalable infrastructure enables real-time inference for your LLMs, ensuring low latency and high throughput. Whether you're building a conversational AI assistant, a content generation tool, or a real-time data processing pipeline, our platform can handle your most demanding workloads.",
    benefits: [
      "Low-latency inference",
      "High throughput and scalability",
      "Advanced caching and optimization",
      "Real-time monitoring and observability",
      "Ideal for conversational AI, content generation, and data processing"
    ],
    id: "real-time-inference"
  },
  {
    icon: MonitorIcon,
    title: "Monitoring & Observability",
    shortDescription: "Gain deep insights into your LLM's performance with comprehensive monitoring and observability tools.",
    fullDescription: "LionAGI provides comprehensive monitoring and observability tools to help you gain deep insights into your LLM's performance. Our platform offers real-time monitoring dashboards, detailed logs, and custom metrics, allowing you to track key performance indicators (KPIs) and identify potential issues or bottlenecks.",
    benefits: [
      "Real-time performance dashboards",
      "Custom metrics and KPI tracking",
      "Detailed logs and error analysis",
      "Anomaly detection and alerts",
      "Historical performance data and trends"
    ],
    id: "monitoring-observability"
  },
  {
    icon: GlobeIcon,
    title: "Governance & Security",
    shortDescription: "Ensure compliance and security with LionAGI's robust governance and access control features.",
    fullDescription: "LionAGI provides robust governance and access control features to ensure compliance and security for your LLM deployments. Our platform supports role-based access control (RBAC), allowing you to define granular permissions and restrict access to sensitive data or models.",
    benefits: [
      "Role-based access control (RBAC)",
      "Data encryption and secure model storage",
      "Audit logs and compliance reporting",
      "Integration with enterprise identity providers",
      "Customizable security policies"
    ],
    id: "governance-security"
  },
  {
    icon: ScalingIcon,
    title: "Scalability",
    shortDescription: "Seamlessly scale your LLM infrastructure to handle growing workloads and user demands.",
    fullDescription: "LionAGI's platform is designed for seamless scalability, allowing you to easily scale your LLM infrastructure to handle growing workloads and user demands. Whether you're serving a handful of users or millions, our platform ensures consistent performance and reliability.",
    benefits: [
      "Automatic scaling based on demand",
      "Multi-region deployment support",
      "Load balancing and traffic management",
      "Efficient resource utilization",
      "Cost-effective scaling options"
    ],
    id: "scalability"
  },
  {
    icon: BrainIcon,
    title: "Continuous Learning",
    shortDescription: "Implement continuous learning pipelines to keep your models up-to-date with the latest data.",
    fullDescription: "LionAGI's continuous learning feature allows you to implement automated pipelines that keep your models updated with the latest data. This ensures your LLMs remain relevant and accurate over time, adapting to new information and changing contexts.",
    benefits: [
      "Automated data ingestion and preprocessing",
      "Scheduled model retraining",
      "Version control for models and datasets",
      "Performance comparison between model versions",
      "Easy rollback to previous model versions"
    ],
    id: "continuous-learning"
  },
  {
    icon: CloudIcon,
    title: "Multi-Cloud Support",
    shortDescription: "Deploy and manage your LLMs across multiple cloud providers for maximum flexibility and redundancy.",
    fullDescription: "LionAGI offers multi-cloud support, allowing you to deploy and manage your LLMs across various cloud providers. This flexibility enables you to optimize for cost, performance, and compliance while ensuring high availability and disaster recovery.",
    benefits: [
      "Support for major cloud providers (AWS, Azure, GCP)",
      "Unified management interface across clouds",
      "Cross-cloud data replication and synchronization",
      "Cloud-agnostic model deployment",
      "Cost optimization across multiple providers"
    ],
    id: "multi-cloud-support"
  },
  {
    icon: ShieldIcon,
    title: "Bias Detection & Mitigation",
    shortDescription: "Identify and mitigate biases in your LLMs to ensure fair and ethical AI deployment.",
    fullDescription: "LionAGI's bias detection and mitigation tools help you identify and address potential biases in your LLMs. Our platform provides comprehensive analysis of model outputs, highlighting potential areas of concern and offering strategies for mitigation.",
    benefits: [
      "Automated bias detection in model outputs",
      "Customizable fairness metrics and thresholds",
      "Bias mitigation strategies and recommendations",
      "Continuous monitoring for emerging biases",
      "Ethical AI deployment guidelines and best practices"
    ],
    id: "bias-detection-mitigation"
  }
]

export default function Features() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#111111] text-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-gradient-to-br from-[#111111] to-[#1f1f1f]">
          <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-no-repeat bg-cover bg-center opacity-10" />
          <div className="container mx-auto flex h-full items-center justify-center px-4 md:px-6">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F1C40F]">
                Powerful Features for LLM Orchestration
              </h1>
              <p className="max-w-xl mx-auto text-lg text-[#cccccc]">
                LionAGI provides a comprehensive suite of features to streamline the orchestration of large language
                models (LLMs), enabling efficient prompt engineering, model tuning, real-time inference, monitoring,
                governance, and scalability.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
                <Button className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#c9b436] text-[#111111]">Get Started</Button>
                <Button variant="outline" className="w-full sm:w-auto text-[#D4AF37] border-[#D4AF37] hover:bg-[#D4AF37]/20">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#1f1f1f] rounded-lg p-6 space-y-4 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => scrollToSection(feature.id)}
                >
                  <feature.icon className="h-8 w-8 text-[#d4af37]" />
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-[#cccccc]">{feature.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Feature Sections */}
        {features.map((feature, index) => (
          <section key={feature.id} id={feature.id} className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
                <div className="md:w-1/2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] flex items-center gap-4">
                    <feature.icon className="h-8 w-8" />
                    {feature.title}
                  </h2>
                  <p className="text-lg text-[#cccccc]">{feature.fullDescription}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#D4AF37] mr-2">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-video bg-[#1f1f1f] rounded-lg overflow-hidden">
                    {/* Placeholder for image */}
                    <div className="w-full h-full flex items-center justify-center text-[#D4AF37]">
                      Image for {feature.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section className="bg-[#1f1f1f] py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center space-y-4">
            <h2 className="text-4xl font-bold text-[#D4AF37]">Start Your Free Trial Today</h2>
            <p className="text-lg text-[#cccccc] max-w-2xl mx-auto">
              Experience the power of LionAGI with our free trial. Get started today and see how our platform can
              streamline your LLM workflows.
            </p>
            <Button className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#c9b436] text-[#111111]">Start Free Trial</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}