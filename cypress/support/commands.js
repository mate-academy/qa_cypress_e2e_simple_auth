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
/// <reference types="cypress" />

Cypress.Commands.add('asertPageUrl', (url) => {
  cy.url().should('equal', Cypress.config().baseUrl + url);
});

Cypress.Commands.add('loginUser', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  cy.contains('h2', 'Login Page');

  cy.get('#username').type(username);
  cy.get('#username').should('have.value', username);

  cy.get('#password').type(password + `{Enter}`);
});
