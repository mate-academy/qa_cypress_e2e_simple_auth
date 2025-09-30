const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
    }
  }
});
