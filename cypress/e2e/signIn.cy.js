/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Login with valid creds', () => {
    cy.validUserData();

    cy.get('#flash')
      .should('contains.text', 'You logged into a secure area!');
  });

  it('Login with invalid creds', () => {
    cy.invalidUserData();

    cy.get('#flash')
      .should('contains.text', 'Your username is invalid!');
  });

  it('Logout is successfull', () => {
    cy.validUserData();

    cy.get('[href="/logout"]')
      .click();

    cy.get('#flash')
      .should('contains.text', 'You logged out of the secure area!');
  });
});
