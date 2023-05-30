/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login');

    cy.url()
    .should('include', '/login');

    cy.get('h2')
    .contains('Login Page');
  });

  it('should allow to login with valid creds', () => {
  cy.get('#username')
    .type('tomsmith');

  cy.get('#password')
    .type('SuperSecretPassword!');

  cy.get('.fa')
    .click();
  
  cy.get('#flash')
    .should('contain.text', 'You logged into a secure area!');
  });

  it('should not allow to login with invalid creds', () => {
  cy.get('#username')
    .type('tomsmith2');

  cy.get('#password')
    .type('SecretPassword!');

  cy.get('.fa')
    .click();

  cy.get('#flash.error')
    .should('contain.text', 'Your username is invalid!');
  });

  it('should allow to logout from the app', () => {
  cy.get('#username')
    .type('tomsmith');

  cy.get('#password')
    .type('SuperSecretPassword!');

  cy.get('.fa')
    .click();
  
  cy.get('#flash')
    .should('contain.text', 'You logged into a secure area!');
  
  cy.get('h2')
    .contains('Secure Area');

  cy.contains('.button', 'Logout')
    .click();

  cy.get('#flash')
    .should('contain.text', 'You logged out of the secure area!');
  });
});
