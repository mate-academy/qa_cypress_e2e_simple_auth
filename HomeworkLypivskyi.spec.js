/// <reference types="cypress" />

describe('Should', () => {
    before('visit'   , () => {
        cy.visit('https://the-internet.herokuapp.com/login')
    });

    it('log user in with valid username, password after clicking [Login]', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa.fa-2x.fa-sign-in').click();

        cy.get('#flash').should('contain', 'You logged into a secure area!');
    });

    it('log user out after clicking [Logout] and redirect to the main page', () => {
        cy.get('[href="/logout"]').click();
        cy.get('.flash.success').should('contain', 'You logged out of the secure area!');
    });

    it('not log user in with invalid credentials after clicking [Login]', () => {
        cy.get('#username').type('13');
        cy.get('#password').type('13');
        cy.get('.fa.fa-2x.fa-sign-in').click();

        cy.get('#flash').should('contain', 'Your username is invalid!');
    });
});
