/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login with valid creds', () => {
    cy.loginUser();

    cy.assertSuccessfulLogin();
  });

  it.skip('should not login with invalid creds', () => {
    const invalidUsername = 'invalid user name';
    const invalidPassword = 'invalid password';

    cy.get('#username').type(invalidUsername);
    cy.get('#password').type(invalidPassword + `{Enter}`);

    cy.assertUnsuccessfulLogin();
  });

  it('should logout from the app', () => {
    cy.loginUser();

    cy.get('.button').click();

    cy.asserSuccessfulLogOut();
  });
});
