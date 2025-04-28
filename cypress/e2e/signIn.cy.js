/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login with Valid credentials', () => {
    cy.get('input[id="username"]').type('tomsmith');
    cy.get('input[id="password"]').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').should('contain.text', 'Login').click();
    cy.get('a[href="/logout"]').should('exist');
  });

  it('Should throw error when logged in with Invalid credentials', () => {
    cy.get('input[id="username"]').type('tomsmith');
    cy.get('input[id="password"]').type('SuperSecretPassword');
    cy.get('button[type="submit"]')
      .should('contain.text', 'Login').click();
    cy.get('div.flash.error')
      .should('contain.text', 'Your password is invalid!');
  });

  it('should be able to log out successfully', () => {
    cy.get('input[id="username"]').type('tomsmith');
    cy.get('input[id="password"]').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').should('contain.text', 'Login').click();
    cy.get('a[href="/logout"]').click();
    cy.get('div.flash.success')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
