import React from 'react'
import Link from "next/link"

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "News", href: "/news" },
    ]
  },
  {
    title: "Products",
    links: [
      { label: "LionAGI Platform", href: "/platform" },
      { label: "LionAGI Studio", href: "/studio" },
      { label: "Python Package lionagi", href: "/python-package" },
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Documentation", href: "/documentation" },
      { label: "FAQs", href: "/faq" },
    ]
  },
  {
    title: "More",
    links: [
      { label: "Features", href: "/features" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Component Showcase", href: "/component-showcase" },
    ]
  }
]

export function Footer() {
  return (
    <footer className="py-12 bg-[#111111] text-[#CCCCCC] text-sm">
      <div className="container px-4 mx-auto max-w-6xl">
        <hr className="border-t border-[#333333] mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-[#D4AF37] font-semibold mb-3 text-base">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-[#D4AF37] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          <span className="text-base font-semibold text-white">LionAGI</span>
          <p className="mt-4 md:mt-0 text-xs">&copy; 2024 Lion Intelligence LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}