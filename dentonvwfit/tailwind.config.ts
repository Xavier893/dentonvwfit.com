import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      background: '#E8E8E8',
      red: '#E73539',
      black: '#000000',
      grey: '#444343'
    },
    boxShadow: {
      lg: '0px 20px 70px 0px rgba(231, 53, 57, 0.15)'
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      saira: ['Saira Condensed', 'sans-serif']
    },
    extend: {}
  },
  plugins: [],
}
export default config
