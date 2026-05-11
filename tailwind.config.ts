import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand blues — from ROMEIGH logo
        navy: {
          DEFAULT: '#0A2744',
          50:  '#E8EDF5',
          100: '#C5D2E6',
          200: '#8FAECB',
          300: '#5A89B0',
          400: '#2D6496',
          500: '#0D4FA0',
          600: '#0A3D7A',
          700: '#082C56',
          800: '#061E3A',
          900: '#0A2744',
        },
        blue: {
          DEFAULT: '#0D4FA0',
          50:  '#E8F2FB',
          100: '#C5DCEF',
          200: '#85B7EB',
          300: '#4D8DD8',
          400: '#1A67C0',
          500: '#0D4FA0',
          600: '#0A3D7A',
          700: '#082C56',
          800: '#061E3A',
          900: '#04121F',
        },
        sky: {
          DEFAULT: '#1A7FD4',
          50:  '#EBF5FC',
          100: '#BDDFF6',
          200: '#8FC8F0',
          300: '#61B1E9',
          400: '#3399E2',
          500: '#1A7FD4',
          600: '#1464AA',
          700: '#0F4A80',
          800: '#0A3156',
          900: '#05192C',
        },
        accent: '#0EA5E9',
        // Neutral grays
        gray: {
          50:  '#F4F6F8',
          100: '#EDF0F3',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
        // Semantic
        success: '#16A34A',
        warning: '#D97706',
        danger:  '#DC2626',
      },
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        body:    ['Barlow', 'sans-serif'],
        sans:    ['Barlow', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        xs:    ['0.75rem',  { lineHeight: '1rem' }],
        sm:    ['0.875rem', { lineHeight: '1.25rem' }],
        base:  ['1rem',     { lineHeight: '1.5rem' }],
        lg:    ['1.125rem', { lineHeight: '1.75rem' }],
        xl:    ['1.25rem',  { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem',   { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem',  { lineHeight: '2.5rem' }],
        '5xl': ['3rem',     { lineHeight: '1.05' }],
        '6xl': ['3.75rem',  { lineHeight: '1' }],
        '7xl': ['4.5rem',   { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        sm:  '2px',
        DEFAULT: '4px',
        md:  '6px',
        lg:  '8px',
        xl:  '12px',
        '2xl': '16px',
      },
      boxShadow: {
        card:  '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        lift:  '0 8px 32px rgba(13,79,160,0.10)',
        nav:   '0 1px 0 rgba(255,255,255,0.08)',
        cta:   '0 4px 16px rgba(26,127,212,0.40)',
      },
      animation: {
        'pulse-dot': 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-up':   'fadeUp 0.5s ease both',
        'fade-in':   'fadeIn 0.4s ease both',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-gradient':    'linear-gradient(135deg, #0A2744 0%, #0D3369 50%, #0A3D8A 100%)',
        'hero-pattern':     "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'footer-gradient':  'linear-gradient(180deg, #06192E 0%, #040F1C 100%)',
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
