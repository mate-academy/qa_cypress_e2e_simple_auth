/// <reference types="cypress" />

const username = 'tomsmith'
const password = 'SuperSecretPassword!'

describe('Login test', () => {
    it('Go to lofin page', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    it('Login with valid creds', () => {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('.fa-sign-in').click();
        cy.contains('Welcome to the Secure Area.').should('exist');
    
    });

    it('Logout from app and assert you successfully logged out.', () => {
        cy.contains('Logout').click();
        cy.get('.fa-sign-in');
    });

    
    it('Login with invalid creds', () => {
        cy.get('#username').type(username);
        cy.get('#password').type('wrong-pw');
        cy.get('.fa-sign-in').click();
        cy.get('#flash').should('contain', 'Your password is invalid')
    });

    it('Login with invalid creds', () => {
        cy.get('#username').type('wrong-name');
        cy.get('#password').type(password);
        cy.get('.fa-sign-in').click();
        cy.get('#flash').should('contain', 'Your username is invalid');
    });

});