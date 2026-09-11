import beyondCode from '../data/beyondCode'
import useScrollReveal from '../hooks/useScrollReveal'

export default function BeyondCode() {
  const [ref, isVisible] = useScrollReveal()

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

        <div className="grid gap-6 md:grid-cols-2">
          {beyondCode.map((item) => (
            <div
              key={item.id}
              className="surface-card transition-base hover:translate-y-[-4px] hover:border-accent"
            >
              <div className="mb-4 text-4xl" role="img" aria-label={item.title}>
                {item.icon}
              </div>
              <h3 className="font-heading text-title mb-3 text-primary-text">
                {item.title}
              </h3>
              <p className="text-body text-secondary-text">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
