/// <reference types="cypress" />

describe('Login and Logout Tests', () => {
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = 'wronguser';
  const invalidPassword = 'wrongpassword';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid credentials', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('.fa').click();
    cy.url().should('include', '/secure');
    cy.get('.flash').should('contain', 'You logged into a secure area!');
  });

  it('Login with invalid credentials', () => {
    cy.get('#username').type(invalidUsername);
    cy.get('#password').type(invalidPassword);
    cy.get('.fa').click();
    cy.url().should('include', '/login');
    cy.get('.flash').should('contain', 'Your username is invalid!');
  });

  it('Logout from the app', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('.fa').click();
    cy.url().should('include', '/secure');

    cy.get('.icon-2x.icon-signout').click();
    cy.url().should('include', '/login');
    cy.get('.flash').should('contain', 'You logged out of the secure area!');
  });
});
