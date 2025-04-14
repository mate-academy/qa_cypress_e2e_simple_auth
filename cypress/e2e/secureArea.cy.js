/// <reference types="cypress" />

describe('Secure Area page', () => {
  before(() => {
    cy.visit('/login');
  });

  it('should provide the possibility to log out', () => {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';

    cy.loginUser(username, password);

    cy.assertButtonIsExist('Logout')
      .click();

    cy.assertSuccessMessageHasAppeared('You logged out of the secure area!');

    cy.contains('Login Page');
  });
});
