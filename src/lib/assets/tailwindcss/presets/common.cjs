//const defaultTheme = require('tailwindcss/defaultTheme');
//const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          xs: '2rem',
          sm: '3rem',
          lg: '4rem',
          '2xl': '5rem'
        }
      },
      screens: {
        '2xs': '320px',
        xs: '480px',
        '3xl': '1600px'
      },
      fontSize: {
        '3xs': '0.5rem',
        '2xs': '0.625rem',
        '2.5xl': '1.6875rem',
        '3.5xl': '2rem',
        '4.5xl': '2.5rem'
      },
      backgroundSize: {
        '1/20': '5%',
        '1/10': '10%',
        '1/5': '20%',
        '1/4': '25%',
        '1/3': '33.333333%',
        '1/2': '50%'
      },
      backgroundPosition: {
        'center-top': 'center top'
      },
      spacing: {
        '1/7': '14.285714%',
        '1/8': '12.5%',
        '1/9': '11.111111%',
        '1/10': '10%',
        '1/11': '9.090909%',
        contain: 'contain',
        inherit: 'inherit'
      },
      maxWidth: {
        auto: 'auto',
        inherit: 'inherit'
      },
      minWidth: {
        auto: 'auto',
        inherit: 'inherit'
      },
      maxHeight: {
        auto: 'auto',
        inherit: 'inherit'
      },
      minHeight: {
        auto: 'auto',
        inherit: 'inherit'
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '4/3': '4 / 3',
        A4: '620 / 877',
        A4l: '877 / 620'
      },
      transitionDuration: {
        1500: '1500ms',
        2000: '2000ms',
        2500: '2500ms',
        3000: '3000ms',
        5000: '5000ms'
      },
      content: {
        null: '""'
      }
    }
  },

  plugins: [
    require('../plugins/base.cjs'),
    require('../plugins/utilities.cjs'),
    require('../plugins/current.cjs')
  ]
};
