/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container: {
      center: 'true',
    },
    fontFamily: {
      leagueSpartan: 'League Spartan',
    },
    colors: {
      veryDarkMagneta: 'hsl(300, 43%, 22%)',
      softPink: 'hsl(333, 80%, 67%)',
      darkGrayishMagneta: 'hsl(303, 10%, 53%)',
      lightGrayishMagneta: 'hsl(300, 24%, 96%)',
      white: '#fff',
      black:'#252525'
    },

    extend: {},
  },
  plugins: [],
}
