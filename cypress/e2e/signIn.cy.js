/// <reference types="cypress" />

describe('User should be able', () => {
    before(() => {
      cy.visit('https://the-internet.herokuapp.com/login');
    });
  
    it('Should login with valid creds', () => {
      cy.get('#username')
        .type('tomsmith');
      cy.get('#password')
        .type('SuperSecretPassword!');
      cy.get('.fa')
        .click();

      cy.get('#flash')
        .contains('You logged');
      cy.get('.button')
        .contains('Logout');
      cy.get('.icon-2x')
        .contains('Logout');
    });
  });