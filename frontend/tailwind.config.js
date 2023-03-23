/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        admin_primary: '#000000',
        admin_secondary: '#000000',
        admin_link1: '#FFFFFF',
        admin_link2: '#8FAFFF',
        admin_sidebar: '#4D79F6',
        admin_main: '#FFFFFF',
        admin_bg: '#E9F0F8'
      },
      keyframes: {
        lengthen: {
          '0%': { width: '0', opacity: '.3' },
          '100%': { width: '100%', opacity: '1' },
        }
      },
      animation: {
        lengthen: 'lengthen 1.2s 1'
      }
    },
  },
  plugins: [],
}