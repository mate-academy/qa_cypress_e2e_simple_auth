/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should successfully login and logout', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button.radius', 'Login').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.contains('a.button.secondary.radius', 'Logout').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });

  it('should return error with wrong username', () => {
    cy.get('#username').type('tomsmmmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button.radius', 'Login').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('should return error with wrong password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperPassword');
    cy.contains('button.radius', 'Login').click();
    cy.get('#flash').should('contain', 'Your password is invalid!');
  });
});
