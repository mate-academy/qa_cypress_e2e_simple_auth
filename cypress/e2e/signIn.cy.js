/// <reference types="cypress" />

describe('User should', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login');
    });
    it.only('be able to succes log in with valid data ', () => {
        cy.get('#username')
          .type('tomsmith');
        cy.get('#password')
          .type('SuperSecretPassword!');
        cy.contains('button', 'Login')
          .click();
        cy.get('div#flash.flash.success')
            .should('contain', 'You logged into a secure area!');
        cy.get('.button')
          .click();
        cy.get('#flash')
          .should('contain', 'You logged out of the secure area!')
    });
    it('not be able to succes log in with invalid username', () => {
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
