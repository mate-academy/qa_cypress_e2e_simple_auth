/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit(`https://the-internet.herokuapp.com/login`)
  });

  it('successfully logs in with valid credentials', () => {
    cy.get('#username').type(`tomsmith`);
    cy.get('#password').type(`SuperSecretPassword!`);
    cy.get('.radius').click();
    cy.contains('You logged into a secure area!').should('be.visible');
  });

  it('should not allow to logs in with invalid credentials', () => {
    cy.get('#username').type(`tomsmith22`);
    cy.get('#password').type(`SuperSecretPassword!22`);
    cy.get('.radius').click();
    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('successfully logs in with valid credentials', () => {
    cy.get('#username').type(`tomsmith`);
    cy.get('#password').type(`SuperSecretPassword!`);
    cy.get('.radius').click();
    cy.contains('You logged into a secure area!').should('be.visible');
    cy.get('.button').click();
    cy.contains(' You logged out of the secure area!').should('be.visible');
  });
});
