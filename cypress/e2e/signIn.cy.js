/// <reference types="cypress" />

describe('User should be able', () => {
    beforeEach(() => {
      cy.visit(`https://the-internet.herokuapp.com/login`)  
    });

    it('to login with valid creds', () => {
      
       cy.get('#username')
         .type(`tomsmith`);

       cy.get('#password')
          .type(`SuperSecretPassword!`);
        
       cy.contains('button', 'Login')
         .click();

       cy.get('#flash')
         .should('contain', 'You logged into a secure area!');
 
       cy.get('.button')
         .should('contain', 'Logout')
            
    });

    it('not to log in with invalid creds', () => {
      
       cy.get('#username')
         .type(`tomsmith1`);

       cy.get('#password')
          .type(`SuperSecretPassword`);
        
       cy.contains('button', 'Login')
         .click();

       cy.get('#flash')
         .should('contain', 'Your username is invalid!');
        
    });

    it('not to log in with invalid password', () => {
      
      cy.get('#username')
        .type(`tomsmith`);

      cy.get('#password')
         .type(`SuperSecretPassword`);
       
      cy.contains('button', 'Login')
        .click();

      cy.get('#flash')
        .should('contain', 'Your password is invalid!');
       
   });

    it('to logout from the app', () => {
       
        cy.get('#username')
          .type(`tomsmith`);
 
        cy.get('#password')
           .type(`SuperSecretPassword!`);
         
        cy.contains('button', 'Login')
          .click();

        cy.get('.icon-2x')
         .should('contain', 'Logout')
         .click();

        cy.get('#flash')
         .should('contain', 'You logged out of the secure area!');
    });
});