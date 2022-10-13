/// <reference types="cypress" />

describe('Secure Area page', () => {
    before(() => {
      cy.visit('https://the-internet.herokuapp.com/login');
    });
  
    it('should provide successful logout', () => {
      //Logging in
      cy.get('[id="username"]')
        .type('tomsmith');
      cy.get('[id="password"]')
        .type('SuperSecretPassword!');
      //cy.get('.fa')
      cy.get('.radius')
        .click();

      //Checking if logged in
      cy.get('[id="flash"]')
        .contains('You logged');

      //Logging out
      cy.get('.button')
        .contains('Logout')
        .click();

      // Checking if logged out
      cy.get('[id="flash"]')
        .contains('You logged out');
      cy.get('[id="username"]');
      cy.get('[id="password"]');
      //cy.get('.fa');
      cy.get('.radius');
    });
  });