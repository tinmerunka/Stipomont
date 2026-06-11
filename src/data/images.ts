/**
 * SLIKE — mijenjaj samo ovdje, automatski se primijenjuju na stranicu
 *
 * Kako dodati vlastitu sliku:
 *  1. Kopiraj sliku u mapu:  public/img/
 *  2. Promijeni putanju dolje u obliku:  '/img/naziv-slike.jpg'
 */

export const images = {
  // ─── HERO ────────────────────────────────────────────────────────────
  hero: '/img/stipomont_logo.png',

  // ─── PROJEKTI (naslovna slika — prikazuje se na početnoj stranici) ───
  projects: {
    sestine:   '/img/sestine1.jpeg',
    horvatova: '/img/horvatova1.jpeg',
    krk:       '/img/krk1.png',
    zitnjak:   '/img/zitnjak1.jpeg',
  },

  // ─── GALERIJE (sve slike — prikazuju se na stranici projekata) ────────
  galleries: {
    sestine:   ['/img/sestine1.jpeg', '/img/sestine2.jpeg', '/img/sestine3.jpeg', '/img/sestine4.jpeg', '/img/sestine5.jpeg'],
    horvatova: ['/img/horvatova1.jpeg', '/img/horvatova2.jpeg', '/img/horvatova3.jpeg', '/img/horvatova4.jpeg', '/img/horvatova5.jpeg'],
    krk:       ['/img/krk1.png', '/img/krk2.jpg', '/img/krk3.jpg'],
    zitnjak:   ['/img/zitnjak1.jpeg', '/img/zitnjak2.jpeg', '/img/zitnjak3.jpeg', '/img/zitnjak4.jpeg'],
  },

  // ─── TIM (opcionalno) ─────────────────────────────────────────────────
  team: {
    stipo:   undefined as string | undefined,
    dalibor: undefined as string | undefined,
    filip:   undefined as string | undefined,
  },
}
