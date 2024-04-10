/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const invalidUsername = `${username}1`;
  const invalidPassword = `${password}1`;

  it('should login user with valid credentials', () => {
    cy.loginUser(username, password);

    cy.contains('h2', 'Secure Area');

    cy.assertButtonIsExist('Logout');
  });

  it('assert validation error for login with invalid username', () => {
    cy.loginUser(invalidUsername, password);

    cy.assertSuccessMessageHasAppeared('Your username is invalid!');
  });

  it('assert validation error for login with invalid password', () => {
    cy.loginUser(username, invalidPassword);

    cy.assertSuccessMessageHasAppeared('Your password is invalid!');
  });
});
