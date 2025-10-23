Cypress.Commands.add('getElementById', (id) => {
  cy.get(`#${id}`);
});

Cypress.Commands.add('checkValidationMessage', (message) => {
  cy.getElementById('flash').should('contain.text', message);
});

Cypress.Commands.add('loginUser', (username, password) => {
  cy.getElementById('username').type(username);

  cy.getElementById('password').type(password + '{Enter}');
});

Cypress.Commands.add('assertPageUrl', (url) => {
  cy.location('pathname').should('equal', url);
});
