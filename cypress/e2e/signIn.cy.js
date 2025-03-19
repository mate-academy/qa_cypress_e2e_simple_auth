/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('should display validation errors with invalid credentials', () => {
    cy.get('#username').type('invalidUsername');
    cy.get('#password').type('invalidPassword');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('should logout successfully', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.icon-2x').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
