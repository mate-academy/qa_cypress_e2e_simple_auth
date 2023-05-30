/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.url()
      .should('include', '/login');

    cy.get('h2')
      .should('contain.text', 'Login Page');
  });

  it('should provide an ability to log in with valid creds', () => {
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

  it('should provide an ability to display validation errors while log in with invalid creds', () => {
    cy.get('#username')
      .type('tomsmithh');

    cy.get('#password')
      .type('SuperSecretPassword!!');

    cy.get('.fa')
      .click();

    cy.get('#flash.error')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should provide an ability to logout from the app', () => {
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