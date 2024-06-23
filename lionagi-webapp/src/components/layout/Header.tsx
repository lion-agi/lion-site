import React, { useState } from 'react'
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
      { label: "Product 1", href: "/products/1" },
      { label: "Product 2", href: "/products/2" },
      { label: "Product 3", href: "/products/3" },
    ]
  },
  {
    label: "Developers",
    href: "/developers",
    subItems: [
      { label: "API Documentation", href: "/developers/api" },
      { label: "SDKs", href: "/developers/sdks" },
      { label: "Tutorials", href: "/developers/tutorials" },
    ]
  },
  { label: "Blogs", href: "/blogs" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
]

const DropdownMenu: React.FC<{ items: { label: string; href: string }[] }> = ({ items }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="absolute top-full left-0 bg-[#111111]/90 backdrop-blur-md py-2 rounded-b-md shadow-lg"
  >
    {items.map((item, index) => (
      <Link
        key={index}
        href={item.href}
        className="block px-4 py-2 text-sm text-[#CCCCCC] hover:text-[#D4AF37] hover:bg-[#222222]"
      >
        {item.label}
      </Link>
    ))}
  </motion.div>
)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const router = useRouter()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src="/images/logo.jpg" alt="LionAGI Logo" width={40} height={40} className="rounded-full bg-[#111111]" />
          </motion.div>
          <span className="text-xl font-bold text-white">LionAGI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#D4AF37] ${
                  router.pathname === item.href ? 'text-[#D4AF37]' : 'text-[#CCCCCC]'
                }`}
              >
                {item.label}
              </Link>
              <AnimatePresence>
                {hoveredItem === item.label && item.subItems && (
                  <DropdownMenu items={item.subItems} />
                )}
              </AnimatePresence>
            </div>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
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
          <nav className="flex flex-col items-center gap-4 py-4 bg-[#111111]">
            {navItems.map((item) => (
              <div key={item.label} className="w-full">
                <Link
                  href={item.href}
                  className={`block text-sm font-medium transition-colors hover:text-[#D4AF37] ${
                    router.pathname === item.href ? 'text-[#D4AF37]' : 'text-[#CCCCCC]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <div className="pl-4 mt-2">
                    {item.subItems.map((subItem, index) => (
                      <Link
                        key={index}
                        href={subItem.href}
                        className="block py-1 text-xs text-[#CCCCCC] hover:text-[#D4AF37]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button className="bg-[#D4AF37] text-[#111111] hover:bg-[#c9b436]">
              Get Started
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  )
}