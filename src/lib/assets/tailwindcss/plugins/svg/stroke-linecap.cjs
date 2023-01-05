const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function ({ addUtilities, variants }) {
    const utilities = {
      '.linecap-butt': {
        'stroke-linecap': 'butt'
      },
      '.linecap-round': {
        'stroke-linecap': 'round'
      },
      '.linecap-square': {
        'stroke-linecap': 'square'
      }
    };
    addUtilities(utilities, {
      variants: variants('strokeLinecap')
    });
  },

  {
    theme: {
      strokeLinecap: {}
    },
    variants: {
      strokeLinecap: []
    }
  }
);
