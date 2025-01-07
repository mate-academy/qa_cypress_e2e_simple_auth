/// <reference types="cypress" />

describe('Sign In page', () => {
  const VALID_USER = {
    name: 'tomsmith',
    password: 'SuperSecretPassword!'
  };

  const INVALID_USER = {
    name: 'invalid',
    password: 'invalid!'
  };

  it('should login with valid creds', () => {
    cy.login(VALID_USER);
    cy.getPushMessage('You logged into a secure area!');
  });

  it('should login with invalid creds', () => {
    cy.login(INVALID_USER);
    cy.getPushMessage('Your username is invalid!');
  });

  it('should logout from the app', () => {
    cy.login(VALID_USER);
    cy.clickOnLogout();
    cy.getPushMessage('You logged out of the secure area!');
  });
});
