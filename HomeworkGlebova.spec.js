/// <reference types="cypress" />

describe('My second cypress test', () => {
    before('', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
    });
    
    it('Sign in', () => {
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('.fa').click();
      cy.get('.subheader').contains('Welcome to the Secure Area. When you are done click logout below.').should('exist');
      cy.get('.icon-2x').click();
      cy.get('.fa').contains('Login').should('exist');

    });

    it('Sign in with error', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('wrongpassword!');
        cy.get('.fa').click();
        cy.get('#flash').contains('Your password is invalid!').should('exist');
      });
  });
