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
        sans: ['var(--font-montserrat)'],
        mono: ['var(--font-source-code-pro)'],
      },
      colors: {
        white: '#F8F4F0',
        black: '#222222',
        gray: 'rgba(34, 34, 34, 0.40)',
      },
    },
  },
  plugins: [],
}
export default config
