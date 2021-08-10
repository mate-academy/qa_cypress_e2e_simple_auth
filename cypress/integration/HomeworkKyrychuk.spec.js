/// <reference types="cypress" />

describe('3 tests', () => {
    before(function () {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    it('Login with valid creds ', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa').click();
        cy.url().should('eq', 'https://the-internet.herokuapp.com/secure');
        cy.get('.button.secondary.radius').click();
    });

    it('Login with invalid creds ', () => {
        cy.get('#username').type('tomsmithhy');
        cy.get('#password').type('SuperSecret');
        cy.get('.fa').click();
        cy.url().should('eq', 'https://the-internet.herokuapp.com/login');
        cy.get('#flash').contains('Your username is invalid!').should('exist');
    });

    it('Logout from app and assert you successfully logged out', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa').click();
        cy.url().should('eq', 'https://the-internet.herokuapp.com/secure');
        cy.get('.button.secondary.radius').click();
        cy.get('#flash').contains('You logged out of the secure area!').should('exist');
    });
});


    