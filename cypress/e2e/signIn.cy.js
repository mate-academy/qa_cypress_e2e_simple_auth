/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid credentials', () => {
    cy.fixture('userData.json').then((userData) => {
      const { validUsername, validPassword } = userData;
      cy.get('#username').type(validUsername);
      cy.get('#password').type(validPassword);
      cy.get('.radius').contains('Login').click();
      cy.contains('You logged into a secure area!').should('be.visible');
    });
  });

  it('should show validation errors with invalid credentials', () => {
    cy.fixture('userData.json').then((userData) => {
      const { invalidUsername, invalidPassword } = userData;
      cy.get('#username').type(invalidUsername);
      cy.get('#password').type(invalidPassword);
      cy.get('.radius').contains('Login').click();
      cy.contains('Your username is invalid!').should('be.visible');
    });

    it('should logout successfully', () => {
      cy.visit('/login/secure', { failOnStatusCode: false });
      cy.url().should('include', '/login');
      cy.contains('Logout').click();
      cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    });
  });
});
