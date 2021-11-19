/// <reference types="cypress" />

describe('Authorization testing. User should ', () => {
    
    it('login successful', () =>{
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('[name="username"]').type('tomsmith');
        cy.get('[name="password"]').type('SuperSecretPassword!');
        cy.get('i.fa-sign-in').click();
        cy.get('.flash.success')
        .should('contain', 'You logged into a secure area!');
    });
    it('logout successful', () =>{
        cy.get('i.icon-signout').click();
        cy.get('.flash.success')
        .should('contain', 'You logged out of the secure area!');
    });
    it('get error message about username', () =>{
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('[name="username"]').type('ntest');
        cy.get('[name="password"]').type('123');
        cy.get('i.fa-sign-in').click();
        cy.get('.flash.error')
        .should('contain', 'Your username is invalid!');
    });
    it('get error message about password', () =>{
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('[name="username"]').type('tomsmith');
        cy.get('[name="password"]').type('123');
        cy.get('i.fa-sign-in').click();
        cy.get('.flash.error')
        .should('contain', 'Your password is invalid!');
    });
});