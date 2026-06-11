/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        'stipo-dark':         '#0A0C0F',
        'stipo-surface':      '#111318',
        'stipo-card':         '#1A1D24',
        'stipo-border':       '#252830',
        'stipo-accent':       '#38BDF8',
        'stipo-accent-light': '#7DD3FC',
        'stipo-accent-muted': '#051926',
        'stipo-text':         '#F0F0F0',
        'stipo-muted':        '#8A8F9B',
        'stipo-subtle':       '#3D4150',
      },
    },
  },
  plugins: [],
}
