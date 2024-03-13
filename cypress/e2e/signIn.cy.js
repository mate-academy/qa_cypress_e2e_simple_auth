/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const invalidUsername = 'tomsmit';
  const invalidPassword = 'SecretPassword!';
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to successfully sign in', () => {

    cy.get('[id="username"]').type(username);
    cy.get('[id="password"]').type(password);
    cy.get('.fa-sign-in').contains('Login').click();
    cy.get('.flash.success').contains('You logged into a secure area!')
      .should('be.visible');
  });

  it('should provide validation errors login with invalid username', () => {

    cy.get('[id="username"]').type(invalidUsername);
    cy.get('[id="password"]').type(password);
    cy.get('.fa-sign-in').contains('Login').click();
    cy.get('.flash.error').contains('Your username is invalid!')
      .should('be.visible');
  });

  it('should provide validation errors login with invalid password', () => {

    cy.get('[id="username"]').type(username);
    cy.get('[id="password"]').type(invalidPassword);
    cy.get('.fa-sign-in').contains('Login').click();
    cy.get('.flash.error').contains('Your password is invalid!')
      .should('be.visible');
  });

  it('should provide an ability to successfully logged out', () => {

    cy.get('[id="username"]').type(username);
    cy.get('[id="password"]').type(password);
    cy.get('.fa-sign-in').contains('Login').click();
    cy.get('.icon-signout').contains('Logout').click();
    cy.get('.flash.success').contains('You logged out of the secure area!')
      .should('be.visible');
  });
});
