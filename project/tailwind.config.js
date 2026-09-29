/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#03000f',
          surface: '#0a0420',
          card: 'rgba(12, 6, 35, 0.6)',
          border: 'rgba(0, 240, 255, 0.15)',
          neon: '#00f0ff',
          magenta: '#ff2bd6',
          lime: '#b6ff00',
          amber: '#ffb800',
          violet: '#7c3aed',
          muted: '#8b8db5',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 20px rgba(0, 240, 255, 0.4), 0 0 40px rgba(0, 240, 255, 0.15)',
        'neon-magenta': '0 0 20px rgba(255, 43, 214, 0.4), 0 0 40px rgba(255, 43, 214, 0.15)',
        'neon-soft': '0 0 12px rgba(0, 240, 255, 0.25)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'grid-cyber':
          'linear-gradient(rgba(0,240,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.04) 1px, transparent 1px)',
        'radial-neon': 'radial-gradient(circle at 50% 50%, rgba(0,240,255,0.08), transparent 60%)',
      },
      backgroundSize: {
        'grid-lg': '60px 60px',
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'scan-line': 'scanLine 4s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'gradient-shift': 'gradientShift 5s ease infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(0px)' },
          '50%': { opacity: '1', filter: 'blur(1px)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
