/// <reference types="cypress" />
describe('Login/Logout test with valid/invalid data', () => {
    
    it('should visit login page', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
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

    it('should allow to login existing user', () => {
      cy.get('#username')
        .type('tomsmith')
    
      cy.get('#password')
        .type('SuperSecretPassword!')
    
      cy.get('.radius')
        .click();

      cy.contains('#flash', 'You logged into a secure area!')
      .should('exist')
    });

    it('should logout from the app and assert you successfully logged outgit', () => {
      cy.get('.button')
        .click();

      cy.contains('#flash', 'You logged out of the secure area!')
      .should('exist')
    });
});