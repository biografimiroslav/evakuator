/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F4F5F7',
          surface: '#FFFFFF',
          border: '#E2E5E9',
          borderStrong: '#CBD5E1',
          text: '#141619',
          textMuted: '#64748B',
          textSubtle: '#94A3B8',
          orange: '#EA580C',
          orangeHover: '#C2410C',
          orangeLight: 'rgba(234, 88, 12, 0.08)',
          orangeBorder: 'rgba(234, 88, 12, 0.25)',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', '"Outfit"', 'sans-serif'],
        sans: ['"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        clean: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        card: '0 4px 20px -2px rgba(20, 22, 25, 0.05)',
        elevated: '0 20px 25px -5px rgba(20, 22, 25, 0.1), 0 10px 10px -5px rgba(20, 22, 25, 0.04)',
      },
    },
  },
  plugins: [],
};
