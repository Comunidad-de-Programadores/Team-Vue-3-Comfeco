module.exports = {
    purge: [
      './*.html',
      './src/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {
        borderOpacity:['hover'],
        padding: ['hover']
      },
    },
    plugins: [],
  }