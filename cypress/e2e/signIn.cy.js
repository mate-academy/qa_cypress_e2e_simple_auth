/// <reference types="cypress" />

describe('My second test', () => {
    beforeEach(() => {
    // it('shold visit site, why not use describe mf?', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })
    
    it('Should type logit text, password and logged in', () => {
        cy.get('#username')
            .type('tomsmith');

        cy.get('#password')
            .type('SuperSecretPassword!');
        
        cy.get('.fa')
            .click();

        cy.get('#flash')
            .contains('You logged into a secure area!')
    })

    it('Should type invalid logit text, or password and logged in and have error massage', () => {
        cy.get('#username')
            .type('tomsmit');

        cy.get('#password')
            .type('SuperSecretPassword!');
        
        cy.get('.fa')
            .click();

        cy.get('#flash')
            .contains('Your username is invalid!')
    })

    it('Checked what user Logout from the app', () => {
        cy.get('#username')
            .type('tomsmith');

        cy.get('#password')
            .type('SuperSecretPassword!');
        
        cy.get('.fa')
            .click()
        
        cy.get('.button')
            .click()
        
        cy.get('#flash')
            .contains('You logged out of the secure area!')
    })

})