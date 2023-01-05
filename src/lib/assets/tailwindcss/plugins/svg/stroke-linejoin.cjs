const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function ({ addUtilities, variants }) {
    const utilities = {
      '.linejoin-arcs': {
        'stroke-linejoin': 'arcs'
      },
      '.linejoin-bevel': {
        'stroke-linejoin': 'bevel'
      },
      '.linejoin-miter': {
        'stroke-linejoin': 'miter'
      },
      '.linejoin-miter-clip': {
        'stroke-linejoin': 'miter-clip'
      },
      '.linejoin-round': {
        'stroke-linejoin': 'round'
      }
    };
    addUtilities(utilities, {
      variants: variants('strokeLinejoin')
    });
  },

  {
    theme: {
      strokeLinejoin: {}
    },
    variants: {
      strokeLinejoin: []
    }
  }
);
