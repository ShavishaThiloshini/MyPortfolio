import projects from '../data/projects'
import useScrollReveal from '../hooks/useScrollReveal'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const [ref, isVisible] = useScrollReveal()
  const featuredProjects = projects.filter((p) => p.featured)
  const additionalProjects = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="page-wrap section-space scroll-mt-24"
    >
      <div
        ref={ref}
        className={`transition-slow ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-16">
          <p className="text-label mb-4">Projects</p>
          <h2 id="projects-heading" className="font-heading text-heading">
            Featured Projects
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Additional Projects */}
        {additionalProjects.length > 0 && (
          <section aria-labelledby="additional-projects-heading">
            <div className="mb-12">
              <h3 id="additional-projects-heading" className="font-heading text-title text-primary-text">
                Additional Projects
              </h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {additionalProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  )
}

function FeaturedProject({ project, index }) {
  const [projectRef, isVisible] = useScrollReveal()

  return (
    <div
      ref={projectRef}
      className={`transition-slow ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
        {/* Project Visual */}
        <div className="relative group">
          <div className="aspect-video surface-card overflow-hidden bg-gradient-subtle flex items-center justify-center">
            <div className="text-center select-none">
              <p className="font-heading text-display font-bold opacity-[0.06] leading-none">
                {(index + 1).toString().padStart(2, '0')}
              </p>
              <p className="text-meta text-muted-text mt-2 tracking-widest uppercase">
                {project.category}
              </p>
            </div>
          </div>
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
              {(index + 1).toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-meta text-accent font-medium">
                {project.category}
              </span>
            </div>
            <h3 className="font-heading text-title lg:text-heading text-primary-text mb-3">
              {project.title}
            </h3>
            <p className="text-body text-secondary-text">
              {project.shortDescription}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-body font-semibold text-primary-text mb-2">
              What I Built
            </h4>
            <p className="text-body text-secondary-text">
              {project.fullDescription}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-body font-semibold text-primary-text mb-2">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-surface border border-border text-meta text-secondary-text"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-body font-semibold text-primary-text mb-2">
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.slice(0, 3).map((feature) => (
                <li
                  key={feature}
                  className="text-body text-secondary-text flex items-start gap-2"
                >
                  <span className="text-accent mt-1.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-body font-semibold text-primary-text mb-2">
              My Contribution
            </h4>
            <p className="text-body text-secondary-text">
              {project.contribution}
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary inline-flex items-center gap-2"
              >
                <span>⤴</span>
                GitHub
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="surface-card transition-base hover:translate-y-[-4px] hover:border-accent group">
      <div className="aspect-video bg-gradient-subtle mb-4 overflow-hidden flex items-center justify-center rounded-md">
        <div className="text-center select-none">
          <p className="font-heading font-bold opacity-[0.07] leading-none" style={{ fontSize: 'clamp(2rem, 8vw, 4rem)' }}>
            {project.title.slice(0, 2).toUpperCase()}
          </p>
          <p className="text-meta text-muted-text mt-1 tracking-widest uppercase text-xs">
            {project.category}
          </p>
        </div>
      </div>
      <div className="space-y-3">
        <div>
          <span className="text-meta text-accent font-medium">
            {project.category}
          </span>
          <h4 className="font-heading text-title text-primary-text mt-1">
            {project.title}
          </h4>
        </div>
        <p className="text-body text-secondary-text line-clamp-2">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-full bg-surface border border-border text-xs text-secondary-text"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
