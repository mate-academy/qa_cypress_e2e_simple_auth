/// <reference types="cypress" />

describe('3 automated test cases', () => {
    before('', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
    });
    
    it('Successful login', () => {
      cy.get('[name="username"]').type('tomsmith');
      cy.get('[name="password"]').type('SuperSecretPassword!');
      cy.get('.fa.fa-2x.fa-sign-in').should('contain', 'Login').click();

      cy.get('#flash').should('contain', 'You logged into a secure area!');
      cy.get('.subheader').should('contain', 'Welcome to the Secure Area. When you are done click logout below.');
      cy.url().should('eq', 'https://the-internet.herokuapp.com/secure');
      cy.get('.button').click();
    });
    
    it('Login with invalid creds', () => {
      cy.get('[name="username"]').type('toms');
      cy.get('[name="password"]').type('uperSecretPassword!');
      cy.get('.fa.fa-2x.fa-sign-in').should('contain', 'Login').click();

      cy.get('#flash').should('contain', 'Your username is invalid!');
      cy.url().should('eq', 'https://the-internet.herokuapp.com/login')

      cy.get('[name="username"]').type('tomsmith');
      cy.get('[name="password"]').type('SuperSecret!');
      cy.get('.fa.fa-2x.fa-sign-in').should('contain', 'Login').click();

      cy.get('#flash').should('contain', 'Your password is invalid!');
      cy.url().should('eq', 'https://the-internet.herokuapp.com/login')
    });

    it('Successful logout', () => {
      cy.get('[name="username"]').type('tomsmith');
      cy.get('[name="password"]').type('SuperSecretPassword!');
      cy.get('.fa.fa-2x.fa-sign-in').should('contain', 'Login').click();

      cy.get('.button').click();
      cy.get('#flash').should('contain', 'You logged out of the secure area!');
      cy.url().should('eq', 'https://the-internet.herokuapp.com/login')
    });     
  });