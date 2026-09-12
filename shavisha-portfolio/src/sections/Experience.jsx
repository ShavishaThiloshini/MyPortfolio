import experience from '../data/experience'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Experience() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="page-wrap section-space scroll-mt-24"
    >
      <div
        ref={ref}
        className={`transition-slow ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-12">
          <p className="text-label mb-4">Experience</p>
          <h2 id="experience-heading" className="font-heading text-heading">
            Professional Experience
          </h2>
        </div>

        <div className="max-w-3xl">
          <div className="relative space-y-8 before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-px before:bg-border">
            {experience.map((item, index) => (
              <ExperienceItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ item, index }) {
  const [itemRef, isVisible] = useScrollReveal()

  return (
    <div
      ref={itemRef}
      className={`relative pl-8 transition-slow ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute left-0 top-2 size-3 rounded-full bg-accent shadow-glow" />
      <div className="mb-2">
        <time className="text-meta text-accent font-medium">{item.year}</time>
      </div>
      <h3 className="font-heading text-title mb-1 text-primary-text">
        {item.title}
      </h3>
      <p className="text-meta text-secondary-text mb-3">
        {item.organization} • {item.type}
      </p>
      <p className="text-body text-secondary-text mb-4">
        {item.description}
      </p>
      <ul className="space-y-2">
        {item.highlights.map((highlight, idx) => (
          <li
            key={idx}
            className="text-body text-secondary-text flex items-start gap-2"
          >
            <span className="text-accent mt-1.5">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
