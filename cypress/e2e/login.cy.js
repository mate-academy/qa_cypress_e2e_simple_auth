/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {

    cy.visit('https://the-internet.herokuapp.com/login');

    cy.url()
      .should('include', '/login');

    cy.get('h2')
      .should('contain.text', 'Login Page');
  });

  it('should allow to login with valid data', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa')
      .click();

    cy.get('#flash.success')
      .should('contain.text', 'You logged into a secure area!');

    cy.get('[href="/logout"]')
      .click();
  });

  it('should allow to appear validation message with invalid data', () => {
    cy.get('#username')
      .type('tomsmith123');

    cy.get('#password')
      .type('SuperSecretPassword!123');

    cy.get('.fa')
      .click();

    cy.get('#flash.error')
      .should('contain.text', 'Your username is invalid!');

      cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!123');

    cy.get('.fa')
      .click();

    cy.get('#flash.error')
      .should('contain.text', 'Your password is invalid!');
  });

  it('should allow to log out', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa')
      .click();

    cy.get('[href="/logout"]')
      .click();

    cy.get('#flash.success')
      .should('contain.text', 'You logged out of the secure area!');
  });
});