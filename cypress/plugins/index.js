const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');

/**
 * @type {Cypress.PluginConfig}
 */
const pluginConfig = (on, config) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: require.resolve('typescript'),
  };

  on('file:preprocessor', cucumber(options));
};

module.exports = pluginConfig;
