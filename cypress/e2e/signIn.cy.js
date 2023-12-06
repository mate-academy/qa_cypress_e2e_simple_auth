/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds', () => {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.contains('[type="submit"]', 'Login');
    cy.contains(' Login').click();
    cy.contains('You logged into a secure area!');
  });

  it('Login with invalid creds', () => {
    const username = 'falsetomsmith';
    const password = 'falseSuperSecretPassword!';
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.contains('[type="submit"]', 'Login');
    cy.contains(' Login').click();
    cy.get('#flash-messages')
      .should('contain.text', 'Your username is invalid!');
  });

  it('Logout from the app', () => {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';
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
