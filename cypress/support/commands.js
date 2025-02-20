// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('logInUser', (username, password) => {
//   return cy.request('POST', 'https://the-internet.herokuapp.com/authenticate', {
//     username,
//     password
//   }).then((response) => {
//     console.log('Hooooraaaay!!!!');
//     const returnedCookes = response.headers['set-cookie'];

//     if(returnedCookes) {
//       const authCookie = returnedCookes[0].split(';')[0].split('=')[1];
//       // cy.setCookie('rack.session', authCookie, { path: '/', httpOnly: true })

//     }
//   });
// })

const parent = { prevSubject: 'element' };
Cypress.Commands.add('assertNotifText', parent, (subject, text) => {
  cy.wrap(subject).should('contain.text', text);
});

Cypress.Commands.add('assertUrl', (url) => {
  cy.url().should('equal', `${Cypress.config().baseUrl}${url}`);
});
