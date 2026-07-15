/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        'gt-walsheim': ['GT Walsheim Pro', 'system-ui', 'sans-serif'],
      },
      colors: {
        'evoke-cyan': '#028fbe',
        'evoke-teal': '#15bf9e',
        'evoke-mint': '#18c68f',
        'evoke-ink': '#000000',
        'evoke-muted': '#000000',
        'evoke-border': '#dce9ef',
        'evoke-surface': '#f3f6f8',
        'evoke-bg-base': '#fafbfc',
        'evoke-bg-elevated': '#ffffff',
        'evoke-bg-muted': '#f3f6f8',
        'evoke-bg-accent': '#eef4f6',
        'evoke-black': '#050505',
        'evoke-accent': '#2563eb',
        'evoke-accent-light': '#60a5fa',
        'evoke-accent-dark': '#1d4ed8',
      },
      boxShadow: {
        '2xs': '0 1px 2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
