export default function PlaceholderSection({ id, label, title }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="page-wrap section-space scroll-mt-24"
    >
      <p className="text-label mb-3">{label}</p>
      <h2 id={`${id}-heading`} className="font-heading text-heading">
        {title}
      </h2>
    </section>
  )
}
