import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/data/services'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function Services() {
  const { ref, isInView } = useScrollAnimation(0.05)

  return (
    <section className="bg-stipo-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection>
          <SectionHeader
            overline="Usluge"
            title="Što nudimo"
            subtitle="Od jednostavnih intervencija do kompleksnih instalacijskih projekata - pokrivamo sve."
          />
        </AnimatedSection>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <ServiceCard key={s.id} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
