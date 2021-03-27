module.exports = {
  purge: {
    mode: 'layers',
    content: [
      './public/**/*.html',
      './src/**/*.vue'
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
