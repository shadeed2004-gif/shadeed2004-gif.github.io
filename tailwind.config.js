/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#f9f7f3',
          soft: '#f2efe8',
          panel: '#ffffff',
          panel2: '#f3f0ea',
        },
        border: {
          DEFAULT: 'rgba(31, 32, 38, 0.12)',
          strong: 'rgba(31, 32, 38, 0.18)',
        },
        text: {
          DEFAULT: '#1f2026',
          muted: '#5e584d',
          faint: '#6b6560',
        },
        primary: {
          DEFAULT: '#f19e01',
          hover: '#c97f00',
          dim: 'rgba(241, 158, 1, 0.13)',
        },
        ink: {
          DEFAULT: '#1f2026',
          soft: '#2a2b33',
          border: 'rgba(255, 255, 255, 0.10)',
        },
        onink: {
          DEFAULT: '#f4f1ea',
          muted: '#aca696',
        },
        amber: {
          DEFAULT: '#dd9a10',
          dim: 'rgba(221, 154, 16, 0.12)',
        },
        emerald: {
          DEFAULT: '#10b981',
          dim: 'rgba(16, 185, 129, 0.12)',
        },
        coral: {
          DEFAULT: '#e5486b',
          dim: 'rgba(229, 72, 107, 0.11)',
        },
      },
      fontFamily: {
        display: ['Roboto', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
      },
      boxShadow: {
        custom: '0 1px 2px rgba(31,28,20,0.05), 0 14px 32px -14px rgba(31,28,20,0.14)',
        customLg: '0 24px 50px -12px rgba(31,28,20,0.22)',
      }
    },
  },
  plugins: [],
}
