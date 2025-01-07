Cypress.Commands.add('login', ({ name, password }) => {
  cy.visit('/login');
  cy.get('#username').type(name);
  cy.get('#password').type(`${password}{Enter}`);
});

Cypress.Commands.add('getPushMessage', (message) => {
  cy.get('#flash').should('contain', message);
});

Cypress.Commands.add('clickOnLogout', (message) => {
  cy.get('.button').should('be.visible').click();
});
