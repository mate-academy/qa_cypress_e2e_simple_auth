/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Should log in with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.get('.success').should('be.visible');
    cy.url().should('include', '/secure');
    cy.contains('You logged into a secure area!');
  });

  it('Should display validation errors for invalid credentials', () => {
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('invalidPassword');
    cy.get('button[type="submit"]').click();

    cy.get('.error').should('be.visible');
    cy.contains('Your username is invalid!');
  });

  it('Should log out successfully from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.get('a.button.secondary.radius[href="/logout"]').click();

    cy.get('.success').should('be.visible');
    cy.contains('You logged out of the secure area!');
    cy.url().should('include', '/login');
  });
});
