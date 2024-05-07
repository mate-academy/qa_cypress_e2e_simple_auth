const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com/',
    viewportWidth: 1024,
    viewportHeight: 768,
    defaultCommandTimeout: 4000,
    setupNodeEvents(on, config) {
    }
  }
});