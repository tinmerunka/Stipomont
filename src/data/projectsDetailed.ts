import { images } from './images'

export const projectsDetailed = [
  {
    id: 'sestine',
    title: 'Projekt Šestine',
    location: 'Zagreb — Šestine',
    status: 'U prodaji',
    image: images.projects.sestine,
    gallery: images.galleries.sestine,
    desc: 'Kompletan instalacijski projekt luksuzne višestambene zgrade na Šestinskom vrhu. Izvedeni su svi instalacijski radovi - vodovod, centralno grijanje i plinske instalacije, uključujući pripremu za privatne bazene u sklopu pojedinih stanova.',
    details: [
      { label: 'Tip objekta', value: 'Stambena zgrada' },
      { label: 'Lokacija', value: 'Šestinski vrh 13, Zagreb' },
      { label: 'Status', value: 'U prodaji' },
    ],
  },
  {
    id: 'zitnjak',
    title: 'Projekt Žitnjak',
    location: 'Zagreb — Žitnjak',
    status: 'Uskoro u prodaji',
    image: images.projects.zitnjak,
    gallery: images.galleries.zitnjak,
    desc: 'Instalacijski radovi na stambenoj zgradi u Zagrebu. Projekt je obuhvatio kompletnu izvedbu vodovodnih, sanitarnih instalacija te sustava grijanja prilagođenih stambenoj namjeni. Useljivo 2027.',
    details: [
      { label: 'Tip objekta', value: 'Stambena zgrada' },
      { label: 'Lokacija', value: 'Žitnjak, Zagreb' },
      { label: 'Status', value: 'Useljivo 2027.' },
    ],
  },
  {
    id: 'horvatova',
    title: 'Horvatova - Novi Zagreb',
    location: 'Zagreb — Horvatova',
    status: 'Prodano',
    image: images.projects.horvatova,
    gallery: images.galleries.horvatova,
    desc: 'Instalacijski projekt stambene zgrade s 10 stanova na prestižnoj lokaciji u Zagrebu. Projekt je obuhvatio kompletnu izvedbu vodovodnih, sanitarnih i instalacija centralnog grijanja za sve stambene jedinice.',
    details: [
      { label: 'Tip objekta', value: 'Stambena zgrada' },
      { label: 'Lokacija', value: 'Horvatova, Zagreb' },
      { label: 'Status', value: 'Prodano' },
    ],
  },
  {
    id: 'krk',
    title: 'Vila Malinska',
    location: 'Malinska — Otok Krk',
    type: 'Vila s bazenom',
    status: 'Prodano',
    image: images.projects.krk,
    gallery: images.galleries.krk,
    desc: 'Luksuzna vila s privatnim bazenom na otoku Krku. Stipomont je izveo kompletan instalacijski projekt koji uključuje podpodno grijanje, SPA sustav, solarnu pripremu tople vode i sve vodovodne instalacije.',
    details: [
      { label: 'Tip objekta', value: 'Stambena zgrada' },
      { label: 'Lokacija', value: 'Malinska, Otok Krk' },
      { label: 'Status', value: 'Prodano' },
    ],
  },
]
