/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in with valid credentials', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('should not allow to log in with invalid credentials', () => {
    cy.get('#username')
      .type('tomsmit');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain', ' Your username is invalid!');

    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPasswo');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain', ' Your password is invalid!');
  });

  it('should provide an ability to log out from the app', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');

    cy.get('[href="/logout"]')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
