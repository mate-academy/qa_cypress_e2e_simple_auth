/// <reference types="cypress" />

describe('Sign In', () => {
    it('Should log in with valid creds', () => {
        cy.visit("/login");
        cy.get('[type=text]').type('tomsmith');
        cy.get('[type=password]').type('SuperSecretPassword!' + '{enter}');
        cy.get('#flash').should('contain.text', 'You logged into a secure area!');
        cy.url().should('include', 'secure');
    })

    it('Shouldn`t log in with invalid username', () => {
        cy.visit("/login");
        cy.get('[type=text]').type('Tom');
        cy.get('[type=password]').type('SuperSecretPassword!' + '{enter}');
        cy.get('#flash').should('contain.text', 'Your username is invalid!');
        cy.url().should('include', 'login');
    })

    it('Shouldn`t log in with invalid password', () => {
        cy.visit("/login");
        cy.get('[type=text]').type('tomsmith');
        cy.get('[type=password]').type('NotThatSecretPassword!' + '{enter}');
        cy.get('#flash').should('contain.text', 'Your password is invalid!');
        cy.url().should('include', 'login');
    })

    it('Logged in user should be able to log out', () => {
        cy.visit("/login");
        cy.get('[type=text]').type('tomsmith');
        cy.get('[type=password]').type('SuperSecretPassword!' + '{enter}');
        cy.get('[href="/logout"]').click();
        cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
    })
  });