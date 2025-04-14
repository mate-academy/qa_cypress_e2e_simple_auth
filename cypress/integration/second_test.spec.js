/// <reference types="cypress" />

describe('', () => {
    before('', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    it('should log user with valid data in', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa-2x.fa-sign-in').click();
        cy.get('.flash.success').contains('You logged into a secure area!').should('exist');
    });

    it('should appear a message that user successfully logged out', () => {
        cy.get('.icon-signout').click();
        cy.get('[data-alert]').contains('You logged out of the secure area!').should('exist');
    })

    it('should appear validation error if user logging in with invalid data', () => {
        cy.get('#username').type('aboba123');
        cy.get('#password').type('qwerty123!');
        cy.get('.fa-2x.fa-sign-in').click();
        cy.get('.flash.error').contains('Your username is invalid!').should('exist');
    });
});