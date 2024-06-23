// src/components/features/FeatureCard.tsx
import React from 'react'
import { IconProps } from "../ui/icons"

interface FeatureCardProps {
  icon: React.ComponentType<IconProps>
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-[#222222] rounded-lg p-6 text-left space-y-4">
      <Icon className="h-8 w-8 text-[#D4AF37]" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-[#CCCCCC]">{description}</p>
    </div>
  )
}