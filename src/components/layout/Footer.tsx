import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Naslovna', href: '#naslovna' },
  { label: 'O nama', href: '#o-nama' },
  { label: 'Usluge', href: '#usluge' },
  { label: 'Projekti', href: '/projekti' },
  { label: 'Kontakt', href: '#kontakt' },
]

function scrollTo(href: string) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Footer() {
  return (
    <footer className="bg-stipo-dark border-t border-stipo-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-bold text-stipo-text mb-3">Stipomont.</p>
            <p className="text-stipo-muted text-sm leading-relaxed max-w-xs">
              Obiteljska tvrtka s više od 25 godina iskustva u instalacijskim radovima u Zagrebu i okolici.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-stipo-accent mb-5">Navigacija</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  {l.href.startsWith('/') ? (
                    <Link to={l.href} className="text-stipo-muted text-sm hover:text-stipo-text transition-colors">
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(l.href) }}
                      className="text-stipo-muted text-sm hover:text-stipo-text transition-colors"
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-stipo-accent mb-5">Kontakt</p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-stipo-accent mt-0.5 flex-shrink-0" />
                <span className="text-stipo-muted text-sm">Resnički put 106, Zagreb 10 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-stipo-accent flex-shrink-0" />
                <a href="mailto:stipomont@stipomont.hr" className="text-stipo-muted text-sm hover:text-stipo-text transition-colors">
                  stipomont@stipomont.hr
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-stipo-accent flex-shrink-0" />
                <a href="tel:+38598202349" className="text-stipo-muted text-sm hover:text-stipo-text transition-colors">
                  +385 98 202 349
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-stipo-accent mt-0.5 flex-shrink-0" />
                <span className="text-stipo-muted text-sm">Pon–Pet: 08:00–17:00<br />Sub: 08:00–13:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stipo-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stipo-subtle text-sm">© 2025 Stipomont d.o.o. — Sva prava pridržana.</p>
          <p className="text-stipo-subtle text-sm">OIB: 81717098924</p>
        </div>
      </div>
    </footer>
  )
}
