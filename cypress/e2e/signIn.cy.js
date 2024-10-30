/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it.skip('should allow to login with valid creds', () => {
    cy.findByName('username').type('tomsmith');
    cy.findByName('password').type('SuperSecretPassword!' + `{Enter}`);
    cy.get('div.flash.success')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should return a validation message if login with invalid creds', () => {
    cy.findByName('username').type('invalidUser');
    cy.findByName('password').type('invPass!' + `{Enter}`);
    cy.get('div.flash.error')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should allow to Logout from the app', () => {
    cy.findByName('username').type('tomsmith');
    cy.findByName('password').type('SuperSecretPassword!' + `{Enter}`);
    cy.get('a.button')
      .should('have.attr', 'href', '/logout')
      .click();
    cy.get('div.flash.success')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
