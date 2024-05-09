/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide the ability to login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('should not provide the ability to login with invalid creds', () => {
    cy.get('#username').type('tomsmithhhh');
    cy.get('#password').type('SSSSuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('should provide the ability to logout', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.get('.button').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
