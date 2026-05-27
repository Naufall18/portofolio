/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F9F8F6',
        bg2: '#F2F0EC',
        border: '#E5E2D9',
        border2: '#CCC8BC',
        ink: '#141210',
        ink2: '#5A5650',
        ink3: '#9B9690',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        blink: 'blink 2s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(0.65)' },
        },
      },
    },
  },
  plugins: [],
}