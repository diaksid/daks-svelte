//const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities }) {
  addUtilities({
    [':root']: {
      '--text-shadow-color': colors.black,
      '--text-shadow-val': '1px'
    },
    [['.disabled', ':disabled', '[disabled]']]: {
      'pointer-events': 'none',
      'touch-action': 'none',
      'user-select': 'none'
    },
    ['.bg-only']: {
      display: 'inline-block',
      overflow: 'hidden',
      'text-align': 'left',
      'text-indent': '-9999em',
      direction: 'ltr'
    },
    ['.bg-only br']: {
      display: 'none'
    },
    ['.clear-pseudo:before']: {
      content: '""',
      position: 'absolute',
      'z-index': '-10',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      opacity: '0'
    },
    ['.clear-pseudo:after']: {
      content: '""',
      display: 'table',
      clear: 'both'
    },
    ['.text-shadow']: {
      'text-shadow': `var(--text-shadow-val)
                      var(--text-shadow-val)
                      calc(var(--text-shadow-val) * 1.5)
                      var(--text-shadow-color)`
    },
    ['.readable']: {
      'text-align': 'justify',
      'font-size': '1rem',
      'line-height': '1.625'
    },
    ['.readable ul']: {
      'list-style-position': 'inside',
      'list-style-type': 'disc'
    }
  });
});
