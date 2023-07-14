/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Login with valid creds', () => {
    cy.get('[id="username"]').type('tomsmith');
    cy.get('[id="password"]').type('SuperSecretPassword!');
    cy.get('#login > button > i').click();

    cy.get('#flash').should('be.visible');
    cy.contains('You logged into a secure area!').should('be.visible');
  });

  it('Login with invalid creds', () => {
    cy.get('[id="username"]').type('invalid Username');
    cy.get('[id="password"]').type('invalid Password');
    cy.get('#login > button > i').click();

    cy.get('#flash').should('be.visible');
    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('Logout from the app', () => {
    cy.get('[id="username"]').type('tomsmith');
    cy.get('[id="password"]').type('SuperSecretPassword!');
    cy.get('#login > button > i').click();

    cy.get('#content > div > a > i').click();
    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
