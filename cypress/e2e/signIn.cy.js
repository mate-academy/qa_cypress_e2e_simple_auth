/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should allow to log in with valid cred', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area');
  });

  it('should does not allow to log in with invalid cred', () => {
    cy.get('#username').type('anatolii');
    cy.get('#password').type('Password#');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your username is invalid');
  });

  it('should allow to log out', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.icon-2x').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
