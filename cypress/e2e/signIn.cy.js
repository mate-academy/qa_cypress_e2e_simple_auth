/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Should log in successfully with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('An error message when trying to log in with invalid credentials', () => {
    cy.get('#username').type('jhope');
    cy.get('#password').type('qwertyty');
    cy.get('.radius').click();
    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('Should log out successfully and show a confirmation message', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.icon-2x.icon-signout').click();
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
    cy.url().should('contain', '/login');
  });
});
