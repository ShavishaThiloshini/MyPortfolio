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
        className={`max-w-3xl transition-slow ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-label mb-4">About</p>
        <h2 id="about-heading" className="font-heading text-heading mb-8">
          About Me
        </h2>
        <div className="space-y-6 text-body text-secondary-text">
          <p>
            I'm a Software Engineering student with a passion for frontend
            development and UI/UX design. My journey in technology is driven by
            curiosity and a desire to create meaningful digital experiences that
            are both functional and beautiful.
          </p>
          <p>
            I believe that great software is built at the intersection of
            technical excellence and thoughtful design. This philosophy guides my
            approach to every project I undertake, from concept to deployment.
          </p>
          <p>
            Beyond writing code, I'm passionate about education and knowledge
            sharing. I've had the opportunity to deliver technical seminars to
            students, helping them understand complex concepts in accessible
            ways. This experience has strengthened my communication skills and
            deepened my commitment to continuous learning.
          </p>
          <p>
            Currently pursuing my BSc in Software Engineering (Top-up), I'm
            focused on expanding my technical expertise while developing the
            soft skills that make me an effective team member and communicator.
            My goal is to contribute to projects that make a positive impact on
            users' lives.
          </p>
        </div>
      </div>
    </section>
  )
}
