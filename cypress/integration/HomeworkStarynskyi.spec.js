/// <reference types="cypress" />

describe('Check logging with valid and invalid credentials', () => {

    before('Visit web-site', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
  
    });

    it('Check logging with correct credentials', () => {
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('.radius').click();
      cy.get('.success').contains('You logged into a secure area!').should('exist');
    });

    it('Check logging out', () => {
      cy.get('.button').click();
      cy.get('.success').contains('You logged out of the secure area!').should('exist');
    });

    it('Check logging with incorrect credentials', () => {
      cy.get('#username').type('tomyorke');
      cy.get('#password').type('radiohead');
      cy.get('.radius').click();
      cy.get('.error').contains('Your username is invalid!').should('exist');
    });
  });
