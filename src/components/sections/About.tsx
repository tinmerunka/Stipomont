import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'

const stats = [
  { value: '30+', label: 'Godina iskustva' },
  { value: '50+', label: 'Završenih projekata' },
  { value: '1995', label: 'Godina osnivanja' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export default function About() {
  const { ref, isInView } = useScrollAnimation(0.1)

  return (
    <section className="bg-stipo-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Story */}
          <AnimatedSection>
            <SectionHeader
              overline="O nama"
              title="Obiteljski posao s tradicijom"
              centered={false}
            />
            <div className="space-y-4 text-stipo-muted leading-relaxed">
              <p>
                Stipomont d.o.o. osnovan je 1995. godine kao obrtničko poduzeće, a danas djeluje kao obiteljsko društvo s ograničenom odgovornošću sa sjedištem u Zagrebu.
              </p>
              <p>
                Tvrtku je utemeljio <span className="text-stipo-text font-medium">Stipo Valentić</span>, a danas je vode njegovi sinovi <span className="text-stipo-text font-medium">Dalibor</span> i <span className="text-stipo-text font-medium">Filip</span>. Kroz tri desetljeća izradili smo niz velikih projekata u instalacijama vodovoda, grijanja, hlađenja i plinskih instalacija.
              </p>
              <p>
                Svaki projekt tretiramo s jednakom pažnjom — od manjeg stambenog zahvata do kompleksnih poslovnih objekata. Kvaliteta i pouzdanost nisu nam samo riječi — to je naš standard.
              </p>
            </div>
          </AnimatedSection>

          {/* Right — Stats + quote */}
          <div>
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              {stats.map((s) => (
                <motion.div key={s.label} variants={statVariants} className="text-center">
                  <p className="font-display text-4xl md:text-5xl font-bold text-stipo-accent">{s.value}</p>
                  <p className="text-stipo-muted text-xs mt-1 leading-snug">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <AnimatedSection delay={0.3}>
              <div className="bg-stipo-card/60 backdrop-blur-sm border border-stipo-border rounded-2xl p-6">
                <p className="text-stipo-text text-lg leading-relaxed italic font-display font-semibold">
                  "Više od 25 godina sa vama — jer kvalitetan posao govori sam za sebe."
                </p>
                <p className="text-stipo-muted text-sm mt-3">— Stipo Valentić, osnivač</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
