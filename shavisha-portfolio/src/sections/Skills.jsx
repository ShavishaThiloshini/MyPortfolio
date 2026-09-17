import { Layout, Palette, Database, Code2, Wrench } from 'lucide-react'
import skills from '../data/skills'
import useScrollReveal from '../hooks/useScrollReveal'

const getIcon = (id) => {
  switch (id) {
    case 'frontend':
      return <Layout className="text-accent" size={24} />
    case 'ui-ux':
      return <Palette className="text-accent" size={24} />
    case 'backend':
      return <Database className="text-accent" size={24} />
    case 'programming':
      return <Code2 className="text-accent" size={24} />
    case 'tools':
      return <Wrench className="text-accent" size={24} />
    default:
      return <Code2 className="text-accent" size={24} />
  }
}

export default function Skills() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="page-wrap section-space scroll-mt-24 relative"
    >
      <div
        ref={ref}
        className={`transition-slow ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-12">
          <p className="text-label mb-4">Skills</p>
          <h2 id="skills-heading" className="font-heading text-heading drop-shadow-lg">
            Technical Skills
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => (
            <article
              key={category.id}
              className="surface-card glow-border transition-base hover:-translate-y-1 relative z-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  {getIcon(category.id)}
                </div>
                <h3 className="font-heading text-title text-primary-text">
                  {category.title}
                </h3>
              </div>
              
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center bg-surface/50 border border-border rounded-full px-3 py-1.5 text-sm text-secondary-text transition-colors hover:border-accent/50 hover:text-primary-text cursor-default"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
