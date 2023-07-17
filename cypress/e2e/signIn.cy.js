/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');
    cy.url().should('include', '/login');
  });

  it('should be able to log in with valid credential data', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button.radius').click();
    cy.contains('Welcome to the Secure Area').should('be.visible');
  });

  it('should not be able to log in with invalid username', () => {
    cy.get('#username').type(username + '222');
    cy.get('#password').type(password);
    cy.get('button.radius').click();
    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('should not be able to log in with invalid password', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password + '222');
    cy.get('button.radius').click();
    cy.contains('Your password is invalid!').should('be.visible');
  });

  it('should be able to log out after successful log in', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button.radius').click();
    cy.contains('Welcome to the Secure Area').should('be.visible');
    cy.get('.button').click();
    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
