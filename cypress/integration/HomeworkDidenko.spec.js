/// <reference types="cypress" />

describe('', () => {
    before('', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
    })
    it('Login with valid data', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').click();

        cy.get('.subheader').should('have.text', 'Welcome to the Secure Area. When you are done click logout below.');
    });
    it('Log out from system', () => {
        cy.get('.icon-2x').click();
        cy.get('#flash').should('have.text', '\n            You logged out of the secure area!\n            ×\n          ');
    });
    it('Login with invalid data', () => {
        cy.get('#username').type('wronguser');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').click();
        cy.get('#flash').should('have.text', '\n            Your username is invalid!\n            ×\n          ');
  });
});