import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        bg: {
          primary: '#080C14',
          secondary: '#0D1117',
          card: '#0F1623',
          elevated: '#141D2B',
        },
        accent: {
          blue: '#4F8EF7',
          purple: '#7C6EF0',
          glow: 'rgba(79, 142, 247, 0.15)',
        },
        border: {
          subtle: '#1A2332',
          strong: '#243447',
        },
        text: {
          primary: '#E8EDF5',
          secondary: '#8899B0',
          muted: '#4A5E78',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(79, 142, 247, 0.12), transparent)',
        'gradient-card': 'linear-gradient(135deg, rgba(79, 142, 247, 0.05), rgba(124, 110, 240, 0.05))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
