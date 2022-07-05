/// <reference types="cypress" />

describe('User should', () => {
    it('be able to succes log in with valid data ', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username')
          .type('tomsmith');
        cy.get('#password')
          .type('SuperSecretPassword!');
        cy.contains('button', 'Login')
          .click();
        cy.contains('Welcome to the Secure Area. When you are done click logout below.');
        cy.get('.button')
          .click();
    });
    it('not be able to succes log in with invalid username', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username')
          .type('invalid');
        cy.get('#password')
          .type('SuperSecretPassword!');
        cy.contains('button', 'Login')
          .click();
        cy.get('#flash')
          .should('contain', 'Your username is invalid!')
    });

    it('not be able to succes log in with invalid password', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username')
          .type('tomsmith');
        cy.get('#password')
          .type('SuperSecretPassword!!!');
        cy.contains('button', 'Login')
          .click();
        cy.get('#flash')
          .should('contain', 'Your password is invalid!')
    });
});
