// src/components/LazyImage.tsx
import { useState, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'

interface LazyImageProps extends ImageProps {
  threshold?: number
}

export function LazyImage({ threshold = 0.1, ...props }: LazyImageProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    const element = document.getElementById(props.id || '')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [props.id, threshold])

  return (
    <div id={props.id} className="relative" style={{ height: props.height }}>
      {isVisible && <Image {...props} />}
    </div>
  )
}