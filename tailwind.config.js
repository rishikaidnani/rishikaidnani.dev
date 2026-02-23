/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-card': 'var(--bg-card)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'accent-red': 'var(--accent-red)',
        'accent-red-dark': 'var(--accent-red-dark)',
        'accent-red-light': 'var(--accent-red-light)',
        'border-color': 'var(--border-color)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(229, 9, 20, 0.15)',
        'soft-lg': '0 4px 16px rgba(229, 9, 20, 0.2)',
        'glow': '0 0 20px rgba(229, 9, 20, 0.4)',
      },
      maxWidth: {
        'readable': '720px',
        'content': '1200px',
      },
    },
  },
  plugins: [],
}
