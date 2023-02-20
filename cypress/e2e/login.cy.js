/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should sign in with valid data', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();

    cy.url().should('include', '/secure')
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();

    cy.contains('a', 'Logout')
      .should('have.attr', 'href', '/logout')
      .click();

    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });

  it('should show an error for wrong username', () => {
    cy.get('#username').type('testUser');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();

    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('should show an error for wrong password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('NotSecretPassword!');
    cy.contains('button', 'Login').click();

    cy.get('#flash').should('contain', 'Your password is invalid!');
  });
});
