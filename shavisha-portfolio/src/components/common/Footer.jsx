export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="page-wrap flex flex-col gap-4 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-heading text-title">Shavisha Thiloshini</p>
          <p className="text-meta mt-2 text-secondary-text">
            Software Engineering Student
          </p>
        </div>
        <p className="text-meta text-muted-text">
          © {year} Shavisha Thiloshini
        </p>
      </div>
    </footer>
  )
}
