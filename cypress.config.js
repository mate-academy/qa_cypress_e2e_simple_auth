module.exports = {
  e2e: {
    //baseUrl:'https://the-internet.herokuapp.com/login',
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
     },
}
