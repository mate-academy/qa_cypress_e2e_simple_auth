const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    viewportHeight: 500,
    baseUrl: 'https://the-internet.herokuapp.com',
    setupNodeEvents(on, config) {
    }
  }
});
