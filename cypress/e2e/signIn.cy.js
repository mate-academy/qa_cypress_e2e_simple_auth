/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login with valid credentials', () => {
    cy.loginUser(Cypress.env('username'), Cypress.env('password'));

    cy.checkValidationMessage('You logged into a secure area!');

    cy.assertPageUrl('/secure');
  });

  it('should not login with invalid username', () => {
    cy.loginUser('invalidUsername', Cypress.env('password'));

    cy.checkValidationMessage('Your username is invalid!');

    cy.assertPageUrl('/login');
  });

  it('should not login with invalid password', () => {
    cy.loginUser(Cypress.env('username'), 'invalidPassword');

    cy.checkValidationMessage('Your password is invalid!');

    cy.assertPageUrl('/login');
  });

  it('should successfully logout.', () => {
    cy.loginUser(Cypress.env('username'), Cypress.env('password'));

    cy.contains('a', 'Logout').click();

    cy.checkValidationMessage('You logged out of the secure area!');

    cy.assertPageUrl('/login');
  });
});
