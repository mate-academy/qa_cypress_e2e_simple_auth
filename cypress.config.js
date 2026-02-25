const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium') {
          launchOptions.args.push('--blink-settings=imagesEnabled=false');
        }
        return launchOptions;
      });
    },
    baseUrl: 'https://conduit.mate.academy/',
    viewportWidth: 1024,
    viewportHeight: 768
  }
});
// {
//     "user": {
//         "username": "dedewdewdwe",
//         "email": "swswsqw@gmail.com",
//         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEwNDg0MCwidXNlcm5hbWUiOiJkZWRld2Rld2R3ZSIsImV4cCI6MTc3NzIzODI3NiwiaWF0IjoxNzcyMDU0Mjc2fQ.lRTZ7MHxLov1YtHhkDcT6DcHorfM8ZU938h1tTFD0g4",
//         "bio": null,
//         "image": null
//     }
// }
// {"username":"dedewdewdwe",
// "email":"swswsqw@gmail.com",
// "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEwNDg0MCwidXNlcm5hbWUiOiJkZWRld2Rld2R3ZSIsImV4cCI6MTc3NzIzODI3NiwiaWF0IjoxNzcyMDU0Mjc2fQ.lRTZ7MHxLov1YtHhkDcT6DcHorfM8ZU938h1tTFD0g4",
// "bio":null,
// "image":null,
// "effectiveImage":"https://static.productionready.io/images/smiley-cyrus.jpg"};
