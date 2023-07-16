/// <reference types="cypress" />

describe('Test', () => {
    before(function () {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    it('Login with valid creds', () => {
        cy.get('input#username').type('tomsmith');
        cy.get('input#password').type('SuperSecretPassword!');
        cy.get('.fa').click();
        cy.url().should('eq', 'https://the-internet.herokuapp.com/secure');
        cy.get('.icon-2x').click();    
    })

    it('Login with invalid creds', () => {
        cy.get('input#username').type('tomsmith25');
        cy.get('input#password').type('SuperSecretPassword!');
        cy.get('.fa').click();
        cy.get('.flash').should('contain', 'Your username is invalid!');
        cy.get('input#username').type('tomsmith');
        cy.get('input#password').type('SuperPassword!');
        cy.get('.fa').click();
        cy.get('.flash').should('contain', 'Your password is invalid!');
    })

    it('Logout from app', () => {
        cy.get('input#username').type('tomsmith');
        cy.get('input#password').type('SuperSecretPassword!');
        cy.get('.fa').click();
        cy.url().should('eq', 'https://the-internet.herokuapp.com/secure');        
        cy.get('.icon-2x').click();
        cy.get('.flash').should('contain', 'You logged out of the secure area!');
    })
  })