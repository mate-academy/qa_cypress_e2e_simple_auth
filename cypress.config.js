const { defineConfig } = require('cypress')


module.exports = defineConfig({
  e2e: {
    baseUrl:'https://the-internet.herokuapp.com',
    username:'tomsmith',
    password:'SuperSecretPassword!',
    setupNodeEvents(on, config) {
    },
  },
})
