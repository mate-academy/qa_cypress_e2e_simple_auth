const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    viewportHeight: 900,
    viewportWidth: 650,
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
    }
  }
});
