/// <reference types="cypress" />
describe('User shoul be able', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    it('to login with a valid credentials', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('[class="radius"]').click();
        cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    });

    it('to login with an invalid username', () => {
        cy.get('#username').type('tomsmitha');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('[class="radius"]').click();
        cy.get('#flash').should('contain.text', 'Your username is invalid!');
    });

    it('to login with an invalid password', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPass');
        cy.get('[class="radius"]').click();
        cy.get('#flash').should('contain.text', 'Your password is invalid!');
    });

    it('to logout successfully from the app', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('[class="radius"]').click();
        cy.get('[href="/logout"]').click();
        cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
    });
});