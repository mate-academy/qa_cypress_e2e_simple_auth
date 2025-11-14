const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: `https://the-internet.herokuapp.com/`,
    viewportWidth: 500,
    viewportHeight: 700,
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {}
  }
});
