/// <reference types="cypress" />
describe('Login form', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })
    it('should allow to login with valid creds', () => {

        cy.get('#username')
            .type('tomsmith')
            .should('have.value', 'tomsmith')

        cy.get('#password')
            .type('SuperSecretPassword!')
            .should('have.value', 'SuperSecretPassword!')

        cy.get('button .fa-sign-in')
            .click()

        cy.get('#flash')
            .should('contain', 'You logged into a secure area!')      
      
    })

    it('should not allow to login with invalid username', () => {

        cy.get('#username')
            .type('willsmith')
            .should('have.value', 'willsmith')

        cy.get('#password')
            .type('SuperSecretPassword!')
            .should('have.value', 'SuperSecretPassword!')

        cy.get('button .fa-sign-in')
            .click()

        cy.get('#flash')
            .should('contain', 'Your username is invalid!')      
      
    }) 
    
    it('should not allow to login with invalid password', () => {

        cy.get('#username')
            .type('tomsmith')
            .should('have.value', 'tomsmith')

        cy.get('#password')
            .type('SuperPuperSecretPassword!')
            .should('have.value', 'SuperPuperSecretPassword!')

        cy.get('button .fa-sign-in')
            .click()

        cy.get('#flash')
            .should('contain', 'Your password is invalid!')      
      
    })  

    it('should allow to logout', () => {
        
        cy.get('#username')
            .type('tomsmith')
            .should('have.value', 'tomsmith')

        cy.get('#password')
            .type('SuperSecretPassword!')
            .should('have.value', 'SuperSecretPassword!')

        cy.get('button .fa-sign-in')
            .click()

        cy.get('#flash')
            .should('contain', 'You logged into a secure area!') 
            
        cy.get('a .icon-2x')
            .click()

        cy.get('#flash')
            .should('contain','You logged out of the secure area!')
      
    })
})