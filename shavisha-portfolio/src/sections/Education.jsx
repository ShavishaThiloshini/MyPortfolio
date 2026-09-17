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
          <h2 id="education-heading" className="font-heading text-heading drop-shadow-lg">
            Education
          </h2>
        </div>

        <div className="max-w-3xl">
          <div className="relative space-y-8 pl-4">
            <div className="timeline-line" />
            {education.map((item, index) => (
              <EducationItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EducationItem({ item, index }) {
  const [itemRef, isVisible] = useScrollReveal()
  const isInProgress = item.status === 'In Progress'

  return (
    <div
      ref={itemRef}
      className={`relative pl-8 transition-slow ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`absolute left-[3.5px] top-2 size-3.5 rounded-full border-2 border-background ${
          isInProgress ? 'bg-accent shadow-glow' : 'bg-muted-text shadow-glow-inner'
        }`}
      />
      <div className="glass-panel glow-border p-6 relative z-10 transition-base hover:-translate-y-1">
        <div className="mb-2">
          <time className="text-meta text-accent font-bold tracking-wide">
            {item.startYear} – {item.endYear}
          </time>
          {isInProgress && (
            <span className="ml-3 inline-flex items-center rounded-full bg-accent/20 px-2 py-1 text-xs font-bold text-accent shadow-glow">
              Reading
            </span>
          )}
        </div>
        <h3 className="font-heading text-title mb-1 text-primary-text">
          {item.qualification}
        </h3>
        <p className="text-meta text-secondary-text">{item.institution}</p>
      </div>
    </div>
  )
}
