import { images } from './images'

export const projectsDetailed = [
  {
    id: 'sestine',
    title: 'Projekt Šestine',
    location: 'Zagreb — Šestine',
    type: 'Stambeni objekt',
    status: 'Završeno',
    image: images.projects.sestine,
    gallery: images.galleries.sestine,
    desc: 'Kompletan instalacijski projekt luksuzne višestambene zgrade na Šestinskom vrhu. Izvedeni su svi instalacijski radovi — vodovod, kanalizacija, centralno grijanje i plinske instalacije, uključujući pripremu za privatne bazene u sklopu pojedinih stanova.',
    details: [
      { label: 'Tip objekta', value: 'Stambena zgrada' },
      { label: 'Lokacija', value: 'Šestinski vrh 13, Zagreb' },
      { label: 'Status', value: 'U prodaji' },
    ],
  },
  {
    id: 'horvatova',
    title: 'Horvatova - Novi Zagreb',
    location: 'Zagreb — Horvatova',
    type: 'Stambena zgrada',
    status: 'Prodano',
    image: images.projects.horvatova,
    gallery: images.galleries.horvatova,
    desc: 'Instalacijski projekt stambene zgrade s 10 stanova na prestižnoj lokaciji u Zagrebu. Projekt je obuhvatio kompletnu izvedbu vodovodnih, kanalizacijskih i instalacija centralnog grijanja za sve stambene jedinice.',
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
    status: 'Završeno',
    image: images.projects.krk,
    gallery: images.galleries.krk,
    desc: 'Luksuzna vila s privatnim bazenom na otoku Krku. Stipomont je izveo kompletan instalacijski projekt koji uključuje podpodno grijanje, SPA sustav, solarnu pripremu tople vode i sve vodovodne i kanalizacijske instalacije.',
    details: [
      { label: 'Tip objekta', value: 'Stambena zgrada' },
      { label: 'Lokacija', value: 'Malinska, Otok Krk' },
      { label: 'Status', value: 'Prodano' },
    ],
  },
  {
    id: 'zitnjak',
    title: 'Projekt Žitnjak',
    location: 'Zagreb — Žitnjak',
    type: 'Stambena zgrada',
    status: 'Završeno',
    image: images.projects.zitnjak,
    gallery: images.galleries.zitnjak,
    desc: 'Instalacijski radovi na poslovnom objektu u industrijskoj zoni Žitnjak u Zagrebu. Projekt je obuhvatio kompletnu izvedbu vodovodnih, kanalizacijskih instalacija te sustava grijanja i hlađenja prilagođenih poslovnoj namjeni.',
    details: [
      { label: 'Tip objekta', value: 'Stambena zgrada' },
      { label: 'Lokacija', value: 'Žitnjak, Zagreb' },
      { label: 'Status', value: 'U prodaji' },
    ],
  },
]
