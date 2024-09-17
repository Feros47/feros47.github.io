module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        retro: {
          darkPeach: '#e0a3af',
          darkMint: '#99cc99',
          darkBlue: '#99ccee',
          darkYellow: '#ffcc99',
          darkPink: '#e0a3c9',
          text: '#333333', // dark text color
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
