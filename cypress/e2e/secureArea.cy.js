/// <reference types="cypress" />

describe('Secure Area page', () => {
  before(() => {
    cy.visit('/login');
  });

  it('should provide the possibility to log out', () => {
    cy.loginUser('tomsmith', 'SuperSecretPassword!');

    cy.checkAuthByHref('Logout')
      .click();

    cy.checkAuthByMessage('You logged out of the secure area!');

    cy.contains('Login Page');
  });
});
