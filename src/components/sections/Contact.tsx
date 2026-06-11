import { useState } from 'react'
import { MapPin, Mail, Clock, Phone, Send, CheckCircle } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Adresa',
    value: 'Resnički put 106, Zagreb 10 000',
    href: undefined,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'stipomont@stipomont.hr',
    href: 'mailto:stipomont@stipomont.hr',
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: '+385 98 202 349 (Stipo)',
    href: 'tel:+38598202349',
  },
  {
    icon: Clock,
    label: 'Radno vrijeme',
    value: 'Pon–Pet: 08:00–17:00 / Sub: 08:00–13:00',
    href: undefined,
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Upit s web stranice — ${form.name}`)
    const body = encodeURIComponent(
      `Ime i prezime: ${form.name}\n` +
      `Email: ${form.email}\n` +
      (form.phone ? `Telefon: ${form.phone}\n` : '') +
      `\nPoruka:\n${form.message}`
    )
    window.location.href = `mailto:stipomont@stipomont.hr?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputClass =
    'w-full bg-stipo-surface border border-stipo-border rounded-xl px-4 py-3 text-stipo-text placeholder:text-stipo-subtle focus:outline-none focus:border-stipo-accent transition-colors duration-200 text-sm'

  return (
    <section className="bg-stipo-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection>
          <SectionHeader
            overline="Kontakt"
            title="Stupite u kontakt"
            subtitle="Imate projekt ili pitanje? Javite nam se - pošaljite mail ispod ili nazovite."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info cards */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="bg-stipo-card border border-stipo-border rounded-2xl p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-stipo-accent-muted flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-stipo-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-stipo-muted mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-stipo-text text-sm hover:text-stipo-accent transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-stipo-text text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-stipo-card border border-stipo-border rounded-2xl p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <CheckCircle className="w-16 h-16 text-stipo-accent" />
                  <h3 className="font-display text-2xl font-bold text-stipo-text">Hvala na poruci!</h3>
                  <p className="text-stipo-muted text-sm max-w-xs">
                    Javit ćemo vam se što je prije moguće u radnom vremenu.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="text-xs font-semibold tracking-widest uppercase text-stipo-muted mb-2 block">
                      Ime i prezime
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Vaše ime"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold tracking-widest uppercase text-stipo-muted mb-2 block">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="vas@email.hr"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold tracking-widest uppercase text-stipo-muted mb-2 block">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        placeholder="+385 ..."
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold tracking-widest uppercase text-stipo-muted mb-2 block">
                      Poruka
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Opišite vaš projekt ili upit..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-stipo-accent hover:bg-stipo-accent-light text-white font-semibold rounded-xl py-4 transition-colors duration-200 flex items-center justify-center gap-2 font-sans"
                  >
                    <Send className="w-4 h-4" />
                    Pošalji poruku
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
