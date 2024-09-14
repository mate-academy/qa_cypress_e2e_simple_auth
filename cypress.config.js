const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // baseUrl: 'https://the-internet.herokuapp.com/login',
    viewportHeight: 720,

    setupNodeEvents(on, config) {
    }
  }
});
