const { defineConfig } = require('cypress');

module.exports = defineConfig({
  baseUrl: 'https://the-internet.herokuapp.com',
  e2e: {
    setupNodeEvents(on, config) {
    }
  }
});
