module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        'permanent-marker-regular': ['Permanent Marker', 'cursive'], // Define 'permanent-marker-regular' font family
        sans: ['Permanent Marker', 'cursive'], // Use 'Permanent Marker' font for sans-serif
      },
      letterSpacing: {
        widest: '.9em',
      },
    },
  },
  plugins: [],
};
