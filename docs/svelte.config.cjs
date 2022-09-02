const svelteSVG = require("vite-plugin-svelte-svg");

module.exports = {
  kit: {
    vite: {
      plugins: [
        svelteSVG({
          svgoConfig: {}, // See https://github.com/svg/svgo#configuration
          requireSuffix: false, // Set false to accept '.svg' without the '?component'
        }),
      ],
    },
  },
};