/// <reference types="cypress" />

const username = 'tomsmith';
const password = 'SuperSecretPassword!';

describe('Sign In page', () => {
    beforeEach (() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    });
    
    it('user should log in with valid creds', () => {
        cy.get('[name="username"]')
        .type(username);

        cy.get('[name="password"]')
        .type(password);

        cy.get('.fa.fa-2x.fa-sign-in').should('contain.text', 'Login')
        .click();

        cy.get('.flash.success')
        .should('contain.text', 'You logged into a secure area!');

        cy.url().should('equal', 'https://the-internet.herokuapp.com/secure')
    });
    
    it('user should not log in with invalid username', () => {
        cy.get('[name="username"]')
        .type(username + '!');

        cy.get('[name="password"]')
        .type(password);

        cy.get('.fa.fa-2x.fa-sign-in').should('contain.text', 'Login')
        .click();

        cy.get('.flash.error')
        .should('contain.text', 'Your username is invalid!');
    });

    it('user should not log in with invalid password', () => {
        cy.get('[name="username"]')
        .type(username);

        cy.get('[name="password"]')
        .type(password + '000');

        cy.get('.fa.fa-2x.fa-sign-in').should('contain.text', 'Login')
        .click();

        cy.get('.flash.error')
        .should('contain.text', 'Your password is invalid!');
    });
    
    it('user can log out from the app', () => {
        cy.get('[name="username"]')
        .type(username);

        cy.get('[name="password"]')
        .type(password);

        cy.get('.fa.fa-2x.fa-sign-in').should('contain.text', 'Login')
        .click();

        cy.get('.icon-2x.icon-signout').should('contain.text', 'Logout')
        .click();

        cy.get('.flash.success').should('contain.text', 'You logged out of the secure area!');

        cy.url().should('equal', 'https://the-internet.herokuapp.com/login');
    });
});
