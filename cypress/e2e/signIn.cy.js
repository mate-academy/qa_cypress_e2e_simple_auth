/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const invalidUsername = 'invalidtomsmith';
  const invalidPassword = 'invalidSuperSecretPassword!';

  it('Login with valid creds', () => {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.contains('[type="submit"]', 'Login');
    cy.contains(' Login').click();
    cy.contains('You logged into a secure area!');
  });

  it('Login with invalid creds', () => {
    cy.get('input[name="username"]').type(invalidUsername);
    cy.get('input[name="password"]').type(invalidPassword);
    cy.contains('[type="submit"]', 'Login');
    cy.contains(' Login').click();
    cy.get('#flash-messages')
      .should('contain.text', 'Your username is invalid!');
  });

  it('Logout from the app', () => {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.contains('[type="submit"]', 'Login');
    cy.contains(' Login').click();
    cy.contains('You logged into a secure area!');
    cy.contains('Logout').click();
    cy.get('#flash-messages')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
