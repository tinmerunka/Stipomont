import { Phone } from 'lucide-react'

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)
import { MinimalistHero } from '@/components/ui/minimalist-hero'
import { images } from '@/data/images'

const socialLinks = [
  { icon: Phone, href: 'tel:+38598202349' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/stipomont_instalacije' },
]

export default function Hero() {
  return (
    <MinimalistHero
      mainText="Instalacijski radovi u stambenim i poslovnim prostorima - vodovod, grijanje, plin i sanitarije. Od 1995. godine."
      readMoreLink="#o-nama"
      imageSrc={images.hero}
      imageAlt="Vodoinstalater na poslu"
      bgImageSrc="/img/sestine2.jpeg"
      overlayText={{ part1: 'Kvaliteta koja', part2: 'traje.' }}
      socialLinks={socialLinks}
      locationText="Zagreb, Hrvatska"
    />
  )
}
