/// <reference types="cypress" />

describe('Sign In', () => { 
    it('should sign in', () => {
        cy.visit('/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('button[type="submit"').click()
        cy.contains('You logged into a secure area!').should('be.visible')
    });
    it('should not sign in -- username invalid error', () => {
        cy.visit('/login')
        cy.get('#username').type('1tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('button[type="submit"').click()
        cy.contains('Your username is invalid!').should('be.visible')
    });
    it('should not sign in -- password invalid error', () => {
        cy.visit('/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('1SuperSecretPassword!')
        cy.get('button[type="submit"').click()
        cy.contains('Your password is invalid!').should('be.visible')
    }); 
    it('should sign out', () => {
        cy.visit('/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('button[type="submit"').click()
        cy.contains('You logged into a secure area!').should('be.visible')
        cy.get('a[href="/logout"]').click()
        cy.contains('You logged out of the secure area!').should('be.visible')
    });
});