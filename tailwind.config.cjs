/*const plugin = require('tailwindcss/plugin');

const fixed = plugin(function ({ addVariant }) {
  addVariant('fixed', ['&.fixed', '.fixed &']);
});*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,svelte,ts,js}'],

  //presets: [require('./src/lib/assets/tailwindcss/presets/common.cjs')],

  theme: {
    extend: {
      /*backgroundImage: {
        loading: 'url($lib/assets/icons/loading/0.svg)',
        'loading-data': 'url($lib/assets/icons/loading/data.svg)',
        'screen-block': 'url($lib/assets/icons/loading/screen-block.svg)'
      }*/
    }
  },

  variants: {
    extend: {
    }
  },

  plugins: [
    //fixed
    //require('@tailwindcss/aspect-ratio'),
    //require('@tailwindcss/typography')
  ]
};
