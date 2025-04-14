Cypress.Commands.add('login', (username, password) => {
  cy.get('[name="username"]')
    .type(username);
  cy.get('[name="password"]')
    .type(password);
});

Cypress.Commands.add('findByFlashMessage', (value) => {
  let message;
  if (value === 'success') {
    message = 'You logged into a secure area!';

Cypress.Commands.add('invalidUsername', () => {
  cy.get('[name="invalidUsername"]')
    .type(invalidUsername);
  cy.get('[name="password"]')
    .type(password);
});
  };
})