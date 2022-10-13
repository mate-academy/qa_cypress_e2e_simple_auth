/// <reference types="cypress" />

describe('Login page', () => {
    before(() => {
      cy.visit('https://the-internet.herokuapp.com/login');
    });
  
    it('should not provide login with blank username', () => {
      cy.get('[id="username"]')
        //.type('tomsmith')
        .clear();
        cy.get('[id="password"]')
        .type('SuperSecretPassword!');
      cy.get('.fa')
        .click();
      cy.get('[id="flash"]')
        .contains('Your username is invalid!');
    });

    it('should not provide login with wrong username', () => {
      cy.get('[id="username"]')
        .type('t0msmith');
      cy.get('[id="password"]')
        .type('SuperSecretPassword!');
      cy.get('.fa')
        .click();
      cy.get('[id="flash"]')
        .contains('Your username is invalid!');
    });

    it('should not provide login with existing username with caps', () => {
      cy.get('[id="username"]')
        .type('Tomsmith');
      cy.get('[id="password"]')
        .type('SuperSecretPassword!')
      cy.get('.fa')
        .click();
      cy.get('[id="flash"]')
        .contains('Your username is invalid!');
    });

    it('should not provide login with blank password', () => {git 
      cy.get('[id="username"]')
        .type('tomsmith');
      cy.get('[id="password"]')
        .clear;
      cy.get('.fa')
        .click();
      cy.get('[id="flash"]')
        .contains('Your password is invalid!');
    });

    it('should not provide login with wrong password', () => {
      cy.get('[id="username"]')
        .type('tomsmith');
        cy.get('[id="password"]')
        .type('SuperSecretPassword');
      cy.get('.fa')
        .click();
      cy.get('[id="flash"]')
        .contains('Your password is invalid!');
    });
  });