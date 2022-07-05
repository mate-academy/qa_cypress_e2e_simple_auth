const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
    e2e: {
      baseUrl: 'https://the-internet.herokuapp.com',
      viewportWidth: 1024,
      viewportHeight: 768
    }
  

});
