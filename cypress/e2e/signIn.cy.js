/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid credentials', () => {
    cy.login();
  });

  it('should have correct URL', () => {
    cy.login();

    cy.url().should('contain', '/secure');
  });

  it('should have header saying logged in', () => {
    cy.login();

    cy.contains('#flash', 'You logged into a secure area!');
  });

  it('should not sign in with wrong username', () => {
    cy.get('#username').type('tomsmith1');
    cy.get('#password').type('SuperSecretPassword!' + `{Enter}`);

    cy.contains('#flash', 'Your username is invalid!');
  });

  it.only('should not sign in with wrong password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword1' + `{Enter}`);

    cy.contains('#flash', 'Your password is invalid!');
  });
});
