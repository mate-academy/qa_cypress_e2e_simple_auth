/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('logs in successfully with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');
  });

  it('shows error with invalid credentials', () => {
    cy.get('#username').type('wronguser');
    cy.get('#password').type('wrongpassword');
    cy.get('button[type="submit"]').click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'Your username is invalid!');
  });

  it('logs out successfully after login', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.get('a[href="/logout"]').click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged out of the secure area!');
  });
});
