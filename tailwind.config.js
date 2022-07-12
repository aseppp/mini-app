module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
        'poppin-style': ['Poppins', 'sans-serif'],
        'Source-sans-pro': ['Source Sans Pro', 'sans-serif']
      },
      colors: {
        'grey-button': '#4F4F4F',
        'grey-text': '#333333'
      },
      width: {
        128: '40rem',
        130: '60rem',
        150: '90rem',
        1080: '1080px'
      },
      height: {
        30: '40rem',
        1080: '1080px'
      }
    }
  },
  plugins: []
};
