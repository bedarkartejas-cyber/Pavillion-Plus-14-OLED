/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 1. THE OBSIDIAN COLOR SYSTEM
      // Based on Apple's "Pro" dark mode and Titanium finishes
      colors: {
        canvas: '#000000',           // Deepest black for OLED screens
        'canvas-subtle': '#161617',  // Elevated section background
        'canvas-elevated': '#1D1D1F', // Secondary surfaces/cards
        
        // High-Precision Borders
        border: 'rgba(255, 255, 255, 0.12)',
        'border-light': 'rgba(255, 255, 255, 0.24)',
        'border-strong': 'rgba(255, 255, 255, 0.40)',

        // Typography Hierarchy
        'content-primary': '#F5F5F7',   // Silver/Off-white
        'content-secondary': '#A1A1A6', // Muted Silver
        'content-tertiary': '#6E6E73',  // Subdued Slate
        'content-inverse': '#000000',   // For light buttons/surfaces

        // Brand Accents
        'apple-blue': {
          DEFAULT: '#0071E3',
          hover: '#0077ED',
          vivid: '#2997FF', // Used for links and highlights
        },
        'apple-purple': '#BF5AF2', // Apple Intelligence glow
      },

      // 2. FLUID & EDITORIAL TYPOGRAPHY
      fontFamily: {
        // Prioritizes SF Pro system fonts for that native "Apple" feel
        sans: [
          'SF Pro Display', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Inter', 
          'sans-serif'
        ],
        mono: ['SF Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Massive, impactful headline sizes
        'hero': ['clamp(3rem, 10vw, 8rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
        'section-head': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '600' }],
        'card-head': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      letterSpacing: {
        'tightest': '-0.022em',
        'tighter': '-0.011em',
        'widest': '0.12em',
      },

      // 3. MOTION PHYSICS (The Apple "Feel")
      // These bezier curves mimic the weight and resistance of macOS/iOS
      transitionTimingFunction: {
        'apple-ease': 'cubic-bezier(0.28, 0.11, 0.32, 1)',
        'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'luxury-reveal': 'cubic-bezier(0.4, 0, 0, 1)',
        'spring-smooth': 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Snappy bounce
      },
      transitionDuration: {
        'premium': '800ms',
        'slow-reveal': '1200ms',
      },

      // 4. ANIMATION SEQUENCING
      keyframes: {
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(40px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'mask-shimmer': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        }
      },
      animation: {
        'reveal': 'reveal-up 1.2s cubic-bezier(0.28, 0.11, 0.32, 1) forwards',
        'fade': 'fade-in 0.8s ease-out forwards',
        'shimmer': 'mask-shimmer 4s linear infinite',
      },

      // 5. DEPTH & SPACING
      spacing: {
        'section': '160px', // Standard gap between product features
        'gutter': '24px',
      },
      backgroundImage: {
        // Metallic and Glass gradients
        'titanium-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%)',
        'apple-intelligence': 'linear-gradient(45deg, #2997FF, #BF5AF2, #FF5968)',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        // The core "Apple Glass" utility
        '.glass': {
          'background': 'rgba(22, 22, 23, 0.75)',
          'backdrop-filter': 'blur(20px) saturate(180%)',
          '-webkit-backdrop-filter': 'blur(20px) saturate(180%)',
          'border': '1px solid rgba(255, 255, 255, 0.08)',
        },
        // Premium text masking for gradients
        '.mask-text': {
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
          'display': 'inline-block',
        },
        // Hardware acceleration for buttery smooth animations
        '.smooth-antialiased': {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          'transform': 'translateZ(0)',
        },
        // Balanced text wrapping for headlines
        '.text-balance': {
          'text-wrap': 'balance',
        },
      })
    }),
  ],
}