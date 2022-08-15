/// <reference types="cypress" />

describe('My second tests', () => {
    it('should open the sign in page', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('should login with valid creds', () => {
        cy.get('#username')
        .type('tomsmith');

        cy.get('#password')
        .type('SuperSecretPassword!');

        cy.contains('.radius', 'Login')
        .click();

        cy.get('#flash')
        .should('contain.text', 'You logged into a secure area!')
    })

    it('should logout from the app and assert you successfully logged out', () => {
        cy.contains('.button', 'Logout')
        .click();

        cy.get('#flash')
        .should('contain.text', 'You logged out of the secure area!');

    })

    it('should login with invalid creds and check validation error', () => {
        

        cy.get('#username')
        .type('tomatosmith');

        cy.get('#password')
        .type('SuperDuperPassword!');

        cy.contains('.radius', 'Login')
        .click();

        cy.get('#flash')
        .should('contain.text', 'Your username is invalid!')
    })


})