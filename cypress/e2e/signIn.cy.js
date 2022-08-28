/// <reference types="cypress" />

describe('Sign in page', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });
    
    it('Login with valid creds', () => {
        cy.get('[name="username"]').type('tomsmith');
        cy.get('[name="password"]').type('SuperSecretPassword!');
        cy.get('.fa.fa-2x.fa-sign-in').click();
        cy.contains('You logged into a secure area!');
    });

    it('Login with invalid creds (username)', () => {
        cy.get('[name="username"]').type('notExist');
        cy.get('[name="password"]').type('badPassword!');
        cy.get('.fa.fa-2x.fa-sign-in').click();
        cy.contains('Your username is invalid!');
    });

    it('Login with invalid creds (password)', () => {
        cy.get('[name="username"]').type('tomsmith');
        cy.get('[name="password"]').type('badPassword!');
        cy.get('.fa.fa-2x.fa-sign-in').click();
        cy.contains('Your password is invalid!');
    });

    it('Logout from the app', () => {
        cy.get('[name="username"]').type('tomsmith');
        cy.get('[name="password"]').type('SuperSecretPassword!');
        cy.get('.fa.fa-2x.fa-sign-in').click();
        cy.get('[href="/logout"]').click();
        cy.contains('You logged out of the secure area!');
    });
});
