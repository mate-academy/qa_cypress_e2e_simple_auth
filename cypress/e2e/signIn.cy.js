/// <reference types="cypress" />

describe('Sign In page', () => {
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = 'invalidUser';
  const invalidPassword = 'invalidPass';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login successfully with valid credentials', () => {
    cy.get('input[name="username"]').type(validUsername);
    cy.get('input[name="password"]').type(validPassword);

    cy.get('button[type="submit"]').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('should show error with invalid credentials', () => {
    cy.get('input[name="username"]').type(invalidUsername);
    cy.get('input[name="password"]').type(invalidPassword);

    cy.get('button[type="submit"]').click();

    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('should log out successfully', () => {
    cy.get('input[name="username"]').type(validUsername);
    cy.get('input[name="password"]').type(validPassword);

    cy.get('button[type="submit"]').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');

    cy.get('a[href="/logout"]').click();

    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
