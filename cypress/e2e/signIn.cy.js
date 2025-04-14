/// <reference types="cypress" />

const { loginUser, assertStatus } = require('../support/loginUser');

const loginPage = '/login';
const validUserName = 'tomsmith';
const validPassword = 'SuperSecretPassword!';
const invalidUserName = 'tomsmit';
const invalidPassword = 'SecretPassword!';
const success = 'success';
const error = 'error';
const successText = 'You logged into a secure area!';
const invUserText = 'Your username is invalid!';
const invPasswordText = 'Your password is invalid!';
const logoutText = 'You logged out of the secure area!';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit(loginPage);
  });

  it('should login the user with valid credentials', () => {
    loginUser(validUserName, validPassword);

    assertStatus(success, successText);
  });

  it('should not login the user with invalid username', () => {
    loginUser(invalidUserName, validPassword);

    assertStatus(error, invUserText);
  });

  it('should not login the user with invalid upassword', () => {
    loginUser(validUserName, invalidPassword);

    assertStatus(error, invPasswordText);
  });

  it('should logout the user from the app', () => {
    loginUser(validUserName, validPassword);

    cy.get('.icon-signout').click();

    assertStatus(success, logoutText);
  });
});
