/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.url().should('include', '/login');
  });

  it('should be able to log in with valid credential data', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button.radius').click();
    cy.contains('Welcome to the Secure Area').should('be.visible');
  });

  it('should not be able to log in with invalid username', () => {
    cy.get('#username').type('tomsmith2');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button.radius').click();
    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('should not be able to log in with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!2');
    cy.get('button.radius').click();
    cy.contains('Your password is invalid!').should('be.visible');
  });

  it('should be able to log out after successful log in', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button.radius').click();
    cy.contains('Welcome to the Secure Area').should('be.visible');
    cy.get('.button').click();
    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
