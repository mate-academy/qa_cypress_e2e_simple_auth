/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login with correct username and password', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');

    cy.checkVerifyMessage('You logged into a secure area!');
  });

  it('should show validation error for incorrect login', () => {
    cy.login('user', 'user123');

    cy.checkVerifyMessage('Your username is invalid!');
  });

  it('should show validation error for incorrect password', () => {
    cy.login('tomsmith', '123!');

    cy.checkVerifyMessage('Your password is invalid!');
  });

  it('should log out successfully', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');

    cy.get('.button').should('exist').click();
    cy.checkVerifyMessage('You logged out of the secure area!');
  });
});
