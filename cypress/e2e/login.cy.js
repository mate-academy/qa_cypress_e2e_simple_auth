/// <reference types="cypress" />
const { generateUser } = require("../support/commands");

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it.only('should provide an ability to login with valid creds', () => {
    cy.get('#username')
      .should('exist')
      .type('tomsmith');

    cy.get('#password')
      .should('exist')
      .type('SuperSecretPassword!');

    cy.get('button').contains('Login')
      .click();

    cy.get('h4')
      .should('contain', 'Welcome');

    cy.get('#flash')
      .should('contain', 'secure area');

    cy.url()
      .should('include', 'secure');
  });

  it.only('should provide a inability to login with invalid creds', () => {
    cy.get('#username')
    .should('exist')
    .type('tomassmith');

  cy.get('#password')
    .should('exist')
    .type('SuperSecretPassword!');

  cy.get('button').contains('Login')
    .click();

    cy.get('#flash')
      .should('contain', 'Your username is invalid!');

      cy.get('#username')
    .should('exist')
    .type('tomsmith');

  cy.get('#password')
    .should('exist')
    .type('SuperSuperSecretPassword!');

  cy.get('button').contains('Login')
    .click();

    cy.get('#flash')
      .should('contain', 'Your password is invalid!');
  });

  it.only('should be able to logout from the app', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('button').contains('Login')
      .click();

    cy.get('[href="/logout"]')
      .should('exist')
      .should('contain', 'Logout')
      .click();

    cy.url()
    .should('include', 'login');
  });
});
