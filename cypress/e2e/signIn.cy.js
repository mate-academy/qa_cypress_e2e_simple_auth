/// <reference types="cypress" />

describe('Sign In page', () => {
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = 'qwerty123';
  const invalidPassword = 'SuperSecret';
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should sign in with valid creds', () => {
    cy.get('[id="username"]').type(validUsername);
    cy.get('[id="password"]').type(validPassword);
    cy.get('[type="submit"]').click();
    cy.get('[id="flash"]').should('contain', 'You logged into a secure area');
  });

  it('should not sign in with invalid username', () => {
    cy.get('[id="username"]').type(invalidUsername);
    cy.get('[id="password"]').type(validPassword);
    cy.get('[type="submit"]').click();
    cy.get('[id="flash"]').should('contain', 'Your username is invalid');
  });

  it('should not sign in with invalid password', () => {
    cy.get('[id="username"]').type(validUsername);
    cy.get('[id="password"]').type(invalidPassword);
    cy.get('[type="submit"]').click();
    cy.get('[id="flash"]').should('contain', 'Your password is invalid');
  });

  it('should not sign in with invalid creds', () => {
    cy.get('[id="username"]').type(invalidUsername);
    cy.get('[id="password"]').type(invalidPassword);
    cy.get('[type="submit"]').click();
    cy.get('[id="flash"]').should('contain', 'Your username is invalid');
  });

  it('should successfully logout', () => {
    cy.get('[id="username"]').type(validUsername);
    cy.get('[id="password"]').type(validPassword);
    cy.get('[type="submit"]').click();
    cy.get('[href="/logout"]').click();
    cy.get('[id="flash"]').should('contain',
      'You logged out of the secure area');
  });
});
