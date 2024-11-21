/// <reference types="cypress" />

describe('Automated test cases', () => {
    before('', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
    });

    it('Login with valid creds', () => {
      cy.get('[name="username"]').type('tomsmith');
      cy.get('[name="password"]').type('SuperSecretPassword!');
      cy.get('.fa.fa-2x.fa-sign-in').should('contain', 'Login').click();
      cy.get('#flash').should('contain', 'You logged into a secure area!');
    });

    it('Successfully logged out', () => {
        cy.get('.button').click();
        cy.get('#flash').should('contain', 'You logged out of the secure area!');
    });

    it('Login with invalid creds', () => {
        cy.get('[name="username"]').type('hello');
        cy.get('[name="password"]').type('password123!');
        cy.get('.fa.fa-2x.fa-sign-in').should('contain', 'Login').click();
        cy.get('#flash').should('contain', 'Your username is invalid!');
    });
});