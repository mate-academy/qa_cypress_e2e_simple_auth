/* eslint-disable cypress/unsafe-to-chain-command */
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
// ***********************************************
// Custom Cypress commands
// ***********************************************

Cypress.Commands.add('login', (username, password) => {
  cy.get('#username').clear().type(username);
  cy.get('#password').clear().type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('logout', () => {
  cy.get('.icon-2x.icon-signout').click();
});

Cypress.Commands.add('assertLoginSuccess', () => {
  cy.url().should('include', '/secure');
  cy.get('#flash')
    .should('contain.text', 'You logged into a secure area!')
    .and('have.class', 'success');
});

Cypress.Commands.add('assertLoginError', (message) => {
  cy.get('#flash')
    .should('contain.text', message)
    .and('have.class', 'error');
});
