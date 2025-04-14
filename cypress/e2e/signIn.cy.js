/// <reference types="cypress" />

describe('Sign In page', () => {
  const baseUrl = 'https://the-internet.herokuapp.com/login';
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = 'invalidUsername';
  const invalidPassword = 'invalidPassword';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should login successfully with valid credentials', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should show validation errors with invalid credentials', () => {
    cy.get('#username').type(invalidUsername);
    cy.get('#password').type(invalidPassword);
    cy.get('.radius').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should logout successfully', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();
    cy.get('.icon-2x.icon-signout').click();
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
  });
});

