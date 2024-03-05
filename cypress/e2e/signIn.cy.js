/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should log in user successfully', () => {
    cy.get('[name="username"]').type('tomsmith');
    cy.get('[name="password"]').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.get('.subheader')
      .contains('Welcome to the Secure Area. When you are done click ' +
    'logout below.');
  });

  it('should display validation errors if credentials are invalid', () => {
    cy.get('[name="username"]').type('invalid Username');
    cy.get('[name="password"]').type(' invalid Password');
    cy.get('button[type="submit"]').click();
    cy.get('#flash').contains('Your username is invalid!');
  });

  it('should log out user', () => {
    cy.get('[name="username"]').type('tomsmith');
    cy.get('[name="password"]').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.contains('Logout').click();
    cy.get('#flash').contains('You logged out of the secure area!');
  });
});
