/// <reference types="cypress" />

describe('Should ', () => {
    before('visit site', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });


    it('not log in if credentials are invalid and clicking [Login]', () => {
        cy.get('#username').type('InvalidUsername');
        cy.get('#password').type('InvalidPassword');
        cy.get('.fa.fa-2x.fa-sign-in').click();
    });


    it('check if error message appears if not logged in with invalid credentials', () => {
        cy.get('.flash.error').should('contain', 'Your username is invalid!');
    });


    it('be able to login with valid username, password and clicking [Login]', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa.fa-2x.fa-sign-in').click();
    });


    it('check if logged in and redirected to "Secure Area" page', () => {
        cy.get('.flash.success').should('contain', 'You logged into a secure area!');
    });


    it('logout if [Logout] clicked, redirected to main page', () => {
        cy.get('[href="/logout"]').click();
        cy.get('.flash.success').should('contain', 'You logged out of the secure area!');
    });
});