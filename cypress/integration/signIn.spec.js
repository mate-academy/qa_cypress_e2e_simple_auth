/// <reference types="cypress" />

describe('Test for login with valid creds and assert you successfully logged in.', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    });

    it('Login and logout with valid credits', () => {
            
        cy.get('[id="username"]')
          .type('tomsmith');
            
        cy.get('[id="password"]')
          .type('SuperSecretPassword!');
    
        cy.get('.fa')
          .click();
    
        cy.get('h2')
          .should('contain.text', 'Secure Area');
 
           
    });
  
    it('Login with invalid credits, checking validation error', () => {
   
        cy.get('[id="username"]')
          .type('unknownuser');
            
        cy.get('[id="password"]')
          .type('invalidpassword');

        cy.get('.fa')
          .click();

        cy.get('[id="flash"]')
          .should('contain.text', 'Your username is invalid!');

        cy.get('[id="username"]')
        .type('tomsmith');
          
        cy.get('[id="password"]')
          .type('invalidpassword');

        cy.get('.fa')
          .click();

        cy.get('[id="flash"]')
          .should('contain.text', 'Your password is invalid!');  
  });

    it('Logout with valid credits and assert you successfully logged out.', () => {
            
        cy.get('[id="username"]')
          .type('tomsmith');
            
        cy.get('[id="password"]')
          .type('SuperSecretPassword!');

        cy.get('.fa')
          .click();

        cy.get('h2')
          .should('contain.text', 'Secure Area');

        cy.get('.button')
          .click();
        
        cy.get('h2')
          .should('contain.text', 'Login Page'); 
    });
});