/// <reference types="cypress" />

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
const username = 'tomsmith';
const password = 'SuperSecretPassword!';

Cypress.Commands.add('getCredForLogin', () => {
  cy.get('#username').type(`${username}`);
  cy.get('#password').type(`${password}`);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('getInvalidUsername', () => {
  cy.get('#username').type(`${username}1`);
  cy.get('#password').type(`${password}`);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('getInvalidPassword', () => {
  cy.get('#username').type(`${username}`);
  cy.get('#password').type(`${password}2`);
  cy.get('button[type="submit"]').click();
});
