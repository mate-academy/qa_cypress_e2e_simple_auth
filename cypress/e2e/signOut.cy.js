/// <reference types="cypress" />

describe('User should be able', () => {
    before(() => {
      cy.visit('https://the-internet.herokuapp.com/login');
    });
  
    it('Logout', () => {
      //Logging in
      cy.get('#username')
        .type('tomsmith');
      cy.get('#password')
        .type('SuperSecretPassword!');
      cy.get('.fa')
        .click();

      //Checking if logged in
      cy.get('#flash')
        .contains('You logged');

      //Logging out
      cy.get('.button')
        .contains('Logout')
        .click();

      // Checking if logged out
      cy.get('#flash')
        .contains('You logged out');
      cy.get('#username');
      cy.get('#password');
      cy.get('.fa');
    });
  });