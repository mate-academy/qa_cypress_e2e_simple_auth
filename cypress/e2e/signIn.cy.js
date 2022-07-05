/// <reference types="cypress" />

describe('User should', () => {

    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';

    it('login with valid creds', () => {

    cy.visit('/login');
    
    cy.get('#username')
        .type(username);

    cy.get('#password')
        .type(password);
    
    cy.get('.fa')
        .click();

    cy.contains('[class="flash success"]', 'You logged into a secure area!');
    
    });

    it('login with invalid creds and check validation error', () => {

        cy.visit('/login');
        
        cy.get('#username')
            .type(username + 'invalid');
    
        cy.get('#password')
            .type(password + 'invalid');
        
        cy.get('.fa')
            .click();
    
        cy.contains('[class="flash error"]', 'Your username is invalid!');
        });
  
        it('logout from the app and assert you successfully logged out.', () => {

        cy.visit('/login');
            
        cy.get('#username')
            .type(username);
        
        cy.get('#password')
            .type(password);
            
        cy.get('.fa')
            .click();
        
        cy.get('[class="button secondary radius"]')
            .click();

        cy.contains('[class="flash success"]', 'You logged out of the secure area!');    
    });
});
