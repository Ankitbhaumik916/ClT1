/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Minimal black & white system
        ink: {
          DEFAULT: '#000000',
          soft: 'rgba(0,0,0,0.70)',
          muted: 'rgba(0,0,0,0.55)',
          faint: 'rgba(0,0,0,0.35)',
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#F4F4F6',
        },
        line: {
          DEFAULT: 'rgba(0,0,0,0.12)',
          strong: 'rgba(0,0,0,0.35)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        ticker: 'ticker 12s linear infinite',
      },
    },
  },
  plugins: [],
}
