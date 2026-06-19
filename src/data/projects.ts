import { images } from './images'

export const projects = [
  {
    id: 'sestine',
    title: 'Stanovi Šestine',
    location: 'Zagreb',
    type: 'Stambeni objekt',
    status: 'U prodaji' as const,
    desc: 'Kompletan instalacijski projekt višestambene zgrade - vodovod, sanitarije i centralno grijanje.',
    image: images.projects.sestine,
  },
  {
    id: 'zitnjak',
    title: 'Projekt Žitnjak',
    location: 'Zagreb',
    type: 'Stambeni objekt',
    status: 'Uskoro u prodaji' as const,
    desc: 'Instalacijski radovi na stambenom objektu u Zagrebu - vodovod, infrastrukturne instalacije i sustav grijanja.',
    image: images.projects.zitnjak,
  },
  {
    id: 'horvatova',
    title: 'Projekt Horvatova',
    location: 'Zagreb',
    type: 'Stambena zgrada',
    status: 'Prodano' as const,
    desc: 'Vodovod, grijanje i plinski sustav stambene zgrade s 10 stanova u prestižnoj četvrti Zagreba.',
    image: images.projects.horvatova,
  },
  {
    id: 'krk',
    title: 'Vila Malinska',
    location: 'Otok Krk',
    type: 'Vila s bazenom',
    status: 'Prodano' as const,
    desc: 'Luksuzne instalacije privatne vile s bazenom - podno grijanje, SPA i solarna priprema tople vode.',
    image: images.projects.krk,
  },
]
