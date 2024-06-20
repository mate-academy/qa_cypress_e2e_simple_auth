/// <reference types="cypress" />

import
{
  validUserName,
  validPassword,
  invalidUserName,
  invalidPassword,
  validLoginMessage,
  invalidLoginMessage,
  logoutMessage,
  loginUser
} from '../support/helpers';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should successfully log in with valid credentials', () => {
    loginUser(validUserName, validPassword);
    cy.get('.success').should('contain', validLoginMessage);
  });

  it('should display validation errors with invalid credentials', () => {
    loginUser(invalidUserName, invalidPassword);
    cy.get('.error').should('contain', invalidLoginMessage);
  });

  it('should successfully log out', () => {
    loginUser(validUserName, validPassword);
    cy.get('[href="/logout"]').click();
    cy.get('.success').should('contain', logoutMessage);
  });
});
