/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {

  });

  it('Should login successfully with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/secure');
    cy.get('.flash.success')
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');
  });

  it('Should show error for invalid credentials', () => {
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('invalidPass');
    cy.get('button[type="submit"]').click();

    cy.get('.flash.error')
      .should('be.visible')
      .and('contain', 'Your username is invalid!');
  });

  it('Should logout successfully', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.get('a[href="/logout"]').click();

    cy.url().should('include', '/login');
    cy.get('.flash.success')
      .should('be.visible')
      .and('contain', 'You logged out of the secure area!');
  });
});
