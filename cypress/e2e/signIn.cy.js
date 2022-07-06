/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('/login');
  })  

describe('User should', () => {

    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';

    it('login with valid creds', () => {
    
    cy.get('#username')
    .type(username);

    cy.get('#password')
    .type(password);
    
    cy.get('.fa')
    .click();

    cy.get('[class="flash success"]')
    .should('contain.text', 'You logged into a secure area!');
    
    });

    it('login with invalid creds and check validation error', () => {
        
    cy.get('#username')
    .type(username + 'invalid');
    
    cy.get('#password')
    .type(password + 'invalid');
        
    cy.get('.fa')
    .click();

    cy.get('[class="flash error"]')
    .should('contain.text', 'Your username is invalid!');
    });

    it('login with valid username and invalid password and check validation error', () => {
        
    cy.get('#username')
    .type(username);
        
    cy.get('#password')
    .type(password + 'invalid');
            
    cy.get('.fa')
    .click();
    
    cy.get('[class="flash error"]')
    .should('contain.text', 'Your password is invalid!');
    });
  
    it('logout from the app and assert you successfully logged out.', () => {
            
    cy.get('#username')
    .type(username);
        
    cy.get('#password')
    .type(password);
            
    cy.get('.fa')
    .click();
        
    cy.get('[class="button secondary radius"]')
    .click();

    cy.get('[class="flash success"]')
    .should('contain.text', 'You logged out of the secure area!');
    });
});
