/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should log in with valid credentials', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');

    cy.showMessage('#flash', 'You logged into a secure area!');
  });

  it('should log out successfully', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');

    cy.get('.button')
      .should('contain.text', 'Logout')
      .click();

    cy.get('h2').should('contain.text', 'Login Page');
  });

  it('should not log in with wrong credentials', () => {
    cy.login('wrongUser', 'wrongPass!');

    cy.showMessage('.error', 'Your username is invalid!');
  });
});
