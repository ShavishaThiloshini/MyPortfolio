import { ArrowRight, Download } from 'lucide-react'
import SocialIcon from '../components/common/SocialIcon'
import { useState } from 'react'
import HeroScene from '../components/3d/HeroScene'
import socialLinks from '../data/socialLinks'
import useMousePosition from '../hooks/useMousePosition'
import useWebGL from '../hooks/useWebGL'

export default function Home() {
  const mousePosition = useMousePosition()
  const isWebGLAvailable = useWebGL()

  // Initialize synchronously to avoid a flash/layout shift.
  const [prefersReducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  const shouldShow3D = isWebGLAvailable && !prefersReducedMotion

  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative flex min-h-dvh scroll-mt-0 items-center overflow-hidden"
    >
      {shouldShow3D && <HeroScene mousePosition={mousePosition} />}

      <div className="page-wrap relative z-10 flex items-center">
        <div className="max-w-3xl">
          <p className="text-label mb-4">Welcome</p>
          <h1
            id="home-heading"
            className="font-heading text-display mb-6 leading-tight"
          >
            Shavisha Thiloshini
          </h1>
          <div className="mb-6 space-y-2 text-secondary-text">
            <p className="text-title">Software Engineering Student</p>
            <p className="text-title">Frontend Developer & UI/UX Designer</p>
            <p className="text-title">Aspiring Educator</p>
          </div>
          <p className="mb-8 max-w-xl text-body text-secondary-text">
            I build accessible, pixel-perfect, and performant web experiences
            with a focus on clean design and thoughtful user interactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#projects"
              className="btn btn-primary"
              aria-label="View my projects"
            >
              <span>Explore My Work</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="/Shavisha_Thiloshini_CV.pdf"
              download
              className="btn btn-secondary"
              aria-label="Download CV as PDF"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="btn-secondary flex size-10 items-center justify-center rounded-md border border-border transition-base hover:border-accent hover:text-accent"
                aria-label={`Visit ${link.name}`}
              >
                <SocialIcon name={link.name} size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 -z-20"
        aria-hidden="true"
        style={{ background: 'var(--gradient-hero)' }}
      />
    </section>
  )
}
