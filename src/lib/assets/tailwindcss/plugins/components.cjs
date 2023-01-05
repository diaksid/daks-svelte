//const defaultTheme = require('tailwindcss/defaultTheme');
//const colors = require('tailwindcss/colors');

const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents }) {
  addComponents({
    ['']: {
      '': ''
    }
  });
});
