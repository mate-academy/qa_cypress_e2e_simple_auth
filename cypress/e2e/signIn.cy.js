/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Login with valid creds', () => {
    cy.login();

    cy.checkAlert('You logged into a secure area!');
  });

  it('Logout', () => {
    cy.login();

    cy.get('[href="/logout"]').click();

    cy.checkAlert('You logged out of the secure area!');
  });

  it('Login with invalid username', () => {
    cy.login({ userName: 'test' });

    cy.checkAlert('Your username is invalid!');
  });

  it('Login with invalid password', () => {
    cy.login({ password: 'Invalid!' });

    cy.checkAlert('Your password is invalid!');
  });
});
