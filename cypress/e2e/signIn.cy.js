describe('Login Tests', () => {
  const validUsername = Cypress.env('validUsername');
  const validPassword = Cypress.env('validPassword');

  it('Login with valid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('input[name="username"]').type(validUsername);
    cy.get('input[name="password"]').type(validPassword);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/secure');
  });
  it('Login with invalid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('input[name="username"]').type('test123');
    cy.get('input[name="password"]').type('TestTest123+');
    cy.get('button[type="submit"]').click();

    cy.get('.flash.error').should('contain', 'Your username is invalid!');
  });
});

it('Logout from the app', () => {
  cy.visit('https://the-internet.herokuapp.com/login');

  const validUsername = Cypress.env('validUsername');
  const validPassword = Cypress.env('validPassword');

  cy.get('input[name="username"]').type(validUsername);
  cy.get('input[name="password"]').type(validPassword);
  cy.get('button[type="submit"]').click();

  cy.url().should('include', '/secure');
  cy.get('.flash.success').should('contain', 'You logged into a secure area!');

  cy.get('a[href="/logout"]').click();

  cy.url().should('include', '/login');
});
