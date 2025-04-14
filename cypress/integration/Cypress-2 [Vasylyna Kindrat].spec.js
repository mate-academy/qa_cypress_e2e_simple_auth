/// <reference types="cypress" />

describe ('login', () => {
    before('open login page', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
    })
    
    it('Successful login', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').click();
        cy.get('#flash').should('contain', 'You logged into a secure area!')
    });

    it('Invalid creds', () => {
        cy.get('#username').type('mistakes');
        cy.get('#password').type('ihatethis');
        cy.get('.radius').click();
        cy.get('#flash').should('contain', 'Your username is invalid!')
    });

    it('Successfull logout', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').click();
        
        cy.get('.radius').click();
        cy.get('#flash').should('contain', 'You logged out of the secure area!')
    });
});