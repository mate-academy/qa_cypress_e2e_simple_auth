/// <reference types="cypress" />

describe('Login with invalid creds and validation errors', () => {
    before(() => {
      cy.visit('https://the-internet.herokuapp.com/login');
    });
  
    it('Blank username', () => {
      cy.get('#username')
        //.type('tomsmith')
        .clear();
      cy.get('#password')
        .type('SuperSecretPassword!')
        .clear();
      cy.get('.fa')
        .click();
      cy.get('#flash')
        .contains('Your username is invalid!');
    });

    it('Wrong username', () => {
      cy.get('#username')
        .type('t0msmith')
      cy.get('#password')
        .type('SuperSecretPassword!')
        .clear();
      cy.get('.fa')
        .click();
      cy.get('#flash')
        .contains('Your username is invalid!');
    });

    it('Existing username with caps', () => {
      cy.get('#username')
        .type('Tomsmith')
      cy.get('#password')
        .type('SuperSecretPassword!')
        .clear();
      cy.get('.fa')
        .click();
      cy.get('#flash')
        .contains('Your username is invalid!');
    });

    it('Blank password', () => {
      cy.get('#username')
        .type('tomsmith');
      cy.get('#password')
        .type('SuperSecretPassword');
      cy.get('.fa')
        .click();
      cy.get('#flash')
        .contains('Your password is invalid!');
    });

    it('Wrong password', () => {
      cy.get('#username')
        .type('tomsmith');
      cy.get('#password')
        .type('SuperSecretPassword');
      cy.get('.fa')
        .click();
      cy.get('#flash')
        .contains('Your password is invalid!');
    });
  });