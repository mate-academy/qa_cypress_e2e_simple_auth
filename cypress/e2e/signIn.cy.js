/// <reference types="cypress" />
const username = 'tomsmith';
const password = 'SuperSecretPassword!';
const invalidUsername = 'tomsmithnew';
const invalidPassword = 'SuperSecretPassword!new';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in with valid creds', () => {
    cy.login(username, password);

    cy.get('.fa-sign-in').click();

    cy.assertMessageShouldExist('You logged into a secure area!');
  });

  it('should not provide an ability to log in with invalid Username', () => {
    cy.login(invalidUsername, password);

    cy.get('.fa-sign-in').click();

    cy.assertMessageShouldExist('Your username is invalid!');
  });

  it('should not provide an ability to log in with invalid Password', () => {
    cy.login(username, invalidPassword);

    cy.get('.fa-sign-in').click();

    cy.assertMessageShouldExist('Your password is invalid!');
  });

  it('should provide an ability to log out from the app', () => {
    cy.login(username, password);

    cy.get('.fa-sign-in').click();

    cy.assertMessageShouldExist('You logged into a secure area!');

    cy.get('.icon-signout').click();

    cy.assertMessageShouldExist('You logged out of the secure area!');
  });
});
