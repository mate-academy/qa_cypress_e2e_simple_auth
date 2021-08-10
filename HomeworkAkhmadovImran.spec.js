/// <reference types="cypress" />

describe('User can', () => {
    
    
    before('', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });
    
    it('Login with valid creds (tomsmith/SuperSecretPassword!)', () => {
        cy.get('[name="username"]').type('tomsmith');
        cy.get('[name="password"]').type('SuperSecretPassword!');
        cy.get('.fa-sign-in').click();
        cy.get('#flash').should('contain', 'You logged into a secure area!');
        cy.get('[href="/logout"]').click();
        cy.get('#flash').should('contain', 'You logged out of the secure area!');
    });
    
    it('Login with invalid creds and check validation error', () => {
        cy.get('[name="username"]').type('polsmittya');
        cy.get('[name="password"]').type('SuperSecretPassword');
        cy.get('.fa-sign-in').click();
        cy.get('#flash').should('contain', 'Your username is invalid!'); 
    });
    
    it('Logout from app and assert you successfully logged out', () => {
        cy.get('[name="username"]').type('tomsmith');
        cy.get('[name="password"]').type('SuperSecretPassword!');
        cy.get('.fa-sign-in').click();
        cy.get('#flash').should('contain', 'You logged into a secure area!');
        cy.get('[href="/logout"]').click();
        cy.get('#flash').should('contain', 'You logged out of the secure area!');
    });
});
