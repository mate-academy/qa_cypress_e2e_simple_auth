/// <reference types="cypress" />

describe('Simple Auth Assertions', () => {
  const baseUrl = 'https://the-internet.herokuapp.com/login';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('logs in with valid credentials', () => {
    cy.get('input[name="username"]').type('tomsmith');
    cy.get('input[name="password"]').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.contains(
      `You logged into a secure area!`
    ).should('be.visible');
  });

  it('shows error with invalid credentials', () => {
    cy.get('input[name="username"]').type('invalidUser');
    cy.get('input[name="password"]').type('invalidPass');
    cy.get('button[type="submit"]').click();

    cy.contains(
      `Your username is invalid!`
    ).should('be.visible');
  });

  it('logs out successfully', () => {
    cy.get('input[name="username"]').type('tomsmith');
    cy.get('input[name="password"]').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.contains('Logout').click();

    cy.contains(
      `You logged out of the secure area!`
    ).should('be.visible');
  });
});
