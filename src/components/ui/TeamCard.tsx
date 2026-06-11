import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

interface Props {
  name: string
  role: string
  initials: string
  bio: string
}

export default function TeamCard({ name, role, initials, bio }: Props) {
  return (
    <motion.div
      variants={cardVariants}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-stipo-card border border-stipo-border rounded-2xl p-6 text-center flex flex-col items-center gap-4 hover:border-stipo-accent/40 transition-colors duration-300"
    >
      <div className="w-20 h-20 rounded-full bg-stipo-accent-muted border border-stipo-accent/20 flex items-center justify-center">
        <span className="font-display font-bold text-stipo-accent text-2xl">{initials}</span>
      </div>
      <div>
        <p className="font-display font-semibold text-stipo-text text-lg">{name}</p>
        <p className="text-stipo-accent text-sm font-medium mt-0.5">{role}</p>
      </div>
      <p className="text-stipo-muted text-sm leading-relaxed">{bio}</p>
    </motion.div>
  )
}
