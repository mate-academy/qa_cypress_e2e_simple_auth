/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should succesfully sign in', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.flash.success')
      .should('contain', 'You logged into a secure area!');
  });

  it('should fail to sign in', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('wrongPassword');
    cy.get('.radius').click();
    cy.get('.flash.error')
      .should('contain', 'Your password is invalid!');
  });

  it('should to logout', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.radius').click();
    cy.get('.flash.success')
      .should('contain', 'You logged out of the secure area!');
  });
});
