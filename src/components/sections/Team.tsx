import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import TeamCard from '@/components/ui/TeamCard'
import { team } from '@/data/team'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function Team() {
  const { ref, isInView } = useScrollAnimation(0.05)

  return (
    <section className="bg-stipo-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection>
          <SectionHeader
            overline="Tim"
            title="Ljudi iza Stipomonta"
            subtitle="Obiteljska priča koja traje — od osnivača do sljedeće generacije."
          />
        </AnimatedSection>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
