import { useState, useEffect } from 'react'

const SECTION_IDS = ['naslovna', 'o-nama', 'usluge', 'projekti', 'tim', 'kontakt']

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('naslovna')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return activeSection
}
