/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('user should log in with valid creds', () => {
    cy.get('#username').type('tomsmith');

    cy.get('#password').type('SuperSecretPassword!');

    cy.get('button').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('user should not log in with invalid creds', () => {
    cy.get('#username').type('invalidUsername');

    cy.get('#password').type('invalidPassword');

    cy.get('button').click();

    cy.get('#flash').should('contain.text', ' Your username is invalid!');
  });

  it('user should be logged out after clicking the [Logout]', () => {
    cy.get('#username').type('tomsmith');

    cy.get('#password').type('SuperSecretPassword!');

    cy.get('button').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');

    cy.get('[href="/logout"]').click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
