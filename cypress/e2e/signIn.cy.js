/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();

    cy.url()
      .should('include', '/secure');
    cy.contains('[id=flash]', 'You logged into a secure area!')
      .should('exist');
  });

  it('should show validation errors for invalid credentials', () => {
    cy.get('#username').type('anyusername');
    cy.get('#password').type('anypassword!');
    cy.get('.radius').click();

    cy.url()
      .should('include', '/login');
    cy.contains('[id=flash]', 'Your username is invalid!')
      .should('exist');
  });

  it('should logout from the website', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();

    cy.url()
      .should('include', '/secure');
    cy.contains('[id=flash]', 'You logged into a secure area!')
      .should('exist');

    cy.get('.button').click();

    cy.contains('[id=flash]', 'You logged out of the secure area!')
      .should('exist');
  });
});
