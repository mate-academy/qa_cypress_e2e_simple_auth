/// <reference types="cypress" />

describe('Successfull Login', () => {
    it('should log in with valid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    
        cy.get('[name="username"]')
        .type('tomsmith');

        cy.get('[name="password"]')
        .type('SuperSecretPassword!');

        cy.contains('.fa', 'Login')
        .click();

        cy.get('#flash')
        .should('contain.text', 'You logged into a secure area!')


    });
});

describe('Login error with invalid creds', () => {
    it('should show error after invalid creds login', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    
        cy.get('[name="username"]')
        .type('invalid');

        cy.get('[name="password"]')
        .type('creds');

        cy.contains('.fa', 'Login')
        .click();

        cy.get('#flash')
        .should('contain.text', 'Your username is invalid')
    });
});

describe('Successfull Logout', () => {
    it('should logout from the account', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    
       cy.loginSuccess();
       
       cy.contains('.button', 'Logout')
       .click();

       cy.get('#flash')
        .should('contain.text', 'You logged out of the secure area!')

    });
});

