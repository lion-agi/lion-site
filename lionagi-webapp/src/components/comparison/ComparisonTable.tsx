// src/components/comparison/ComparisonTable.tsx
import React from 'react'
import Link from 'next/link'
import { CheckIcon, XIcon } from '../ui/icons'

const features = [
  { name: "Lightning-fast Response", lionagi: true, competitorA: false, competitorB: true },
  { name: "Industry-leading Security", lionagi: true, competitorA: true, competitorB: false },
  { name: "Customizable Solutions", lionagi: true, competitorA: false, competitorB: false },
]

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="py-4 px-6 text-left text-white font-medium">Feature</th>
            <th className="py-4 px-6 text-center text-white font-medium bg-[#D4AF37]">LionAGI</th>
            <th className="py-4 px-6 text-center text-white font-medium">Competitor A</th>
            <th className="py-4 px-6 text-center text-white font-medium">Competitor B</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index}>
              <td className="py-4 px-6 text-left text-[#CCCCCC] font-medium">{feature.name}</td>
              <td className="py-4 px-6 text-center">
                <Link href="#">
                  {feature.lionagi ? <CheckIcon className="w-6 h-6 text-[#D4AF37] mx-auto" /> : <XIcon className="w-6 h-6 text-[#CCCCCC] mx-auto" />}
                </Link>
              </td>
              <td className="py-4 px-6 text-center">
                <Link href="#">
                  {feature.competitorA ? <CheckIcon className="w-6 h-6 text-[#CCCCCC] mx-auto" /> : <XIcon className="w-6 h-6 text-[#CCCCCC] mx-auto" />}
                </Link>
              </td>
              <td className="py-4 px-6 text-center">
                <Link href="#">
                  {feature.competitorB ? <CheckIcon className="w-6 h-6 text-[#CCCCCC] mx-auto" /> : <XIcon className="w-6 h-6 text-[#CCCCCC] mx-auto" />}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}