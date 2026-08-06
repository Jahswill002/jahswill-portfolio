/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg':       'var(--bg)',
        'surface':  'var(--surface)',
        'ink':      'var(--ink)',
        'muted':    'var(--muted)',
        'accent':   'var(--accent)',
        'line':     'var(--line)',
        'card':     'var(--card)',
        'ink-inv':  'var(--ink-inv)',
        // Spectrum discipline colours
        'pm':       'var(--pm)',
        'design':   'var(--design)',
        'build':    'var(--build)',
      },
      fontFamily: {
        'display': ['var(--font-display)', 'sans-serif'],
        'body':    ['var(--font-body)',    'sans-serif'],
        // legacy aliases
        'serif':   ['var(--font-display)', 'sans-serif'],
        'sans':    ['var(--font-body)',    'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.1', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
}
