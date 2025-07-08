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
Cypress.Commands.add('userloginAPI', (username, password) => {
  cy.request({
    method: 'POST',
    url: '/authenticate',
    form: true,
    body: {
      username,
      password
    }
  }).then((response) => {
    const cookies = response.headers['set-cookie'];
    const rackSessionCookie = cookies.find(
      (c) => c.startsWith('rack.session=')
    );
    const sessionValue = rackSessionCookie.split(';')[0].split('=')[1];
    cy.setCookie('rack.session', sessionValue);
  });
});
