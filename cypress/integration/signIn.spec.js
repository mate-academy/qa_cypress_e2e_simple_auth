/// <reference types="cypress" />

describe('Second homework', () => {
    beforeEach ( ()=>{
        cy.visit('/login')
    }) 
    it('Login with valid data', () => {

        cy.get('#username').type('tomsmith');

        cy.get('#password').type('SuperSecretPassword!');

        cy.contains('button[type=submit]', 'Login').click();

        cy.get('div#flash.flash.success').should('contain', 'You logged into a secure area!');
    })
    it('Login with invalid data', () => {

        cy.get('#username').type('tomsmith');

        cy.get('#password').type('password');

        cy.contains('button[type=submit]', 'Login').click();

        cy.get('div#flash.flash.error').should('contain','Your password is invalid!');
    })

    it('Log Out', () => {

        cy.get('#username').type('tomsmith');

        cy.get('#password').type('SuperSecretPassword!');

        cy.contains('button[type=submit]', 'Login').click();

        cy.contains('a.button.secondary','Logout').click();

        cy.get('div#flash.flash.success').should('contain', 'You logged out of the secure area!');
    })
})