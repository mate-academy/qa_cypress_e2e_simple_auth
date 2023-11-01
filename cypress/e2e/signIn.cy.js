/// <reference types="cypress" />

describe('Sign In page', () => {
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = 'tomsuiyigefs7mith';
  const invalidPassword = 'SretPaword!';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid creds', () => {
    cy.get('input[name="username"]').type(validUsername);
    cy.get('input[name="password"]').type(validPassword);
    cy.get('button[type="submit"]').click();
    cy.contains('You logged into a secure area!');
  });

  it('should display validation errors with invalid creds', () => {
    cy.get('input[name="username"]').type(invalidUsername);
    cy.get('input[name="password"]').type(invalidPassword);
    cy.get('button.radius').click();
    cy.contains('Your username is invalid!');
  });

  it('should logout from the app', () => {
    cy.get('input[name="username"]').type(validUsername);
    cy.get('input[name="password"]').type(validPassword);
    cy.get('button.radius').click();
    cy.get('a[href="/logout"]').click();
    cy.contains('You logged out of the secure area!');
  });
});
