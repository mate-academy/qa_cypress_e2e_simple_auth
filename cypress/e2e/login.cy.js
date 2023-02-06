/// <reference types="cypress" />
describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa-sign-in')
      .click();

    cy.contains('.flash.success', 'You logged into a secure area!')
      .should('be.visible');
  });

  it('should not login with invalid creds', () => {
    cy.get('#username')
      .type('wrongUsername');

    cy.get('#password')
      .type('wrongPassword!');

    cy.get('.fa-sign-in')
      .click();

    cy.contains('#flash', 'Your username is invalid!')
      .should('be.visible');
  });

  it('should logout from the app', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa-sign-in')
      .click();
      
    cy.contains('.button', 'Logout')
      .click()
      
    cy.contains('#flash', 'You logged out of the secure area!')
      .should('be.visible');
  })
});