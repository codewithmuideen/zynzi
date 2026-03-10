/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:        '#1F4494',
          'navy-dark': '#163272',
          'navy-darker':'#0c1e47',
          sky:         '#3DA0E4',
          'sky-light': '#5BBCF8',
          'sky-pale':  '#B8DFFB',
          cream:       '#F5F8FF',
          text:        '#0F1C3A',
          body:        '#3D4F6E',
          muted:       '#7A8EAD',
          border:      '#D6E4F7',
          green:       '#22c55e',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand':   'linear-gradient(135deg, #1F4494 0%, #3DA0E4 100%)',
        'gradient-brand-r': 'linear-gradient(135deg, #3DA0E4 0%, #1F4494 100%)',
        'gradient-hero':    'linear-gradient(150deg, #0c1e47 0%, #163272 45%, #1a5a9e 100%)',
        'gradient-sky':     'linear-gradient(90deg, #5BBCF8, #a8dffb)',
        'grid-pattern':     'radial-gradient(rgba(255,255,255,.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-delay':  'float 6s ease-in-out 2s infinite',
        'float-delay2': 'float 6s ease-in-out 3.5s infinite',
        'pulse-dot':    'pulseDot 2s ease-in-out infinite',
        'shimmer':      'shimmer 3s linear infinite 1s',
        'drift1':       'drift1 14s ease-in-out infinite alternate',
        'drift2':       'drift2 18s ease-in-out infinite alternate',
        'drift3':       'drift3 12s ease-in-out infinite alternate',
        'fade-up':      'fadeUp 0.7s ease forwards',
        'card-in':      'cardIn 0.5s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.5', transform: 'scale(1.4)' },
        },
        shimmer: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        drift1: {
          from: { transform: 'translate(0,0) scale(1)' },
          to:   { transform: 'translate(40px,60px) scale(1.1)' },
        },
        drift2: {
          from: { transform: 'translate(0,0) scale(1)' },
          to:   { transform: 'translate(-50px,-40px) scale(1.15)' },
        },
        drift3: {
          from: { transform: 'translate(0,0)' },
          to:   { transform: 'translate(-30px,50px)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        cardIn: {
          '0%':   { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'brand':    '0 20px 60px rgba(31,68,148,.18)',
        'brand-sm': '0 4px 16px rgba(31,68,148,.12)',
        'brand-lg': '0 40px 80px rgba(0,0,0,.45)',
        'glow':     '0 0 50px rgba(61,160,228,.25)',
        'glow-sm':  '0 0 24px rgba(61,160,228,.2)',
      },
    },
  },
  plugins: [],
}
