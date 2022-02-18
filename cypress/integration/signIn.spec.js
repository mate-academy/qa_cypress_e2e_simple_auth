/// <reference types="cypress" />

describe('Autorization and logout', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

    it.only('Sign in and logout test with valid data', () => {
      cy.get('#username')
        .type('tomsmith');

      cy.get('#password')
        .type('SuperSecretPassword!');

      cy.get('[class="fa fa-2x fa-sign-in"')
        .click();

      cy.get('.button')
        .click();
    });

    it.only('Sign in test with incorrect data', () => {
      cy.get('#username')
        .type('tomsmith1');
    
      cy.get('#password')
        .type('SuperSecretPassword!1');
    
      cy.get('[class="fa fa-2x fa-sign-in"')
        .click();

      cy.get('[class="flash error"')
        .should('contain.text', 'Your username is invalid!');
    });
});