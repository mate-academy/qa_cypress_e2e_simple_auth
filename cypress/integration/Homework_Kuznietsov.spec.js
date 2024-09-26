/// <reference types="cypress" />

describe('Test valid creds', () => {
    before('', () => {
            cy.visit('https://the-internet.herokuapp.com/login');
        });
        it('LoginValidData', () => {
            cy.get('#username').type('tomsmith');
            cy.get('#password').type('SuperSecretPassword!');
            cy.get('.fa').click();
            cy.url().should('eq', 'https://the-internet.herokuapp.com/secure');
            cy.get('.icon-2x.icon-signout').contains(' Logout').should('exist').click();
        });

        it('LoginInvalidData', () => {
            cy.get('#username').type('cartman4');
            cy.get('#password').type('SuperEr1c!@#');
            cy.get('.fa').click();
            cy.url().should('eq', 'https://the-internet.herokuapp.com/login');
            cy.get('.flash.error').contains('Your username is invalid!').should('exist');
        });

        it('Logout', () => {
            cy.get('#username').type('tomsmith');
            cy.get('#password').type('SuperSecretPassword!');
            cy.get('.fa').click();
            cy.url().should('eq', 'https://the-internet.herokuapp.com/secure');
            cy.get('.icon-2x.icon-signout').contains(' Logout').should('exist').click();
            cy.get('.flash.success').contains('You logged out of the secure area!').should('exist');
        });
    });
    