module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
        'poppin-style': ['Poppins', 'sans-serif']
      },
      colors: {
        'grey-button': '#4F4F4F',
        'grey-text': '#333333'
      },
      width: {
        128: '40rem',
        130: '60rem'
      },
      height: {
        30: '40rem',
        1080: '1080px'
      }
    }
  },
  plugins: []
};
