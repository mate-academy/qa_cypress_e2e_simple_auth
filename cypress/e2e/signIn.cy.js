/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
  });

  it('successfully logged in', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[name="username"]').type('tomsmith');
    cy.get('[name="password"]').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.get('.subheader')
      .contains('Welcome to the Secure Area. When you are done click ' +
    'logout below.');
  });
  it('validation errors', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[name="username"]').type('invalid Username');
    cy.get('[name="password"]').type(' invalid Password');
    cy.get('button[type="submit"]').click();
    cy.get('#flash').contains('Your username is invalid!');
  });
  it('Logout from the app', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[name="username"]').type('tomsmith');
    cy.get('[name="password"]').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.contains('Logout').click();
    cy.get('#flash').contains('You logged out of the secure area!');
  });
});
