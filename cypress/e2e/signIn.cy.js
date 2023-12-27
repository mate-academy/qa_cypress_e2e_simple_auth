/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login')
  });
     
      it('should not provide an ability to log in with invalid username', () => {
        cy.get('#username').type('tomsmith1');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa').click();
        cy.get('#flash').should('contain.text', 'Your username is invalid!');
        
      });

      it('should not provide an ability to log in with invalid password', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword');
        cy.get('.fa').click();
        cy.get('#flash').should('contain.text', 'Your password is invalid!');
        
      });

      it('should provide an ability to log in and log out', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa').click();
        cy.get('.subheader').should('contain.text', 'Welcome to the Secure Area. When you are done click logout below.');    
        
        cy.get('.button').click();
        cy.get('#flash').should('contain.text', 'You logged out of the secure area!')
      });
      
      
    });
    