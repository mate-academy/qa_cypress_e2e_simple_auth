/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  it('should login user with valid credentials', () => {
    cy.loginUser(username, password);

    cy.contains('h2', 'Secure Area');

    cy.checkAuthByHref('Logout');
  });

  it('assert validation error for login with invalid username', () => {
    cy.loginUser(`${username}1`, password);

    cy.checkAuthByMessage('Your username is invalid!');
  });

  it('assert validation error for login with invalid password', () => {
    cy.loginUser(username, `${password}1`);

    cy.checkAuthByMessage('Your password is invalid!');
  });
});
