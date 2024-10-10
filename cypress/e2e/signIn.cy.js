/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should log in successfully with valid credentials', () => {
    cy.get('input[name="username"]').type('tomsmith');
    cy.get('input[name="password"]').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.get('.flash.success').should('be.visible')
      .and('contain', 'You logged into a secure area');
  });

  it('should show an error for invalid credentials', () => {
    cy.get('input[name="username"]').type('invalidUser');
    cy.get('input[name="password"]').type('invalidPassword');
    cy.get('button[type="submit"]').click();
    cy.get('.flash.error').should('be.visible')
      .and('contain', 'Your username is invalid');
  });

  it('should log out successfully', () => {
    cy.get('input[name="username"]').type('tomsmith');
    cy.get('input[name="password"]').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.get('.flash.success').should('be.visible')
      .and('contain', 'You logged into a secure area');
    cy.get('a[href="/logout"]').should('be.visible').click();
    cy.get('.flash.success').should('be.visible')
      .and('contain', 'You logged out of the secure area');
  });
});
