import { motion } from 'framer-motion'
import type { ComponentType } from 'react'
import { cn } from '@/lib/utils'

interface MinimalistHeroProps {
  mainText: string
  readMoreLink: string
  imageSrc: string
  imageAlt: string
  bgImageSrc?: string
  overlayText: {
    part1: string
    part2: string
  }
  socialLinks: { icon: ComponentType<{ className?: string }>; href: string }[]
  locationText: string
  className?: string
}

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: ComponentType<{ className?: string }> }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground/60 transition-colors hover:text-stipo-accent"
  >
    <Icon className="h-5 w-5" />
  </a>
)

export const MinimalistHero = ({
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  bgImageSrc,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        'relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-background pt-16 px-8 pb-8 font-sans md:px-12 md:pb-12',
        className
      )}
    >
      {/* Background photo — blurred apartment image */}
      {bgImageSrc && (
        <div className="pointer-events-none absolute inset-0 z-0">
          <img
            src={bgImageSrc}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover blur-sm scale-105 brightness-[0.38] opacity-90"
          />
        </div>
      )}

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(56,189,248,0.10) 0%, transparent 70%)',
        }}
      />
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          <p className="mx-auto max-w-xs text-base leading-relaxed text-foreground/80 md:mx-0">
            {mainText}
          </p>
          <a
            href={readMoreLink}
            onClick={(e) => {
              e.preventDefault()
              const id = readMoreLink.replace('#', '')
              const el = document.getElementById(id)
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className="mt-4 inline-block text-sm font-medium text-stipo-accent underline decoration-from-font hover:text-stipo-accent-light transition-colors"
          >
            Saznaj više
          </a>
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-full">
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-auto w-64 object-cover md:w-80 scale-[2.1] lg:w-[26rem]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.onerror = null
              target.src = `https://placehold.co/400x600/38bdf8/ffffff?text=Stipomont`
            }}
          />
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
        >
          <h1 className="text-5xl font-extrabold text-foreground md:text-5xl lg:text-6xl font-display tracking-tight leading-tight whitespace-nowrap">
            {overlayText.part1}
            <br />
            <span className="text-stipo-accent">{overlayText.part2}</span>
          </h1>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-sm font-medium text-foreground/60"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  )
}
