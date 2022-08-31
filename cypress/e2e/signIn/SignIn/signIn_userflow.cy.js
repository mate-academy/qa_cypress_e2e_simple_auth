/// <reference types="cypress" />

describe('Login page', () => {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';

    beforeEach(() => {
        cy.visit('/login')
    })

    it('Should login with valid creds', () => {
        cy.get('#username')
        .type(username);

        cy.get('#password')
        .type (password);

        cy.get('.fa')
        .should('contain', 'Login')
        .click();

        cy.contains('.flash', 'You logged into a secure area!')
        .should('exist')
    })


    it('Should not login with uregistered data', () => {
        cy.get('#username')
        .type(`${username}` + 'badboy');

        cy.get('#password')
        .type (`${password}` + 'a small mistake');

        cy.get('.fa')
        .should('contain', 'Login')
        .click();

        cy.contains('.flash', 'Your username is invalid!')
        .should('exist')
    })

    it('User should be able to log out', () => {
        cy.SuccessfulLogin();

        cy.get('.button')
        .should('contain', 'Logout')
        .click()

        cy.url()
        .should('equal', Cypress.config().baseUrl + '/login')
    });
})