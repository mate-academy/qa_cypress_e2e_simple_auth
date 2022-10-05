/// <reference types="cypress" />
    
describe('User shoul be able', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login')
    });
  
  
    it('Sign In with valid data', () => {
        cy.get('[id="username"]')
        .type('tomsmith');

        cy.get('[id="password"]')
        .type('SuperSecretPassword!');

        cy.get('.fa')
        .click();

        cy.get('[id="flash"]')
        .should('contain.text', 'You logged into a secure area!');
    });

    it('Sign In with invalid username', () => {
        cy.get('[id="username"]')
        .type('tomsmit');

        cy.get('[id="password"]')
        .type('SuperSecretPassword!');

        cy.get('.fa')
        .click();

        cy.get('[id="flash"]')
        .should('contain.text', 'Your username is invalid!');
    });

    it('Sign In with invalid password', () => {
        cy.get('[id="username"]')
        .type('tomsmith');

        cy.get('[id="password"]')
        .type('SuperSecretPassword');

        cy.get('.fa')
        .click();

        cy.get('[id="flash"]')
        .should('contain.text', 'Your password is invalid!');
    });

    it('Sign In & Logout', () => {
        cy.get('[id="username"]')
        .type('tomsmith');

        cy.get('[id="password"]')
        .type('SuperSecretPassword!');

        cy.get('.fa')
        .click();

        cy.get('.icon-2x')
        .click();

        cy.get('[id="flash"]')
        .should('contain.text', 'You logged out of the secure area!');
    });
  });