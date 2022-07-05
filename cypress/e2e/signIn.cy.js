/// <reference types="cypress" />

describe('User should be able', () => {
    it('to login with valid creds', () => {
       cy.visit(`https://the-internet.herokuapp.com/login`) 
      
       cy.get('#username')
         .type(`tomsmith`);

       cy.get('#password')
          .type(`SuperSecretPassword!`);
        
       cy.contains('button', 'Login')
         .click();
    });

    it('not to log in with invalid creds', () => {
        cy.visit(`https://the-internet.herokuapp.com/login`) 
      
       cy.get('#username')
         .type(`tomsmith1`);

       cy.get('#password')
          .type(`SuperSecretPassword`);
        
       cy.contains('button', 'Login')
         .click();

       cy.get('#flash')
         .should('contain', 'Your username is invalid!');
        
    });

    it('to logout from the app', () => {
        cy.visit(`https://the-internet.herokuapp.com/login`) 
       
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