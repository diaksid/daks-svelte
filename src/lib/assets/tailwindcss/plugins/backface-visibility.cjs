const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function ({ addUtilities, variants }) {
    const utilities = {
      '.backface-visibile': {
        'backface-visibility': 'visible'
      },
      '.backface-hidden': {
        'backface-visibility': 'hidden'
      }
    };
    addUtilities(utilities, {
      variants: variants('backfaceVisibility')
    });
  },

  {
    theme: {
      backfaceVisibility: {}
    },
    variants: {
      backfaceVisibility: []
    }
  }
);
