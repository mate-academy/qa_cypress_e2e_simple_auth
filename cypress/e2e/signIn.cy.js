/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('i').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.url().should('not.include', '/login');
  });

  it('should not provide an ability to log in with invalid creds', () => {
    cy.get('#username').type('invalid Username');
    cy.get('#password').type('invalid Password');
    cy.get('i').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
    cy.url().should('include', '/login');
  });

  it('should provide an ability to log out', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('i').click();
    cy.get('a i').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
    cy.url().should('include', '/login');
  });
});
