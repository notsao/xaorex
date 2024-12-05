/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient1' : '#EB499B',
        'gradient2' : '#A775E1',
        'gradient3' : '#5821FC', // Secondary color
      },
    },
  },
  plugins: [],
}

  