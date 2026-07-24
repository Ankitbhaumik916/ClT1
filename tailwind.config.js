/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          white: 'rgba(255,255,255,0.06)',
          border: 'rgba(255,255,255,0.12)',
          hover: 'rgba(255,255,255,0.10)',
          strong: 'rgba(255,255,255,0.14)',
        },
        // NOTE: `teal.*` keys are kept as aliases so existing utility classes
        // (text-teal-bright, bg-teal-bright/40, …) keep working — they now
        // resolve to the gold palette below.
        teal: {
          bright: '#EFCE96',
          mid: '#c9a96e',
          dim: '#a07d3a',
          glow: 'rgba(239,206,150,0.25)',
        },
        gold: {
          400: '#EFCE96',
          500: '#c9a96e',
          600: '#a07d3a',
        },
        surface: {
          900: '#0a0a0a',
          800: '#1a1a1a',
          700: '#2a2a2a',
          600: '#3a3a3a',
        },
        bio: {
          green: '#4ade80',
          violet: '#a78bfa',
          amber: '#fbbf24',
        },
        dark: {
          base: '#0a0a0a',
          surface: '#1a1a1a',
          card: '#2a2a2a',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'pulse-ring': {
          '0%, 100%': { boxShadow: '0 0 12px rgba(239,206,150,0.4), 0 0 30px rgba(239,206,150,0.2)' },
          '50%': { boxShadow: '0 0 8px rgba(239,206,150,0.2), 0 0 20px rgba(239,206,150,0.1)' },
        },
        'blink': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'ticker': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-start infinite',
        'ticker': 'ticker 12s linear infinite',
        'spin-slow': 'spin-slow 30s linear infinite',
      },
    },
  },
  plugins: [],
}
