import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ExternalLink, X } from 'lucide-react'
import SocialIcon from '../components/common/SocialIcon'
import projects from '../data/projects'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Projects() {
  const [ref, isVisible] = useScrollReveal()
  const [selectedProject, setSelectedProject] = useState(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const listener = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [])

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="page-wrap section-space scroll-mt-24 relative"
    >
      <div
        ref={ref}
        className={`transition-slow ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-16">
          <p className="text-label mb-4">Projects</p>
          <h2 id="projects-heading" className="font-heading text-heading drop-shadow-lg">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 perspective-[1000px]">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onClick={() => setSelectedProject(project)}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function ProjectCard({ project, index, onClick, prefersReducedMotion }) {
  const [itemRef, isVisible] = useScrollReveal()

  return (
    <motion.div
      ref={itemRef}
      whileHover={!prefersReducedMotion ? { scale: 1.02, rotateX: 2, rotateY: -2, y: -4 } : { y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`surface-card glow-border cursor-pointer flex flex-col h-full border-border hover:border-accent hover:shadow-glow transition-slow ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transformStyle: 'preserve-3d',
        transitionDelay: prefersReducedMotion ? '0ms' : `${index * 50}ms`
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      aria-label={`View details for ${project.title}`}
    >
      <div 
        className="aspect-video mb-6 overflow-hidden flex items-center justify-center rounded-md border border-border/50 relative"
        style={{ transform: !prefersReducedMotion ? 'translateZ(20px)' : 'none' }}
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-end p-4">
          <p className="text-meta text-accent font-medium">{project.category}</p>
        </div>
      </div>
      
      <div 
        className="flex flex-col flex-grow"
        style={{ transform: !prefersReducedMotion ? 'translateZ(30px)' : 'none' }}
      >
        <div className="mb-3">
          <span className="text-label font-bold text-accent tracking-wider bg-accent/10 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <h3 className="font-heading text-title text-primary-text mt-4">
            {project.title}
          </h3>
        </div>
        <p className="text-body text-secondary-text line-clamp-2 mb-6 flex-grow mt-2">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-full bg-surface border border-border text-xs text-secondary-text"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 rounded-full bg-surface border border-border text-xs text-secondary-text">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 sm:p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto surface-card shadow-2xl z-10 flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-surface border border-border text-secondary-text hover:text-accent hover:border-accent transition-base z-20"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="grid gap-8 lg:grid-cols-2 p-2 sm:p-4 mt-8 sm:mt-0 relative z-10">
          <div className="flex flex-col h-full">
            <div className="aspect-video overflow-hidden flex items-center justify-center rounded-lg border border-border shadow-glow-inner mb-6 relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary inline-flex items-center justify-center gap-2 flex-1"
                >
                  <SocialIcon name="GitHub" size={18} />
                  GitHub
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center justify-center gap-2 flex-1"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="text-meta text-accent font-medium mb-2 block">
                {project.category}
              </span>
              <h2 id="modal-title" className="font-heading text-display lg:text-heading text-primary-text mb-4 leading-tight">
                {project.title}
              </h2>
              <p className="text-body text-secondary-text text-lg">
                {project.shortDescription}
              </p>
            </div>

            <div>
              <h3 className="font-heading text-title font-semibold text-primary-text mb-3">
                Overview
              </h3>
              <p className="text-body text-secondary-text">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h3 className="font-heading text-title font-semibold text-primary-text mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-body text-secondary-text flex items-start gap-3"
                  >
                    <span className="text-accent mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-title font-semibold text-primary-text mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full bg-surface border border-border text-meta text-secondary-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
