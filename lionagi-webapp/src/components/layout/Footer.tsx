import React from 'react'
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 bg-black">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <span className="text-lg font-semibold text-white">LionAGI</span>
          <p className="mt-4 text-sm text-muted-foreground md:mt-0">&copy; 2024 Lion Intelligence LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}