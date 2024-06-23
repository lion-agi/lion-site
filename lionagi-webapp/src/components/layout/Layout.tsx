import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      {/* Add header, navigation, etc. here */}
      <main>{children}</main>
      {/* Add footer here */}
    </div>
  )
}