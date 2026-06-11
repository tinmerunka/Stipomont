import { useEffect, useState, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, MapPin, CheckCircle, X, ChevronLeft, ChevronRight, Images } from 'lucide-react'
import { projectsDetailed } from '@/data/projectsDetailed'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

// ─── Lightbox ────────────────────────────────────────────────────────────────

function Lightbox({
  images,
  startIndex,
  title,
  onClose,
}: {
  images: string[]
  startIndex: number
  title: string
  onClose: () => void
}) {
  const [current, setCurrent] = useState(startIndex)

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close */}
        <button
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          onClick={onClose}
          aria-label="Zatvori"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Counter */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-medium">
          {current + 1} / {images.length}
        </div>

        {/* Prev */}
        {images.length > 1 && (
          <button
            className="absolute left-4 md:left-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Prethodna slika"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Image */}
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-5xl max-h-[85vh] w-full mx-16 flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[current]}
            alt={`${title} — foto ${current + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />
        </motion.div>

        {/* Next */}
        {images.length > 1 && (
          <button
            className="absolute right-4 md:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Sljedeća slika"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                className={`w-12 h-8 rounded overflow-hidden transition-all duration-200 cursor-pointer flex-shrink-0 ${
                  i === current ? 'ring-2 ring-stipo-accent opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
                aria-label={`Foto ${i + 1}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

// ─── Gallery Grid ─────────────────────────────────────────────────────────────

function GalleryGrid({
  images,
  title,
  onOpen,
}: {
  images: string[]
  title: string
  onOpen: (index: number) => void
}) {
  if (!images || images.length <= 1) return null

  const extras = images.slice(1)

  return (
    <div className="mt-1 border-x border-b border-stipo-border rounded-b-2xl overflow-hidden bg-stipo-card/50">
      <div className="px-5 pt-4 pb-2 flex items-center gap-2 border-b border-stipo-border/50">
        <Images className="w-3.5 h-3.5 text-stipo-accent" />
        <span className="text-xs font-semibold tracking-widest uppercase text-stipo-accent">
          Galerija
        </span>
        <span className="text-xs text-stipo-muted ml-auto">{images.length} fotografija</span>
      </div>
      <div className="p-3">
        <div
          className={`grid gap-2 ${
            extras.length === 1 ? 'grid-cols-1' :
            extras.length === 2 ? 'grid-cols-2' :
            extras.length === 3 ? 'grid-cols-3' :
            'grid-cols-2 sm:grid-cols-4'
          }`}
        >
          {extras.map((img, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={() => onOpen(i + 1)}
              className="relative aspect-[4/3] rounded-lg overflow-hidden group/thumb cursor-pointer focus:outline-none focus:ring-2 focus:ring-stipo-accent"
              aria-label={`Otvori foto ${i + 2} — ${title}`}
            >
              <img
                src={img}
                alt={`${title} — foto ${i + 2}`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover/thumb:scale-105 group-hover/thumb:brightness-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-black/10 transition-colors duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Project Block ────────────────────────────────────────────────────────────

function ProjectBlock({
  project,
  index,
}: {
  project: (typeof projectsDetailed)[number]
  index: number
}) {
  const { ref, isInView } = useScrollAnimation(0.1)
  const isEven = index % 2 === 0
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        id={project.id}
        className="scroll-mt-20"
      >
        {/* Main card */}
        <div className="grid md:grid-cols-2 gap-0 rounded-t-2xl overflow-hidden border-x border-t border-stipo-border">
          {/* Image */}
          <div
            className={`relative aspect-[4/3] md:aspect-auto ${isEven ? 'md:order-1' : 'md:order-2'} cursor-pointer group/main`}
            onClick={() => setLightboxIndex(0)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/main:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />
            {/* Status badge */}
            <div className="absolute top-4 left-4">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm
                ${project.status === 'Prodano'
                  ? 'bg-slate-800/85 text-slate-200 border border-slate-600/60'
                  : project.status === 'Završeno'
                  ? 'bg-emerald-700/85 text-emerald-100 border border-emerald-500/60'
                  : project.status === 'U prodaji'
                  ? 'bg-sky-700/85 text-sky-100 border border-sky-500/60'
                  : 'bg-amber-700/85 text-amber-100 border border-amber-500/60'
                }`}
              >
                {project.status !== 'Prodano' && <CheckCircle className="w-3 h-3" />}
                {project.status}
              </span>
            </div>
            {/* Click-to-expand hint */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="absolute bottom-4 right-4 opacity-0 group-hover/main:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm text-white/80 text-xs">
                  <Images className="w-3 h-3" />
                  <span>Povećaj</span>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className={`bg-stipo-card p-8 md:p-10 flex flex-col justify-center gap-6 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-stipo-accent mb-2">{project.type}</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-stipo-text leading-tight">
                {project.title}
              </h2>
              <div className="flex items-center gap-1.5 text-stipo-muted text-sm mt-3">
                <MapPin className="w-4 h-4 text-stipo-accent flex-shrink-0" />
                <span>{project.location}</span>
              </div>
            </div>

            <p className="text-stipo-muted leading-relaxed text-sm">{project.desc}</p>

            <div className="grid grid-cols-1 gap-2 pt-2 border-t border-stipo-border">
              {project.details.map((d) => (
                <div key={d.label} className="flex justify-between items-center py-2">
                  <span className="text-stipo-muted text-sm">{d.label}</span>
                  <span className="text-stipo-text text-sm font-medium">{d.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery strip */}
        <GalleryGrid
          images={project.gallery ?? []}
          title={project.title}
          onOpen={(i) => setLightboxIndex(i)}
        />

        {/* Bottom border if no gallery */}
        {(!project.gallery || project.gallery.length <= 1) && (
          <div className="border-x border-b border-stipo-border rounded-b-2xl h-0" />
        )}
      </motion.div>

      {/* Lightbox */}
      {lightboxIndex !== null && project.gallery && (
        <Lightbox
          images={project.gallery}
          startIndex={lightboxIndex}
          title={project.title}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  const { hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <div className="bg-stipo-dark min-h-screen text-stipo-text font-sans">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-stipo-dark/95 backdrop-blur-md border-b border-stipo-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-stipo-muted hover:text-stipo-text transition-colors text-sm font-medium cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Natrag na početnu
          </button>
          <Link to="/" className="font-display text-lg font-bold text-stipo-text hover:text-stipo-accent transition-colors cursor-pointer">
            Stipomont
          </Link>
        </div>
      </header>

      {/* Page hero */}
      <div className="relative py-14 md:py-20 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(56,189,248,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest uppercase text-stipo-accent mb-3"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-stipo-text tracking-tight"
          >
            Naši projekti
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-stipo-muted text-base max-w-xl mx-auto"
          >
            Svaki projekt je priča o povjerenju, preciznosti i dugotrajnoj kvaliteti.
          </motion.p>
        </div>
      </div>

      {/* Projects list */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32 flex flex-col gap-12">
        {projectsDetailed.map((project, i) => (
          <ProjectBlock key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Footer strip */}
      <div className="border-t border-stipo-border py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stipo-subtle text-sm">© 2025 Stipomont d.o.o. — Sva prava pridržana.</p>
          <Link to="/#kontakt" className="text-stipo-accent text-sm hover:text-stipo-accent-light transition-colors font-medium cursor-pointer">
            Kontaktirajte nas →
          </Link>
        </div>
      </div>
    </div>
  )
}
