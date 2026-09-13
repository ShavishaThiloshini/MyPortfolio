import beyondCode from '../data/beyondCode'
import useScrollReveal from '../hooks/useScrollReveal'
import { MessageSquare, GraduationCap, BookOpen, Users } from 'lucide-react'
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'

const iconMap = {
  communication: <MessageSquare size={36} className="text-accent" />,
  teaching: <GraduationCap size={36} className="text-accent" />,
  learning: <BookOpen size={36} className="text-accent" />,
  teamwork: <Users size={36} className="text-accent" />,
}

export default function BeyondCode() {
  const [ref, isVisible] = useScrollReveal()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const listener = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [])

  return (
    <section
      id="beyond-code"
      aria-labelledby="beyond-code-heading"
      className="page-wrap section-space scroll-mt-24"
    >
      <div
        ref={ref}
        className={`transition-slow ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-12">
          <p className="text-label mb-4">Beyond Code</p>
          <h2 id="beyond-code-heading" className="font-heading text-heading">
            Beyond Code
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 perspective-[1000px]">
          {beyondCode.map((item) => (
            <motion.div
              key={item.id}
              whileHover={!prefersReducedMotion ? { scale: 1.02, rotateX: 2, rotateY: -2, y: -4 } : { y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="surface-card border-border hover:border-accent hover:shadow-glow"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="mb-6 flex items-center justify-center size-16 rounded-xl bg-surface border border-border" 
                style={{ transform: !prefersReducedMotion ? 'translateZ(30px)' : 'none' }}
              >
                {iconMap[item.id]}
              </div>
              <div style={{ transform: !prefersReducedMotion ? 'translateZ(20px)' : 'none' }}>
                <h3 className="font-heading text-title mb-3 text-primary-text">
                  {item.title}
                </h3>
                <p className="text-body text-secondary-text">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
