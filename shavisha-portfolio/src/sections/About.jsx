import useScrollReveal from '../hooks/useScrollReveal'

export default function About() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="page-wrap section-space scroll-mt-24"
    >
      <div
        ref={ref}
        className={`max-w-3xl transition-slow ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        <p className="text-label mb-4">About</p>
        <h2 id="about-heading" className="font-heading text-heading mb-8">
          About Me
        </h2>
        <div className="space-y-6 text-body text-secondary-text">
          <p>
            I'm a Software Engineering student passionate about frontend development and UI/UX design. I enjoy creating digital experiences that are both functional and visually engaging.
          </p>
          <p>
            Beyond coding, I'm passionate about education and knowledge sharing. I've delivered technical seminars to students, helping me strengthen my communication and presentation skills.
          </p>
          <p>
            Currently pursuing my BSc in Software Engineering (Top-up), I'm focused on growing my technical expertise, learning continuously, and building meaningful digital experiences that make a positive impact.
          </p>
        </div>
      </div>
    </section>
  )
}
