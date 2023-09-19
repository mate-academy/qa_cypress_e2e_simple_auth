/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
    //  full URL is in the cypress.config.js
  });
  const randomNum = Math.random().toString().slice(2);
  const invalidUsername = `tomsmith${randomNum}`;
  const invalidPassword = `SuperSecretPassword!${randomNum}`;
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  it('Login with valid creds', () => {
    cy.get('input[name = "username"]').type(username);

    cy.get('input[name = "password"]').type(password);

    cy.get('button[type = "submit"]').click();
    // Confirmation of logging in
    cy.contains('div', 'You logged into a secure area!');
    // Logging out
    cy.get('i[class = "icon-2x icon-signout"]').click();
    // Confirmation of logging out
    cy.contains('div', 'You logged out of the secure area!');
  });

  it('Login with invalid username', () => {
    cy.get('input[name = "username"]').type(invalidUsername);

    cy.get('input[name = "password"]').type(password);

    cy.get('button[type = "submit"]').click();

    cy.contains('div', 'Your username is invalid!');
  });

  it('Login with invalid password', () => {
    cy.get('input[name = "username"]').type(username);

    cy.get('input[name = "password"]').type(invalidPassword);

    cy.get('button[type = "submit"]').click();

    cy.contains('div', 'Your password is invalid!');
  });
});
