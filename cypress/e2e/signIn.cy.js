/// <reference types="cypress" />

const { getRandomUserData } = require('../support/e2e');

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Login with valid creds', () => {
    cy.visit('/login');

    cy.get('[id=username]').type('tomsmith');
    cy.get('[id=password]').type('SuperSecretPassword!' + '{Enter}');

    cy.contains('div', 'You logged into a secure area!').should('exist');
  });

  it('Login with invalid creds', () => {
    cy.visit('/login');

    const { username, password } = getRandomUserData();

    cy.get('[id=username]').type(username);
    cy.get('[id=password]').type(password + '{Enter}');

    cy.contains('div', 'Your username is invalid!').should('exist');
  });
  it('Login with invalid creds', () => {
    cy.visit('/login');

    cy.get('[id=username]').type('tomsmith');
    cy.get('[id=password]').type('SuperSecretPassword!' + '{Enter}');

    cy.contains('a', 'Logout').click();

    cy.contains('div', ' You logged out of the secure area!').should('exist');
  });
});
