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
Cypress.Commands.add('successLogin', () => {
  cy.get('[name=username]')
    .type('tomsmith');
  cy.get('[name=password]')
    .type('SuperSecretPassword!');
  cy.contains('[type=submit]', 'Login')
    .click();
});

Cypress.Commands.add('urlLogin', () => {
  cy.url().should('contain', '/login');
});

Cypress.Commands.add('errorMessageUsername', () => {
  cy.get('[class="flash error"]')
    .should('contain', 'Your username is invalid!');
});

Cypress.Commands.add('errorMessagePassword', () => {
  cy.get('[class="flash error"]')
    .should('contain', 'Your password is invalid!');
});

Cypress.Commands.add('clickLoginButton', () => {
  cy.contains('[type=submit]', 'Login')
    .click();
});
