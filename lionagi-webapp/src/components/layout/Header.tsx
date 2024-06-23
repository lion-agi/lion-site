import React, { useState, useRef, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/router'
import { Button } from "../ui/button"
import { MenuIcon, XIcon } from "../ui/icons"
import { motion, AnimatePresence } from 'framer-motion'

interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    subItems: [
      { label: "LionAGI Platform", href: "/platform" },
      { label: "LionAGI Studio", href: "/studio" },
      { label: "Python Package", href: "/python_package" },
    ]
  },
  {
    label: "Resources",
    href: "/resources",
    subItems: [
      { label: "Documentation", href: "/documentation" },
      { label: "Blog", href: "/blog" },
      { label: "FAQs", href: "/faq" },
    ]
  },
  { label: "About Us", href: "/about-us" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
]

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  )
}

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(prevState => prevState === label ? null : label)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image src="/images/logo.jpg" alt="LionAGI Logo" width={40} height={40} className="rounded-full bg-[#111111]" />
          </motion.div>
          <span className="text-xl font-bold text-white">LionAGI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6" ref={dropdownRef}>
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.subItems ? (
                <button
                  onClick={() => handleDropdownToggle(item.label)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#D4AF37] ${
                    activeDropdown === item.label ? 'text-[#D4AF37]' : 'text-[#CCCCCC]'
                  }`}
                >
                  {item.label}
                  <ChevronDownIcon className="h-4 w-4" />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-[#D4AF37] ${
                    router.pathname === item.href ? 'text-[#D4AF37]' : 'text-[#CCCCCC]'
                  }`}
                >
                  {item.label}
                </Link>
              )}
              <AnimatePresence>
                {activeDropdown === item.label && item.subItems && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 bg-[#111111]/90 backdrop-blur-md py-2 rounded-md shadow-lg min-w-[200px]"
                  >
                    {item.subItems.map((subItem, index) => (
                      <Link
                        key={index}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-[#CCCCCC] hover:text-[#D4AF37] hover:bg-[#222222]"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-[#D4AF37] text-[#111111] hover:bg-[#c9b436]">
              Get Started
            </Button>
          </motion.div>
        </nav>
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </Button>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden"
        >
          <nav className="flex flex-col items-start gap-4 py-4 px-4 bg-[#111111]">
            {navItems.map((item) => (
              <div key={item.label} className="w-full">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className={`flex items-center justify-between w-full text-sm font-medium transition-colors hover:text-[#D4AF37] ${
                        activeDropdown === item.label ? 'text-[#D4AF37]' : 'text-[#CCCCCC]'
                      }`}
                    >
                      {item.label}
                      <ChevronDownIcon className="h-4 w-4" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 pl-4"
                        >
                          {item.subItems.map((subItem, index) => (
                            <Link
                              key={index}
                              href={subItem.href}
                              className="block py-2 text-sm text-[#CCCCCC] hover:text-[#D4AF37]"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block text-sm font-medium transition-colors hover:text-[#D4AF37] ${
                      router.pathname === item.href ? 'text-[#D4AF37]' : 'text-[#CCCCCC]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button className="bg-[#D4AF37] text-[#111111] hover:bg-[#c9b436] w-full">
              Get Started
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  )
}