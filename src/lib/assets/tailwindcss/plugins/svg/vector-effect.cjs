const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function ({ addUtilities, variants }) {
    const utilities = {
      '.vector-non-scaling-stroke': {
        'vector-effect': 'non-scaling-stroke'
      },
      '.vector-non-scaling-size': {
        'vector-effect': 'non-scaling-size'
      },
      '.vector-non-rotation': {
        'vector-effect': 'non-rotation'
      },
      '.vector-fixed-position': {
        'vector-effect': 'fixed-position'
      },
      '.vector-effect-none': {
        'vector-effect': 'none'
      }
    };
    addUtilities(utilities, {
      variants: variants('vectorEffect')
    });
  },

  {
    theme: {
      vectorEffect: {}
    },
    variants: {
      vectorEffect: []
    }
  }
);
