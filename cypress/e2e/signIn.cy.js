/// <reference types="cypress" />

describe('Successful log in', () => {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';
    // Login with valid creds (tomsmith/SuperSecretPassword!) and assert you successfully logged in.
    it('log in with valid data', () => {
        cy.loginWithValidData();

        cy.url()
            .should('include', '/secure');

        cy.get('h2')
            .should('contain.text', 'Secure Area');

        cy.contains('a', 'Logout')
            .should('have.attr', 'href', '/logout');
    });

    // Logout from the app and assert you successfully logged out.
    it('log out', () => {
        cy.loginWithValidData();

        cy.contains('a', 'Logout')
            .click();

        cy.url()
            .should('include', '/login');

        cy.get('h2')
            .should('contain.text', 'Login Page');

        cy.get('[data-alert]')
            .should('contain.text', 'You logged out of the secure area!')
    });

    // Login with invalid creds and check validation error.
    //invalid username
    it('log in with invalid creds: username', () => {
        cy.visit('/login');

        cy.inputByAttribute('name', 'username')
            .type('username');

        cy.inputByAttribute('name', 'password')
            .type(password);

        cy.inputByAttribute('type', 'submit')
            .click();

        cy.get('[data-alert]')
            .should('contain.text', 'Your username is invalid!')
    });

    // invalid password
    it('log in with invalid creds: username', () => {
        cy.visit('/login');

        cy.inputByAttribute('name', 'username')
            .type(username);

        cy.inputByAttribute('name', 'password')
            .type('password');

        cy.inputByAttribute('type', 'submit')
            .click();

        cy.get('[data-alert]')
            .should('contain.text', 'Your password is invalid!')
    });
});



