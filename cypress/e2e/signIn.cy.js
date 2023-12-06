/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  it('Login with valid credentials', () => {
    cy.get('[id="username"]')
      .type('tomsmith');

    cy.get('[id="password"]')
      .type('SuperSecretPassword!');

    cy.get('button[type="submit"]')
      .click();

    cy.get('[id="flash"]')
      .contains('You logged into a secure area!')
      .should('exist');
  });
  it('Login with invalid credentials', () => {
    cy.get('[id="username"]')
      .type('tomsmith123');

    cy.get('[id="password"]')
      .type('SuperSecretPassword!');

    cy.get('button[type="submit"]')
      .click();

    cy.get('[id="flash"]')
      .contains('Your username is invalid!')
      .should('exist');
  });
  it('Succesful log out from the app', () => {
    cy.get('[id="username"]')
      .type('tomsmith');

    cy.get('[id="password"]')
      .type('SuperSecretPassword!');

    cy.get('button[type="submit"]')
      .click();

    cy.get('[id="flash"]')
      .contains('You logged into a secure area!')
      .should('exist');

    cy.get('.button')
      .click();

    cy.get('[id="flash"]')
      .contains('You logged out of the secure area!')
      .should('exist');
  });
});
