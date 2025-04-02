module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#0A192F',
        secondary: '#1D3557'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}