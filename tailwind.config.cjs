/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        midnight: '#0A0A0A',
        charcoal: '#1A1A1A',
        obsidian: '#000000',
        gold: '#C8A974',
        champagne: '#D4AF37',
        cream: '#FAF7F3',
        bone: '#F4F2EF',
        taupe: '#7C7165',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      }
    }
  },
  plugins: []
}
