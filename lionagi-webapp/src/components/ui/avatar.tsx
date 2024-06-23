// src/components/ui/avatar.tsx
import React from 'react'

interface AvatarProps {
  src?: string
  alt?: string
  fallback?: string
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback }) => {
  return (
    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
      {src ? (
        <img className="w-full h-full object-cover" src={src} alt={alt || 'Avatar'} />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-gray-300 text-gray-600">
          {fallback || alt?.charAt(0) || '?'}
        </div>
      )}
    </div>
  )
}

export const AvatarImage: React.FC<{ src: string; alt?: string }> = ({ src, alt }) => (
  <img className="w-full h-full object-cover" src={src} alt={alt || 'Avatar'} />
)

export const AvatarFallback: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center justify-center w-full h-full bg-gray-300 text-gray-600">
    {children}
  </div>
)