/// <reference types="cypress" />
describe('User should be able', () => {
        
    before (() => {
        cy.visit('/login'); 
    })
    
    it('to sign in with valid data', () => {
        
        cy.reload();
        cy.get('#username')
            .type('tomsmith');
        cy.get('#password')
            .type('SuperSecretPassword!');
        cy.get('.fa')
            .click();
        cy.get('#flash')
            .should('contain', "You logged into a secure area!");
    });

    it('to get error message if invalid credentials for username or password were used', () => {
     
        cy.reload();
        cy.get('#username')
            .type('atomsmith');
        cy.get('#password')
            .type('aSuperSecretPassword!');
        cy.get('.fa')
            .click();
        cy.get('#flash')
            .should('contain', "is invalid");
    });

    it('to logout from the app (assert succesful logged out)', () => {
     
        cy.reload();
        cy.get('#username')
            .type('tomsmith')
        cy.get('#password')
            .type('SuperSecretPassword!');
        cy.get('.fa')
            .click();
        cy.reload().get('.button')
            .click();
        cy.get('#flash')
            .should('contain', "You logged out of the secure area");
        });
  
  });
  