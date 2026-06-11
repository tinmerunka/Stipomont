import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

interface Props {
  title: string
  desc: string
  icon: string
}

export default function ServiceCard({ title, desc }: Props) {
  return (
    <motion.div
      variants={cardVariants}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-stipo-card border border-stipo-border hover:border-stipo-accent/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(56,189,248,0.08)] flex flex-col gap-3"
    >
      <h3 className="font-display text-xl font-semibold text-stipo-text">{title}</h3>
      <p className="text-stipo-muted text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}
