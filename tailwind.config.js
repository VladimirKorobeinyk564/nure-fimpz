/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1A1E25',
        'dark-second-bg': '#23272F',
        'dark-input-bg': '#333A45',
        'dark-text-color': '#EBECF0',
        'dark-subtext-color': '#A1A1A1',
      },
      backgroundImage: {
        //images
        'home-bg-dark': "url('assets/images/home/home-page-bg-dark.svg')",
        'home-bg-light': "url('assets/images/home/home-page-bg-light.svg')",

        //gradient
        'home-tagline-gradient': 'linear-gradient(270deg, #0075FF 47%, #00FFD1 90.57%)',
      },
    },
  },
  plugins: [],
}