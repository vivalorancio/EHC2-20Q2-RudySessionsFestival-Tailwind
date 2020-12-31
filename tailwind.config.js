module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blanc: {
        light: '#f5fcf3',
        DEFAULT: '#f1faee',
      },
      roig: {
        DEFAULT: '#aa1e22',
        dark: '#741417',
      },
      blaucel: {
        DEFAULT: '#457b9d',
      },
      blaumari: {
        DEFAULT: '#1d3557',
      },
    },
    fontFamily: {
      sans: [
        'Merriweather Sans',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ],
      serif: ['Merriweather', 'Georgia', 'Times New Roman', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: { transitionProperty: ['hover'] },
  },
  plugins: [],
};
