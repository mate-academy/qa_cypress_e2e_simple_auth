/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('User is able to login with valid creds', () => {
    cy.get('#username')
      .should('be.visible')
      .type('tomsmith');

    cy.get('#password')
      .should('be.visible')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .should('be.visible')
      .should('have.text', ' Login')
      .click();

    cy.get('#flash')
      .should('be.visible')
      .should('contain', 'You logged into a secure area!');
  });

  it('User is not able to login with invalid creds', () => {
    cy.get('#username')
      .type('tomsmith1');

    cy.get('#password')
      .type('SuperSecretPassword!1');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('be.visible')
      .should('contain.text', 'Your username is invalid!');
  });

  it('User is able to logout from the app', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('.button')
      .should('be.visible')
      .should('contain.text', 'Logout')
      .click();

    cy.get('.success')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
