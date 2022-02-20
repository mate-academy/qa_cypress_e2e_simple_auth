/// <reference types="cypress" />

describe('User', () => {
    it('can login with valid data', () => {
        cy.visit('/login');
        cy.get('h2').should('contain', 'Login Page');

        const username = 'tomsmith';
        const password = 'SuperSecretPassword!';

        cy.get('#username').type(username);
        cy.get('#password').type(password + '{enter}');

        cy.url().should('equal', Cypress.config().baseUrl + '/secure');

        cy.get('#flash').should('contain', 'You logged into a secure area!');
    });

    it(`can't login with invalid username`, () => {
        cy.visit('/login');
        cy.get('h2').should('contain', 'Login Page');

        const username = 'testuser';
        const password = 'SuperSecretPassword!';

        cy.get('#username').type(username);
        cy.get('#password').type(password + '{enter}');

        cy.url().should('equal', Cypress.config().baseUrl + '/login');

        cy.get('#flash').should('contain', 'Your username is invalid!');
    });

    it(`can't login with invalid password`, () => {
        cy.visit('/login');
        cy.get('h2').should('contain', 'Login Page');

        const username = 'tomsmith';
        const password = 'password!';

        cy.get('#username').type(username);
        cy.get('#password').type(password + '{enter}');

        cy.url().should('equal', Cypress.config().baseUrl + '/login');

        cy.get('#flash').should('contain', 'Your password is invalid!');
    });

    it('can logout', () => {
        cy.visit('/login');
        cy.get('h2').should('contain', 'Login Page');

        const username = 'tomsmith';
        const password = 'SuperSecretPassword!';

        cy.get('#username').type(username);
        cy.get('#password').type(password + '{enter}');

        cy.url().should('equal', Cypress.config().baseUrl + '/secure');

        cy.contains('Logout').click();

        cy.url().should('equal', Cypress.config().baseUrl + '/login');

        cy.get('#flash').should('contain', 'You logged out of the secure area!');
    });
});