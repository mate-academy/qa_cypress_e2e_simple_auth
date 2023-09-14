/// <reference types="cypress" />

import * as data from './signInUtils';
const { login, logout } = require('./signInUtils');

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit(data.loginPageUrl);
  });

  it('should login with valid credentials', () => {
    login(data.username, data.password);

    cy.url().should('eq', data.secureAreaUrl);
    cy.get('#flash').should('contain.text', data.successfulMessage);
  });

  it('should show validation error with invalid Username', () => {
    login(data.usernameInvalid, data.password);

    cy.get('#flash').should('contain.text', data.invalidUserMessage);
  });

  it('should show validation error with invalid Password', () => {
    login(data.username, data.passwordInvalid);

    cy.get('#flash').should('contain.text', data.invalidPasswordMessage);
  });

  it('should successfully log out', () => {
    login(data.username, data.password);
    logout();

    cy.url().should('eq', data.loginPageUrl);
    cy.get('#flash').should('contain.text', data.logOutMessage);
  });
});
