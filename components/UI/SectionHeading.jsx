import React from 'react'
import { cn } from '@/lib/utils'

export default function SectionHeading({ title, className, textColor = "text-gray-900" }) {
  return (
    <h2 className={cn(`text-3xl md:text-4xl font-bold mb-10 text-center ${textColor}`, className)}>
      {title}
    </h2>
  )
}
