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

Cypress.Commands.add('getByPlaceholder', (placeholder) => {
  cy.get(`[placeholder="${placeholder}"]`);
});

Cypress.Commands.add('getById', (id) => {
  cy.get(`[id="${id}"]`);
});

Cypress.Commands.add('getButtonByText', (buttonText) => {
  return cy.contains('.btn', buttonText);
});

Cypress.Commands.add('submitFormByButton', (buttonText) => {
  cy.getButtonByText(buttonText).click();
});

Cypress.Commands.add('submitFormByButton', (buttonText) => {
  cy.contains('button[type="submit"] i', buttonText).click();
});

Cypress.Commands.add('isUserAuthenticated', () => {
  cy.contains('h2', 'Secure Area').should('exist');
});

Cypress.Commands.add('hasErrorMessage', (errorMessage) => {
  cy
    .contains('#flash[data-alert]', errorMessage)
    .should('exist');
});

Cypress.Commands.add('logUserIn', (user) => {
  cy.getById('username').type(user.username);
  cy.getById('password').type(user.password);

  cy.submitFormByButton('Login');

  cy.isUserAuthenticated();
});
