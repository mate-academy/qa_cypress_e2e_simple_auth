/// <reference types="cypress" />

const username = 'tomsmith';
const password = 'SuperSecretPassword!';

describe('Sign In page', () => {
    beforeEach (() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    });
    
    it('user should log in with valid creds and log out after', () => {
        cy.get('input#username')
        .type(username);

        cy.get('input#password')
        .type(password);

        cy.get('button.radius').should('contain.text', 'Login')
        .click();

        cy.get('div#flash.flash.success')
        .should('contain.text', 'You logged into a secure area!');

        cy.url().should('equal', 'https://the-internet.herokuapp.com/secure')

        cy.get('a.button.secondary.radius').should('contain.text', 'Logout')
        .click();

        cy.url().should('equal', 'https://the-internet.herokuapp.com/login');
    });
    
    it('user should not log in with invalid username', () => {
        cy.get('input#username')
        .type(username + '!');

        cy.get('input#password')
        .type(password);

        cy.get('button.radius').should('contain.text', 'Login')
        .click();

        cy.get('div#flash.flash.error')
        .should('contain.text', 'Your username is invalid!');
    });

    it('user should not log in with invalid password', () => {
        cy.get('input#username')
        .type(username);

        cy.get('input#password')
        .type(password + '000');

        cy.get('button.radius').should('contain.text', 'Login')
        .click();

        cy.get('div#flash.flash.error')
        .should('contain.text', 'Your password is invalid!');
    });
});