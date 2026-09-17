import socialLinks from '../data/socialLinks'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Contact() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="page-wrap section-space scroll-mt-24"
    >
      <div
        ref={ref}
        className={`transition-slow ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="surface-card glow-border relative z-10 p-8 sm:p-12 text-center flex flex-col items-center">
            <p className="text-label mb-4">Contact</p>
            <h2 id="contact-heading" className="font-heading text-heading mb-6 drop-shadow-lg">
              Let's Build Something
            </h2>
            <p className="text-body text-secondary-text mb-8 max-w-xl">
              Have an idea, opportunity, or just want to connect? I'd love to hear
              from you.
            </p>

            <div className="flex flex-wrap justify-center gap-6 w-full mt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="btn btn-secondary inline-flex items-center gap-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
