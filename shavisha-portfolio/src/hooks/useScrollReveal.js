import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook that observes when a ref enters the viewport and sets
 * isVisible to true. Respects prefers-reduced-motion by immediately
 * marking as visible (skipping the animation) when the user prefers
 * reduced motion.
 */
export default function useScrollReveal() {
  // Initialize synchronously so there's no extra render cycle.
  const [prefersReducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [isVisible, setIsVisible] = useState(prefersReducedMotion)
  const ref = useRef(null)

  useEffect(() => {
    // If reduced motion is already set, nothing to observe.
    if (prefersReducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [prefersReducedMotion])

  return [ref, isVisible]
}
