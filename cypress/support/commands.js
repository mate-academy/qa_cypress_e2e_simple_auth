Cypress.Commands.add('getById', (id) => {
  cy.get(`#${id}`);
});

Cypress.Commands.add('login', ({ username, password }) => {
  cy.getById('username').type(username);
  cy.getById('password').type(password);

  cy.contains('button', 'Login').click();
});

Cypress.Commands.add('validLogin', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  cy.login({ username, password });
});

Cypress.Commands.add('invalidLogin', () => {
  const username = '111';
  const password = '222';

  cy.login({ username, password });
});
