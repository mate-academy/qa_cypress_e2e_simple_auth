/// <reference types="cypress" />

describe('Login page', () => {
    beforeEach(() => {
    // it('shold visit site, why not use describe mf?', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })
    
    it('User should loged in with correctly data', () => {
        cy.get('[id="username"]')
            .type('tomsmith');

        cy.get('[id="password"]')
            .type('SuperSecretPassword!');
        
        cy.get('.fa')
            .click();

        cy.get('#flash')
            .contains('You logged into a secure area!')
    })

    it('User should have error massage when type invalid logit text, or password', () => {
        cy.get('[id="username"]')
            .type('tomsmit');

        cy.get('[id="password"]')
            .type('SuperSecretPassword!');
        
        cy.get('.fa')
            .click();

        cy.get('#flash')
            .contains('Your username is invalid!')
    })

    it('Checked what user Logout from the app', () => {
        cy.get('[id="username"]')
            .type('tomsmith');

        cy.get('[id="password"]')
            .type('SuperSecretPassword!');
        
        cy.get('.fa')
            .click()
        
        cy.get('.button')
            .click()
        
        cy.get('#flash')
            .contains('You logged out of the secure area!')
    })

})