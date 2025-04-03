/// <reference types="cypress" />
describe ('Log in with valid/invalid data', () => {
    //beforeEach(() => {
        it('log in with valid data', () => {
            cy.visit('https://the-internet.herokuapp.com/login');
            cy.get('#username')
            .type('tomsmith');
            cy.get('#password')
            .type('SuperSecretPassword!');
            cy.get('.fa')
            .click();
            cy.get('div#flash.flash.success')
            .should('contain', 'You logged into a secure area!');
            //cy.get('.subheader')
            //.should('contain', 'Welcome to the Secure Area. When you are done click logout below.');
            //cy.get('.button')
            //.click();
            //cy.get('div#flash.flash.success')
            //.should('contain', 'You logged into a secure area!');
        });
        it('log in with invalid data', () => {
            cy.visit('https://the-internet.herokuapp.com/login');
            cy.get('#username')
            .type('notomsmith');
            cy.get('#password')
            .type('noSuperSecretPassword!');
            cy.get('.fa')
            .click();
            cy.get('div#flash.flash.error')
            .should('contain', 'Your username is invalid!');
        });
        it('log in and log out', () => {
            cy.visit('https://the-internet.herokuapp.com/login');
            cy.get('#username')
            .type('tomsmith');
            cy.get('#password')
            .type('SuperSecretPassword!');
            cy.get('.fa')
            .click();
            cy.get('.subheader')
            .should('contain', 'Welcome to the Secure Area. When you are done click logout below.');
            cy.get('.button')
            .click();
            cy.get('div#flash.flash.success')
            .should('contain', 'You logged out of the secure area!');
        });
    //});
});