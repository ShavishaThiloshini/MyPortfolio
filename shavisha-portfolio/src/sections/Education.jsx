import education from '../data/education'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Education() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="page-wrap section-space scroll-mt-24"
    >
      <div
        ref={ref}
        className={`transition-slow ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-12">
          <p className="text-label mb-4">Education</p>
          <h2 id="education-heading" className="font-heading text-heading">
            Education
          </h2>
        </div>

        <div className="max-w-3xl">
          <div className="space-y-8">
            {education.map((item) => (
              <div
                key={item.id}
                className={`relative pl-8 before:absolute before:left-0 before:top-2 before:size-3 before:rounded-full ${
                  item.status === 'In Progress'
                    ? 'before:bg-accent before:shadow-glow'
                    : 'before:bg-muted-text'
                }`}
              >
                <div className="mb-2">
                  <time className="text-meta text-secondary-text">
                    {item.startYear} – {item.endYear}
                  </time>
                  {item.status === 'In Progress' && (
                    <span className="ml-3 inline-flex items-center rounded-full bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                      Reading
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-title mb-1 text-primary-text">
                  {item.qualification}
                </h3>
                <p className="text-meta text-secondary-text">
                  {item.institution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
