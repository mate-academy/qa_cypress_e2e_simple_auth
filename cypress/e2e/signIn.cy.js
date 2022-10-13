/// <reference types="cypress" />

describe('Login page', () => {
    before(() => {
      cy.visit('https://the-internet.herokuapp.com/login');
    });
  
    it('should provide successful login with valid creds', () => {
      cy.get('[id="username"]')
        .type('tomsmith');
      cy.get('[id="password"]')
        .type('SuperSecretPassword!');
      //cy.get('.fa')
      cy.get('.radius')
        .click();

      cy.get('[id="flash"]')
        .contains('You logged');
      cy.get('.button')
        .contains('Logout');
      cy.get('.icon-2x')
        .contains('Logout');
    });
  });