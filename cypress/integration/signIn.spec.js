/// <reference types="cypress" />

describe('Login form', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    it('should be filled in with valid data', () => {

        cy.get('h2')
        .should('contain', 'Login Page');

        cy.get('#username')
        .type('tomsmith')
        .should('have.value', 'tomsmith');

        cy.get('#password')
        .type('SuperSecretPassword!')
        .should('have.value', 'SuperSecretPassword!');

        cy.get('.radius')
        .should('contain', 'Login')
        .click();

    });

    it('should be field with invalid username and valid password', () => {

        cy.get('h2')
        .should('contain', 'Login Page');
        
        cy.get('#username')
        .type('abcd')
        .should('have.value', 'abcd');

        cy.get('#password')
        .type('SuperSecretPassword!')
        .should('have.value', 'SuperSecretPassword!');

        cy.get('.radius')
        .should('contain', 'Login')
        .click();

        cy.get('.flash')
        .should('contain.text', 'Your username is invalid!');
    });

    it('should be field with valid username and invalid password', () => {

        cy.get('h2')
        .should('contain', 'Login Page');
        
        cy.get('#username')
        .type('tomsmith')
        .should('have.value', 'tomsmith');

        cy.get('#password')
        .type('1234')
        .should('have.value', '1234');

        cy.get('.radius')
        .should('contain', 'Login')
        .click();

        cy.get('.flash')
        .should('contain.text', 'Your password is invalid!');
  });

  it('should be filled in with valid data and user logout from the app',() => {

        cy.get('h2')
        .should('contain', 'Login Page');

        cy.get('#username')
        .type('tomsmith')
        .should('have.value', 'tomsmith');

        cy.get('#password')
        .type('SuperSecretPassword!')
        .should('have.value', 'SuperSecretPassword!');

        cy.get('.radius')
        .should('contain', 'Login')
        .click();

        cy.get('.flash')
        .should('contain.text', 'You logged into a secure area!');
        
        cy.get('.radius')
        .should('contain', 'Logout')
        .click();

        cy.get('h2')
        .should('contain', 'Login Page');
  });
});