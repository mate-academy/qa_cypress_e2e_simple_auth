/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit ('https://the-internet.herokuapp.com/login')
  });

  it('should provide an ability to Login with valid creds', () => {
    cy.get('#username')
      .type ('tomsmith');

    cy.get('#password')
      .type ('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should ('contain', 'You logged into a secure area!')
  });

it('should provide an ability to Logout from the app', () => {
    cy.get('#username')
      .type ('tomsmith');

    cy.get('#password')
      .type ('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should ('contain', 'You logged into a secure area!');

    cy.get('[href="/logout"]')
      .click();
    
    cy.get('#flash')
      .should ('contain', 'You logged out of the secure area!')
  });

  it('should not provide an ability to Login with invalid creds', () => {
    // Login with invalid Username
    cy.get('#username')
      .type ('tomsmit');

    cy.get('#password')
      .type ('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should ('contain', 'Your username is invalid!');

    // Login with invalid Password
    cy.get('#username')
      .type ('tomsmith');

    cy.get('#password')
      .type ('SuperSecretPassword');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should ('contain', 'Your password is invalid!')
  });
});
