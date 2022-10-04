/// <reference types="cypress" />

describe('Successful login', () => {

    it('Login with valid creds', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('[id="username"]')
            .type('tomsmith');
        cy.get('[id="password"]')
            .type('SuperSecretPassword!');
        cy.get('.fa')
            .click();
        cy.get('[id="flash"]')
            .should('contains.text', 'You logged into a secure area!');
    });
    it('Login with invalid username', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('[id="username"]')
            .type('tomsmit');
        cy.get('[id="password"]')
            .type('SuperSecretPassword!');
        cy.get('.fa')
            .click();
        cy.get('[id="flash"]')
            .should('contains.text', 'Your username is invalid!');
    })
    it('Login with invalid password', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('[id="username"]')
            .type('tomsmith');
        cy.get('[id="password"]')
            .type('SuperSecretPasswor');
        cy.get('.fa')
            .click();
        cy.get('[id="flash"]')
            .should('contains.text', 'Your password is invalid!');
    })
    it('Successful logout ', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('[id="username"]')
            .type('tomsmith');
        cy.get('[id="password"]')
            .type('SuperSecretPassword!');
        cy.get('.fa')
            .click();
        cy.get('[id="flash"]')
            .should('contains.text', 'You logged into a secure area!');
        cy.get('.button.secondary.radius')
            .click();
        cy.get('[id="flash"]')
            .should('contains.text', 'You logged out of the secure area!');
    });
  });
