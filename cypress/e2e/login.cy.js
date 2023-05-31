/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login")
  });

  it('Log in with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.contains('Welcome to the Secure Area').should('be.visible');
  });
  
  it('Log in with invalid credentials', () => {
    cy.get('#username').type('wefnwkfnwfewlwekl');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.contains('Your username is invalid!').should('be.visible');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('weklfwnklfkwefk');
    cy.get('.fa').click();
    cy.contains('Your password is invalid!').should('be.visible');
  });

  it('Log out from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa-sign-in').click();
    cy.contains('Welcome to the Secure Area').should('be.visible');
    cy.get('.icon-signout').click();
    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
