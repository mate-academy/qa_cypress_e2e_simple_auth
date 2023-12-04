/* eslint-disable max-len */
/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid credentials and assert successfull login', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('button[type="submit"]')
      .click();
    cy.url()
      .should('include', '/secure');
    cy.get('.flash.success')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should attempt login with invalid credentials and assert validation error', () => {
    cy.get('#username')
      .type('tomsmithnotvalid');
    cy.get('#password')
      .type('superinvalidpassword');
    cy.get('button[type="submit"]')
      .click();
    cy.get('.flash.error').should('contain.text', 'Your username is invalid!');
  });

  it('should logout from the app and asser successfull logout', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('button[type="submit"]')
      .click();
    cy.contains('a', 'Logout')
      .click();
    cy.url()
      .should('include', '/login');
    cy.get('.flash.success')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
