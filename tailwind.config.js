/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg': 'var(--bg)',
        'ink': 'var(--ink)',
        'muted': 'var(--muted)',
        'accent': 'var(--accent)',
        'line': 'var(--line)',
        'card': 'var(--card)',
        'ink-inv': 'var(--ink-inv)',
      },
      fontFamily: {
        'serif': ['var(--font-serif)', 'Georgia', 'serif'],
        'sans': ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
