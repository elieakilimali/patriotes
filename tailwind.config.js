/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0047AB',    // Bleu Congo
        secondary: '#CE1126',  // Rouge Congo
        accent: '#FFD700',     // Or
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      },
    }
  },
  plugins: [
    require('./src/css/tailwindcssPlugins.js')  // Import des plugins personnalisés
  ]
}