/// <reference types="cypress" />

describe('Secure Area page', () => {
  before(() => {
    cy.visit('/login');
  });

  it('should provide the possibility to log out', () => {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';

    cy.loginUser(username, password);

    cy.checkAuthByHref('Logout')
      .click();

    cy.checkAuthByMessage('You logged out of the secure area!');

    cy.contains('Login Page');
  });
});
