/* eslint-disable max-len */
/// <reference types="cypress" />

import SignInPage from '../support/SignInPage';

describe('Sign In page', () => {
  const signInPage = new SignInPage();

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should successfully log in with valid credentials', () => {
    signInPage.typeUsername('tomsmith');
    signInPage.typePassword('SuperSecretPassword!');
    signInPage.clickSubmit();

    signInPage.assertLoginSuccess();
  });

  it('should display error message with invalid credentials', () => {
    signInPage.typeUsername('invalidUser');
    signInPage.typePassword('invalidPassword');
    signInPage.clickSubmit();

    signInPage.assertLoginFailure();
  });

  it('should successfully log out', () => {
    // First, log in with valid credentials
    signInPage.typeUsername('tomsmith');
    signInPage.typePassword('SuperSecretPassword!');
    signInPage.clickSubmit();

    // Then, log out
    cy.get('.icon-2x.icon-signout').click();

    // Assert user is logged out by checking the URL or presence of login button
    cy.url().should('include', '/login');
    cy.get('.flash.success').should('contain.text', 'You logged out of the secure area!');
  });
});
