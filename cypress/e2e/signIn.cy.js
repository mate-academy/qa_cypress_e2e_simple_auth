/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to successfully sign in', () => {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';

    cy.get('[id="username"]').type(username);
    cy.get('[id="password"]').type(password);
    cy.get('.fa-sign-in').contains('Login').click();
    cy.get('.flash.success').contains('You logged into a secure area!')
      .should('be.visible');
  });

  it('should provide validation errors login with invalid username', () => {
    const invalidUsername = 'tomsmit';
    const password = 'SuperSecretPassword!';

    cy.get('[id="username"]').type(invalidUsername);
    cy.get('[id="password"]').type(password);
    cy.get('.fa-sign-in').contains('Login').click();
    cy.get('.flash.error').contains('Your username is invalid!')
      .should('be.visible');
  });

  it('should provide validation errors login with invalid password', () => {
    const username = 'tomsmith';
    const invalidPassword = 'SecretPassword!'; 

    cy.get('[id="username"]').type(username);
    cy.get('[id="password"]').type(invalidPassword);
    cy.get('.fa-sign-in').contains('Login').click();
    cy.get('.flash.error').contains('Your password is invalid!')
      .should('be.visible');
  });

  it('should provide an ability to successfully logged out', () => {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';

    cy.get('[id="username"]').type(username);
    cy.get('[id="password"]').type(password);
    cy.get('.fa-sign-in').contains('Login').click();
    cy.get('.icon-signout').contains('Logout').click();
    cy.get('.flash.success').contains('You logged out of the secure area!')
      .should('be.visible');
  });
});
