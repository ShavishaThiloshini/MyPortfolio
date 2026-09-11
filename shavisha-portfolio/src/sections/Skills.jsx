import skills from '../data/skills'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Skills() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="page-wrap section-space scroll-mt-24"
    >
      <div
        ref={ref}
        className={`transition-slow ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-12">
          <p className="text-label mb-4">Skills</p>
          <h2 id="skills-heading" className="font-heading text-heading">
            Technical Skills
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => (
            <div
              key={category.id}
              className="surface-card transition-base hover:translate-y-[-4px] hover:border-accent"
            >
              <h3 className="font-heading text-title mb-4 text-primary-text">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between text-body text-secondary-text"
                  >
                    <span>{skill.name}</span>
                    <span className="text-meta text-muted-text">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
