/// <reference types="cypress" />
describe('Login/Logout test with valid/invalid data', () => {
    beforeEach(() => {
      cy.visit('/login');
    });
    
    it('should allow to login existing user', () => {
      cy.get('#username')
        .type('tomsmith')
    
      cy.get('#password')
        .type('SuperSecretPassword!')
    
      cy.get('.radius')
        .click();
        
      cy.url()
        .should('include', '/secure');

      cy.contains('#flash', 'You logged into a secure area!')
        .should('exist')
    });

    it('should login with invalid creds and check validation error', () => {
      cy.get('#username')
        .type('visiter')
    
      cy.get('#password')
        .type('visiterspassword')
    
      cy.get('.radius')
        .click();

      cy.contains('#flash', 'Your username is invalid!')
        .should('exist')
    });

    it('should login with invalid username and check validation error', () => {
      cy.get('#username')
        .type('visiter')
    
      cy.get('#password')
        .type('SuperSecretPassword!')
    
      cy.get('.radius')
        .click();

      cy.contains('#flash', 'Your username is invalid!')
        .should('exist')
    });

    it('should login with invalid password and check validation error', () => {
      cy.get('#username')
        .type('tomsmith')
    
      cy.get('#password')
        .type('visiterspassword')
    
      cy.get('.radius')
        .click();

      cy.contains('#flash', 'Your password is invalid!')
        .should('exist')
    });
    
    it('should logout from the app and assert you successfully logged out', () => {
      cy.url()
        .should('include', '/login')

      cy.get('#username')
        .type('tomsmith')
    
      cy.get('#password')
        .type('SuperSecretPassword!')
    
      cy.get('.radius')
        .click();

      cy.url()
        .should('include', '/secure')

      cy.get('.button')
        .click();

      cy.contains('#flash', 'You logged out of the secure area!')
        .should('exist')
    });
});