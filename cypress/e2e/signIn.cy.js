const validUsername = 'tomsmith';
const validPassword = 'SuperSecretPassword!';
const invalidUsername = 'invalidUsername';
const invalidPassword = 'invalidPassword';

describe('Login and Logout flow', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('logs in with valid credentials', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/secure');
    cy.get('div#flash').should('contain', 'You logged into a secure area!');
  });

  it('logs in with invalid credentials', () => {
    cy.get('#username').type(invalidUsername);
    cy.get('#password').type(invalidPassword);
    cy.get('button[type="submit"]').click();
    cy.get('div#flash').should('contain', 'invalid username or password');
  });

  it('logs out successfully', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('button[type="submit"]').click();
    cy.get('.button.secondary.radius').click();
    cy.url().should('include', '/login');
    cy.get('div#flash').should('contain', 'You logged out of the secure area!');
  });
});
