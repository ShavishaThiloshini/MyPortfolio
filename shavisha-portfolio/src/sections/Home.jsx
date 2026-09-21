import { ArrowRight, Download } from 'lucide-react'
import SocialIcon from '../components/common/SocialIcon'
import socialLinks from '../data/socialLinks'
import heroImage from '../assets/images/Hero1.png'
import heroMobileImage from '../assets/images/hero_mobile_laptop.jpg'
import useTypingEffect from '../hooks/useTypingEffect'

const ROLES = [
  'Software Engineering Student',
  'Frontend Developer & UI/UX Designer',
  'Aspiring Educator',
]

export default function Home() {
  const { displayText, isTyping } = useTypingEffect(ROLES)
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative flex min-h-dvh scroll-mt-0 items-center overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-accent-highlight/10 blur-[100px] pointer-events-none" />

      {/* High-quality background image */}
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroMobileImage} />
          <img
            src={heroImage}
            alt="Space background"
            className="w-full h-full object-cover transition-all duration-300"
          />
        </picture>
      </div>

      <div className="page-wrap relative z-10 flex items-center">
        <div className="max-w-3xl">
          <p className="text-label mb-4">Welcome</p>
          <h1
            id="home-heading"
            className="font-heading text-display mb-6 leading-tight drop-shadow-lg"
          >
            Shavisha Thiloshini
          </h1>
          {/* Animated typing roles — fixed height prevents layout shift */}
          <div className="mb-6 h-8 flex items-center">
            <p className="text-title text-secondary-text">
              {displayText}
              <span
                className="typing-cursor"
                aria-hidden="true"
                style={{ opacity: isTyping ? undefined : 0 }}
              />
            </p>
          </div>
          <p className="mb-8 max-w-xl text-body text-secondary-text">
            I build accessible, pixel-perfect, and performant web experiences
            with a focus on clean design and thoughtful user interactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-12 mt-2">
            <a
              href="#projects"
              className="btn btn-primary w-full sm:w-auto"
              aria-label="View my projects"
            >
              <span>Explore My Work</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="/Shavisha_Thiloshini_CV.pdf"
              download
              className="btn btn-secondary w-full sm:w-auto"
              aria-label="Download CV as PDF"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="btn-secondary flex size-10 items-center justify-center rounded-md border border-border transition-base hover:border-accent hover:text-accent hover:shadow-glow"
                aria-label={`Visit ${link.name}`}
              >
                <SocialIcon name={link.name} size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
