//const defaultTheme = require('tailwindcss/defaultTheme');
//const colors = require('tailwindcss/colors');

const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addBase }) {
  addBase({
    [':root']: {
      '--scrollbar-size': '6px'
    },
    ['::selection']: {
      color: 'rgb(229 231 235)',
      'background-color': 'rgb(118 169 250)'
    },
    ['::-webkit-scrollbar-track']: {
      '-webkit-overflow-scrolling': 'touch',
      '-webkit-box-shadow': 'inset 0 0 8px rgba(0, 0, 0, 0.3)',
      'background-color': 'rgb(107 114 128)',
      'border-radius': '0.5rem',
      'box-shadow': 'inset 0 0 8px rgba(0, 0, 0, 0.3)'
    },
    ['::-webkit-scrollbar']: {
      '-webkit-overflow-scrolling': 'touch',
      width: 'var(--scrollbar-size)',
      height: 'var(--scrollbar-size)',
      'background-color': 'rgb(107 114 128)'
    },
    ['::-webkit-scrollbar-thumb']: {
      '-webkit-overflow-scrolling': 'touch',
      '-webkit-box-shadow': 'inset 0 0 8px rgba(0, 0, 0, 0.3)',
      'background-color': 'rgb(31 41 55)',
      'border-radius': '0.5rem',
      'box-shadow': 'inset 0 0 8px rgba(0, 0, 0, 0.3)'
    },
    ['html']: {
      width: '100%',
      'min-height': '100%'
    },
    ['body']: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      width: '100%',
      'min-height': '100vh',
      'overflow-y': 'scroll',
      'scroll-behavior': 'smooth'
    }
  });
});
