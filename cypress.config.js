const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium') {
          launchOptions.args.push('--incognito');
          return launchOptions;
        }
      });
    },
    baseUrl: 'https://the-internet.herokuapp.com',
    viewportWidth: 1024,
    viewportHeight: 768
  }
});
