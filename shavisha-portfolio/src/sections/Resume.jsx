import useScrollReveal from '../hooks/useScrollReveal'
import { Download, Mail } from 'lucide-react'

export default function Resume() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="page-wrap section-space scroll-mt-24"
    >
      <div
        ref={ref}
        className={`transition-slow ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-3xl">
          <p className="text-label mb-4">Resume</p>
          <h2 id="resume-heading" className="font-heading text-heading mb-8">
            Ready to Know More?
          </h2>
          <p className="text-body text-secondary-text mb-12">
            Download my complete CV to learn more about my education, experience,
            skills, and projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="/Shavisha_Thiloshini_CV.pdf"
              download
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <Download size={18} />
              Download My CV
            </a>
            <a
              href="mailto:shavishathiloshini16@gmail.com?subject=CV Request&body=Hi Shavisha, I would like to request your CV."
              className="btn btn-secondary inline-flex items-center gap-2"
            >
              <Mail size={18} />
              Request via Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
