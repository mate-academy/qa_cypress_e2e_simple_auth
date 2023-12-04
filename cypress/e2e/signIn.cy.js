/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should Login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"').contains('Login').click();
    cy.get('a[href="/logout"]').should('exist');
  });

  it('should not Login with invalid creds', () => {
    cy.get('#username').type('nottomsmith');
    cy.get('#password').type('notSuperSecretPassword!');
    cy.get('button[type="submit"').contains('Login').click();
    cy.get('#flash-messages')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should Logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"').contains('Login').click();
    cy.get('a[href="/logout"]').click();
    cy.get('#flash-messages')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
