/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should log in with proper credentials', () => {
    cy.get('#username').should('be.visible').type('tomsmith');
    cy.get('#password').should('be.visible').type('SuperSecretPassword!');

    cy.get('button')
      .contains(/login/i)
      .should('be.visible')
      .click();

    cy.url().should('include', '/secure');

    cy.get('h2')
      .should('contain', 'Secure Area');
  });

  it('should not log in with improper credentials', () => {
    cy.get('#username').should('be.visible').type('dunno');
    cy.get('#password').should('be.visible').type('idunno1234');

    cy.get('button')
      .contains(/login/i)
      .should('be.visible')
      .click();

    cy.get('#flash', { timeout: 10000 })
      .should('contain', 'Your username is invalid!');
  });

  it('should log out', () => {
    cy.get('#username').should('be.visible').type('tomsmith');
    cy.get('#password').should('be.visible').type('SuperSecretPassword!');

    cy.get('button')
      .contains(/login/i)
      .should('be.visible')
      .click();

    cy.url().should('include', '/secure');

    cy.get('h2')
      .should('contain', 'Secure Area');

    cy.get('a')
      .contains(/logout/i)
      .should('be.visible')
      .click();

    cy.url().should('include', '/login');

    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
