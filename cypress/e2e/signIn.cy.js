/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const invalidUsername = username + Math.floor(Math.random(1000) * 100);
  const invalidPassword = password + Math.floor(Math.random(1000) * 100);

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should Login with valid creds', () => {
    cy.loginUser(username, password);
    cy.get('h2').should('contain.text', 'Secure Area');
  });

  it('should NOT Login with invalid Username', () => {
    cy.loginUser(invalidUsername, password);
    cy.get('.flash.error').should('contain.text', 'Your username is invalid!');
  });

  it('should NOT Login with invalid Password', () => {
    cy.loginUser(username, invalidPassword);
    cy.get('.flash.error').should('contain.text', 'Your password is invalid!');
  });

  it('should Logout from the app', () => {
    cy.loginUser(username, password);
    cy.get('.icon-2x.icon-signout').click();
    cy.get('.flash.success').should(
      'contain.text', 'You logged out of the secure area!');
  });
});
