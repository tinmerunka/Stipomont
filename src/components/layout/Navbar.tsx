import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Naslovna', href: '#naslovna' },
  { label: 'O nama',   href: '#o-nama'   },
  { label: 'Usluge',   href: '#usluge'   },
  { label: 'Projekti', href: '/projekti' },
  { label: 'Kontakt',  href: '#kontakt'  },
]

function smoothScroll(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-stipo-dark/95 backdrop-blur-md border-b border-stipo-border shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo + Name */}
          <a
            href="#naslovna"
            onClick={(e) => { e.preventDefault(); smoothScroll('naslovna') }}
            className="flex items-center gap-2.5 group"
          >
            <img
              src="/img/stipomont_logo.png"
              alt="Stipomont logo"
              className="h-8 w-auto object-contain"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
            <span className="font-display text-lg font-bold text-stipo-text group-hover:text-stipo-accent transition-colors">
              Stipomont
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isPage = link.href.startsWith('/')
              const sectionId = link.href.replace('#', '')
              const isActive = !isPage && activeSection === sectionId

              const linkClass = cn(
                'text-sm font-medium tracking-wide transition-colors pb-0.5 border-b-2',
                isActive
                  ? 'text-stipo-accent border-stipo-accent'
                  : 'text-stipo-muted border-transparent hover:text-stipo-text'
              )

              if (isPage) {
                return (
                  <Link key={link.label} to={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                )
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); smoothScroll(sectionId) }}
                  className={linkClass}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-1.5 md:hidden z-50 p-1"
            aria-label="Izbornik"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={cn('block h-0.5 w-6 bg-stipo-text transition-all duration-300', mobileOpen && 'rotate-45 translate-y-2')} />
            <span className={cn('block h-0.5 w-6 bg-stipo-text transition-all duration-300', mobileOpen && 'opacity-0')} />
            <span className={cn('block h-0.5 w-5 bg-stipo-text transition-all duration-300', mobileOpen && '-rotate-45 -translate-y-2 w-6')} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-stipo-dark flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {navLinks.map((link) => {
          const isPage = link.href.startsWith('/')
          const sectionId = link.href.replace('#', '')

          if (isPage) {
            return (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl font-bold text-stipo-text hover:text-stipo-accent transition-colors"
              >
                {link.label}
              </Link>
            )
          }

          return (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                setMobileOpen(false)
                setTimeout(() => smoothScroll(sectionId), 300)
              }}
              className="font-display text-3xl font-bold text-stipo-text hover:text-stipo-accent transition-colors"
            >
              {link.label}
            </a>
          )
        })}
      </div>
    </>
  )
}
