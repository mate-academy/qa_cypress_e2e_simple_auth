/// <reference types="cypress" />

const { exists } = require("fs");

describe('cypress second hw Nataliia Solotva', () => {
      beforeEach (() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  const user = {
   username: 'tomsmith',
   password: 'SuperSecretPassword!'
  };
   
    it('login with valide credentials', () => {
      cy.findFieldByName('username')
        .type(user.username);
      cy.findFieldByName('password')
        .type(user.password);
      cy.get('.fa')
        .click();
      cy.get('.success')
        .should('contains.text', 'You logged into a secure area!');
      cy.get('.subheader')
        .should('contains.text', 'Welcome to the Secure Area. When you are done click logout below');
      cy.get('.radius')
        .click();
    });

    it('login with invalide username', () => {
        cy.findFieldByName('username')
          .type(`${user.username}g`);
        cy.findFieldByName('password')
          .type(user.password);
        cy.get('.fa')
          .click();
        cy.get('.error')
          .should('contains.text', 'Your username is invalid!');
        cy.get('.example')
          .should('contains.text', 'Login Page');
      });

      it('login with invalide password', () => {
        cy.findFieldByName('username')
          .type(user.username);
        cy.findFieldByName('password')
          .type(user.password + '1');
        cy.get('.fa')
          .click();
        cy.get('.error')
          .should('contains.text', 'Your password is invalid!');
        cy.get('.example')
          .should('contains.text', 'Login Page');
      });

      it('Successful logout', () => {
        cy.findFieldByName('username')
          .type(user.username);
        cy.findFieldByName('password')
          .type(user.password);
        cy.get('.fa')
          .click();
        cy.get('.success')
          .should('contains.text', 'You logged into a secure area!');
        cy.get('.subheader')
          .should('contains.text', 'Welcome to the Secure Area. When you are done click logout below');
        cy.get('.radius')
          .click()
          cy.get('.success')
          .should('contains.text', 'You logged out of the secure area!');
          cy.get('.example')
          .should('contains.text', 'Login Page')
      });


  });
