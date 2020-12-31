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
        //dark: '#009eeb',
      },
      roig: {
        // light: '#85d7ff',
        DEFAULT: '#aa1e22',
        dark: '#741417',
      },
      blaucel: {
        // light: '#85d7ff',
        DEFAULT: '#457b9d',
        //dark: '#009eeb',
      },
      blaumari: {
        // light: '#85d7ff',
        DEFAULT: '#1d3557',
        //dark: '#009eeb',
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
