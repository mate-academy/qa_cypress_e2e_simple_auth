/// <reference types="cypress" />
describe('User should', () => {

    it('be able to login with existing data', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username')
            .type('tomsmith')
                .should('have.value', 'tomsmith');
        cy.get('#password').
            type('SuperSecretPassword!')
                .should('have.value', 'SuperSecretPassword!');
        cy.get('.fa.fa-2x.fa-sign-in').click();
        cy.get('.flash.success').should('contain', 'You logged into a secure area!');
    })

    it('receive validation error for invalid creds', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username')
          .type('test')
              .should('have.value', 'test');
        cy.get('#password')
            .type('test')
                .should('have.value', 'test');
        cy.get('.fa.fa-2x.fa-sign-in').click();
        cy.get('.flash.error').should('contain', 'Your username is invalid!');
      })

      it('be able to logout from the app', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username')
            .type('tomsmith')
                .should('have.value', 'tomsmith');
        cy.get('#password').
            type('SuperSecretPassword!')
                .should('have.value', 'SuperSecretPassword!');
        cy.get('.fa.fa-2x.fa-sign-in').click();
        cy.get('.icon-2x.icon-signout').click();
        cy.get('.flash.success').should('contain', 'You logged out of the secure area!');
    })
    
  })
  