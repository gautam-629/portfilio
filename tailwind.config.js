/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background_color:'#121212',
        secondary_background:'#323232',
        text_color:'#FFFFFF',
        tersory_background:'#716C6C',
        blue:'#0077FF',
        icon_color:'#3FDB4F'
      }
    },
  },
  plugins: [],
}
