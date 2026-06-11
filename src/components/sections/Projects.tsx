import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function Projects() {
  const { ref, isInView } = useScrollAnimation(0.05)

  return (
    <section className="bg-stipo-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection>
          <SectionHeader
            overline="Projekti"
            title="Naši radovi"
            subtitle="Svaki detalj izveden s preciznošću. Svaki projekt završen na vrijeme."
          />
        </AnimatedSection>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
