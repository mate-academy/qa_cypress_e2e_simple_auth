const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com/login',
    setupNodeEvents(on, config) {
    }
  }
});
