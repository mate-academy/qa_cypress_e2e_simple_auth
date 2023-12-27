/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in with valid creds', () => {
    cy.get('h2:contains("Login Page")').should('be.visible');
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('button.radius').click();
    cy.get('#flash').should('contain', 'logged into');
  });

  it('should not provide an ability to log in with invalid creds', () => {
    cy.get('#username')
      .type('invalidCreds');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('button.radius')
      .click();
    cy.get('#flash')
      .should('include.text', 'Your username is invalid!');
  });

  it('should provide an ability to log out', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('button.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'logged into');
    cy.get('a.button.secondary.radius')
      .contains('Logout')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged out');
  });
});
