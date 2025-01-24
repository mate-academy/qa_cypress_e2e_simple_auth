import 'dotenv/config';
/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = process.env.USERNAME || 'tomsmith';
  const password = process.env.PASSWORD || 'SuperSecretPassword!';
  const invalidUsername = 'tomhanks';
  const invalidPassword = 'NotSuperSecretPassword';
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid creds', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password + `{ENTER}`);
    cy.contains('div', 'You logged into a secure area!');
  });

  it('should not login with invalid username', () => {
    cy.get('#username').type(invalidUsername);
    cy.get('#password').type(invalidPassword + `{ENTER}`);
    cy.contains('div', 'Your username is invalid!');
  });

  it('should not login with invalid password', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(invalidPassword + `{ENTER}`);
    cy.contains('div', 'Your password is invalid!');
  });

  it('should logout', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password + `{ENTER}`);
    cy.contains('a', 'Logout').click();
    cy.contains('div', 'You logged out of the secure area!');
  });
});
