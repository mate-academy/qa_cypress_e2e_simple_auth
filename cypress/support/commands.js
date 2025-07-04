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

Cypress.Commands.add('typeData', (nameAttr, data) => {
  cy.get(`[name=${nameAttr}]`).type(data);
});

Cypress.Commands.add('logIn', (userName, password) => {
  cy.typeData('username', userName);
  cy.typeData('password', password);

  cy.get('button.radius').click();
});

Cypress.Commands.add('checkFlashMessage', (message) => {
  cy.get('div#flash')
    .should('contain.text', message);
});

Cypress.Commands.add('checkSuccessfulLogin', () => {
  cy.url().should('include', '/secure');
});
