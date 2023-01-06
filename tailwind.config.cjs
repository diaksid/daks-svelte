const plugin = require('tailwindcss/plugin');

const fixed = plugin(function ({ addVariant }) {
  addVariant('fixed', ['&.fixed', '.fixed &']);
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{svelte,html,ts,js}'],

  darkMode: 'class',

  presets: [
    require('./src/lib/assets/tailwindcss/presets/common.cjs'),
    require('./src/lib/assets/tailwindcss/presets/font-family.cjs')
  ],

  theme: {
    extend: {
      backgroundImage: {
        loading: 'url($lib/assets/icons/loading/0.svg)',
        'loading-data': 'url($lib/assets/icons/loading/data.svg)'
      }
    }
  },

  plugins: [fixed]
};
