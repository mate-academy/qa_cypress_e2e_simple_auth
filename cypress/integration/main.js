/// <reference types="cypress" />


const username = 'tomsmith'
const password = 'SuperSecretPassword!'

describe('Login test', () => {
    it('Go to login page', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
    });

    it('Login with valid creds', () => {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('.fa-sign-in').click();
        cy.contains('Welcome to the Secure Area');        
    });

    it('Logout from app and assert you successfully logged out', () => {    
        cy.contains('Logout').click();
        cy.get('.fa-sign-in');        
    });

    it('Login with invalid creds and check validation error', () => {    
        cy.get('#username').type(username);
        cy.get('#password').type('wr0ng-pw');
        cy.get('.fa-sign-in').click();
        cy.contains('Your password is invalid');
        
        cy.get('#username').type('wrong-username');
        cy.get('#password').type(password);
        cy.get('.fa-sign-in').click();
        cy.contains('Your username is invalid');    
    });
});
  