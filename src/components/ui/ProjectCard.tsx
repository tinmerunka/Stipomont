import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

type Status = 'U prodaji' | 'Uskoro u prodaji' | 'Prodano'

const statusStyles: Record<Status, string> = {
  'U prodaji': 'bg-green-500/90 text-white',
  'Uskoro u prodaji': 'bg-amber-500/90 text-white',
  'Prodano': 'bg-white/20 text-white',
}

interface Props {
  id: string
  title: string
  location: string
  type: string
  status: Status
  desc: string
  image: string
}

export default function ProjectCard({ id, title, location, type, status, desc, image }: Props) {
  return (
    <Link to={`/projekti#${id}`}>
      <motion.div
        variants={cardVariants}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            const t = e.target as HTMLImageElement
            t.style.display = 'none'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-stipo-dark/20" />

        <div className="absolute top-4 left-4">
          <span className={`text-base font-semibold tracking-wide px-4 py-1.5 rounded-full backdrop-blur-sm ${statusStyles[status]}`}>
            {status}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-stipo-accent mb-2">{type}</p>
          <h3 className="font-display text-2xl font-bold text-white mb-1">{title}</h3>
          <div className="flex items-center gap-1 text-white/60 text-sm mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{location}</span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
            {desc}
          </p>
        </div>
      </motion.div>
    </Link>
  )
}
