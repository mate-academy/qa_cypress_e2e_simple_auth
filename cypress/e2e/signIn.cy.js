/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const wrongUsername = 'username';
  const wrongPassword = 'password';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should have a correct title', () => {
    cy.contains('h2', 'Login Page').should('exist');
  });

  it('should allow to login', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.contains('button', 'Login').click();

    cy.url().should('equal', Cypress.config().baseUrl + '/secure');
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('should not allow login with wrong username', () => {
    cy.get('#username').type(wrongUsername);
    cy.get('#password').type(password + `{Enter}`);
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('should not allow login with wrong password', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(wrongPassword + `{Enter}`);
    cy.get('#flash').should('contain', 'Your password is invalid!');
  });

  it('should allow to logout', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password + `{Enter}`);
    cy.contains('a', 'Logout').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
