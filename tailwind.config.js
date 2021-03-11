module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: {
        custome: '#151618'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
