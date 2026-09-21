import { Menu, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { navLinks, sectionIds } from '../../data/navLinks'
import useActiveSection from '../../hooks/useActiveSection'

function NavLink({ href, label, isActive, onClick, className = '', linkRef }) {
  return (
    <a
      ref={linkRef}
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'location' : undefined}
      className={`transition-base rounded-sm ${
        isActive
          ? 'text-accent'
          : 'text-secondary-text hover:text-primary-text'
      } ${className}`}
    >
      {label}
    </a>
  )
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)
  const menuId = useId()
  const menuButtonRef = useRef(null)
  const firstLinkRef = useRef(null)
  const wasMenuOpen = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    if (isMenuOpen) {
      firstLinkRef.current?.focus()
      wasMenuOpen.current = true
    } else if (wasMenuOpen.current) {
      menuButtonRef.current?.focus()
      wasMenuOpen.current = false
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className="fixed top-0 w-full z-50"
      style={{
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(4px)' : 'none',
        transition: 'background-color 300ms ease, backdrop-filter 300ms ease',
      }}
    >
      <div className="page-wrap flex items-center justify-between gap-4 py-4">
        <a
          href="#home"
          className="font-heading text-title tracking-tight"
          onClick={closeMenu}
        >
          SHAVISHA
        </a>

        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              href={`#${link.id}`}
              label={link.label}
              isActive={activeId === link.id}
              className="text-meta"
            />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/Shavisha_Thiloshini_CV.pdf"
            download
            className="btn btn-primary px-4 py-2 text-meta hidden sm:inline-flex"
            aria-label="Download CV as PDF"
          >
            Download CV
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md text-primary-text lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        id={menuId}
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <button
          type="button"
          className="absolute top-5 right-4 sm:right-8 inline-flex size-10 items-center justify-center rounded-md text-primary-text"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          <X size={28} />
        </button>

        <nav className="flex flex-col items-center gap-6" aria-label="Mobile">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.id}
              href={`#${link.id}`}
              label={link.label}
              isActive={activeId === link.id}
              onClick={closeMenu}
              className="text-2xl font-heading tracking-wide"
              linkRef={index === 0 ? firstLinkRef : undefined}
            />
          ))}
          <a
            href="/Shavisha_Thiloshini_CV.pdf"
            download
            onClick={closeMenu}
            className="text-2xl font-heading tracking-wide text-accent mt-4"
            aria-label="Download CV as PDF"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  )
}
