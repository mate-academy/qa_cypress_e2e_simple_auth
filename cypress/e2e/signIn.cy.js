/// <reference types='cypress' />

describe('Sign In page', () => {
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = 'invalid';
  const invalidPassword = 'invalid';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Should log in successfully', () => {
    cy.get('[id="username"]').type(validUsername);
    cy.get('[id="password"]').type(validPassword);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/secure');
    cy.contains('You logged into a secure area!').should('be.visible');
  });

  it('Should fail to log in', () => {
    cy.get('[id="username"]').type(invalidUsername);
    cy.get('[id="password"]').type(invalidPassword);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/login');
    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('Should log out successfully', () => {
    cy.get('[id="username"]').type(validUsername);
    cy.get('[id="password"]').type(validPassword);
    cy.get('button[type="submit"]').click();
    cy.contains('Logout').click();
    cy.url().should('include', '/login');
    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
