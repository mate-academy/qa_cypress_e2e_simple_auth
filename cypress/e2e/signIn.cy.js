/// <reference types="cypress" />

describe('Login flow on the-internet.herokuapp.com', () => {
  const baseUrl = 'https://the-internet.herokuapp.com/login';

  it('should login successfully with valid credentials', () => {
    cy.visit(baseUrl);

    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Assert successful login
    cy.url().should('include', '/secure');
    cy.get('.flash.success')
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');
  });

  it('should show error message with invalid credentials', () => {
    cy.visit(baseUrl);

    cy.get('#username').type('invalidUser');
    cy.get('#password').type('invalidPass');
    cy.get('button[type="submit"]').click();

    // Assert validation errors
    cy.url().should('include', '/login');
    cy.get('.flash.error')
      .should('be.visible')
      .and('contain', 'Your username is invalid!');
  });

  it('should log out successfully', () => {
    // Login first
    cy.visit(baseUrl);
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Click logout
    cy.get('.icon-2x.icon-signout').click();

    // Assert successful logout
    cy.url().should('include', '/login');
    cy.get('.flash.success')
      .should('be.visible')
      .and('contain', 'You logged out of the secure area!');
  });
});
