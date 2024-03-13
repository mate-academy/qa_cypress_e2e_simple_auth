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
Cypress.Commands.add('validLoginCreds', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  cy.get('[name="username"]')
    .type(username);

  cy.get('[name="password"]')
    .type(password);
});

Cypress.Commands.add('invalidLoginCreds', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  cy.get('[name="username"]')
    .type(username + 'new');

  cy.get('[name="password"]')
    .type(password);
});

Cypress.Commands.add('findByFlashMessage', (value) => {
  let message;
  if (value === 'success') {
    message = 'You logged into a secure area!';
  } else if (value === 'failure') {
    message = 'Your username is invalid!';
  }

  return cy.get('#flash-messages').contains(message);
});
