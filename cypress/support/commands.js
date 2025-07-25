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

Cypress.Commands.add('assertSuccessfulLogin', () => {
  cy.get('#flash')
    .should('contain.text', 'You logged into a secure area!');
});

Cypress.Commands.add('assertUnsuccessfulLogin', () => {
  cy.get('#flash')
    .should('contain.text', 'Your username is invalid!');
});

Cypress.Commands.add('asserSuccessfulLogOut', () => {
  cy.get('#flash')
    .should('contain.text', 'You logged out of the secure area!');
});

Cypress.Commands.add('loginUser', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  cy.get('#username').type(username);
  cy.get('#password').type(password + `{Enter}`);
});
