const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function ({ addUtilities, variants }) {
    const utilities = {
      '.animation-paused': {
        'animation-play-state': 'paused'
      },
      '.animation-running': {
        'animation-play-state': 'running'
      }
    };
    addUtilities(utilities, {
      variants: variants('animationPlayState')
    });
  },

  {
    theme: {
      animationPlayState: {}
    },
    variants: {
      animationPlayState: []
    }
  }
);
