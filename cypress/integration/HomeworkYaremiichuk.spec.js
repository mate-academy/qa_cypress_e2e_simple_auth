/// <reference types="cypress" />

describe('User should', function() {
    
    beforeEach(function() {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    it('be able to login with valid creds', function() {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa.fa-2x.fa-sign-in').click();
        cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    });

    it('not be able to login with invalid creds', function() {
        cy.get('#username').type('tomsmith1');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa.fa-2x.fa-sign-in').click();
        cy.get('#flash').should('contain.text', 'Your username is invalid!');       
    });

    it('be able to logout from the app', function() {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa.fa-2x.fa-sign-in').click();
        cy.get('.button.secondary.radius').click();
        cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
    });
});
