Cypress.Commands.add('login', ({ username, password }) => {
  cy.get('#username').type(username);
  cy.get('#password').type(password + '{Enter}');
});

Cypress.Commands.add('logout', () => {
  cy.get('[href="/logout"]').click();
});
