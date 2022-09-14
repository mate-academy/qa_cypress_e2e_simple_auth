/// <reference types="cypress" />
describe('Home_work2', () => {

    beforeEach( () => {
        cy.visit('https://the-internet.herokuapp.com/login')

    })

    it('Login with valid creds', () => {
        cy.get('#username')
            .type('tomsmith')
        cy.get('#password')
            .type('SuperSecretPassword!')
        cy.get('[class="fa fa-2x fa-sign-in"]')
            .click()
        cy.get('[class="subheader"]')
            .should('contain.text', 'Welcome to the Secure Area. When you are done click logout below.')

    });

    it('Login with invalid creds', () => {
        cy.get('#username')
            .type('tom')
        cy.get('#password')
            .type('SuperSecret')
        cy.get('[class="fa fa-2x fa-sign-in"]')
            .click()
        cy.get('#flash')
            .should('contain.text', 'Your username is invalid!')
    });

    it('Logout from the app and assert you successfully logged out', () => {
        cy.get('#username')
            .type('tomsmith')
        cy.get('#password')
            .type('SuperSecretPassword!')
        cy.get('[class="fa fa-2x fa-sign-in"]')
            .click()
        cy.get('[class="icon-2x icon-signout"]')
            .click()
        cy.get('#flash')
            .should('contain.text', 'You logged out of the secure area!')

    });


});
