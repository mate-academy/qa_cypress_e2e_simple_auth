const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    viewportHeight: 500,
    viewportWidth: 1000,
    setupNodeEvents(on, config) {
    }
  }
});
