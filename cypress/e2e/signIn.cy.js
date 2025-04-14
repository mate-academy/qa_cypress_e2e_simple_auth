/// <reference types="cypress" />

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should go to Secure Page upon successful login', () => {
    cy.validLogin();

    cy.url().should('include', '/secure');
    cy.contains('h2', 'Secure Area').should('exist');
  });

  it('should show success notification upon successful login', () => {
    cy.validLogin();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should go to Login Page upon logout', () => {
    cy.validLogin();

    cy.contains('a', 'Logout').click();

    cy.url().should('include', '/login');
    cy.get('h2').should('contain.text', 'Login Page');
  });

  it('should leave in Login Page with invalid data', () => {
    cy.invalidLogin();

    cy.url().should('include', '/login');
    cy.get('h2').should('contain.text', 'Login Page');
  });

  it('should show error notification with invalid data', () => {
    cy.invalidLogin();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });
});
