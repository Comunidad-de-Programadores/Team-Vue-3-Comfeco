module.exports = {
  purge: [
    './*.html',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#69156A',
        secondary: '#FFB703'
      }
    },
  },
  variants: {
    extend: {
      borderOpacity: ['hover'],
      padding: ['hover']
    },
  },
  plugins: [],
}