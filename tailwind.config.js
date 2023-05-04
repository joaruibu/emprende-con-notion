/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx, json}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sub': ['Montserrat Subrayada']
      },
      colors: {
        'terracotta': '#BD987E',
        'light-terracota': '#DDBEA9',
        'real-stone': '#E2DCD7',
      },
      boxShadow: {
        'dark': '10px 10px 0px 0px rgba(0,0,0,1)'
      }
    },
  },
  plugins: [],
}