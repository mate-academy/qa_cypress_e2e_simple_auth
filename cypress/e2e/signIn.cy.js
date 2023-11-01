/// <reference types="cypress" />

describe('Sign In page', () => {

  const login = 'tomsmith';
  const password = 'SuperSecretPassword!';
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');

  });

  it('Should be able to Sign in with valid data', () => {
    cy.get('#username')
    .type('tomsmith');
    cy.get('#password')
    .type('SuperSecretPassword!');
    cy.get('.fa')
    .click();
    cy.get('.flash.success')
    .should('contain', ' You logged into a secure area!');
  });

  it('should logout from the app', () => {
    cy.get('#username')
    .type('tomsmith');
    cy.get('#password')
    .type('SuperSecretPassword!');
    cy.get('.fa')
    .click();

    cy.get('.flash.success')
    .should('contain', 'You logged into a secure area!');
    cy.get('.icon-2x')
    .click();
    cy.get('.flash.success')
    .should('contain', 'You logged out of the secure area!');
  });

  it('Should be UNABLE to Sign in with invalid data', () => {
    cy.get('#username')
    .type('tomisnotsmith');
    cy.get('#password')
    .type('SuperSecretPassword!');
    cy.get('.fa')
    .click();

    cy.get('.flash.error')
    .should('contain', 'Your username is invalid!');
  });

  it('', () => {
    it('should login with invalid creds and assert the password error', () => {
      cy.get('#username')
      .type('tomsmith');
      cy.get('#password')
      .type('NotReallySuperSecretPassword!');
      cy.get('.fa')
      .click();
  
      cy.get('.flash.error')
      .should('contain', 'Your password is invalid!');
    });
});
});