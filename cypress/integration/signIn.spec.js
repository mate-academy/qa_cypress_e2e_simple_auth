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
      cy.findFieldById('username')
        .type(user.username);
      cy.findFieldById('password')
        .type(user.password);
      cy.get('.fa-sign-in')
        .click();
      cy.get('[id="flash"]')
        .should('contain.text', 'You logged into a secure area!');
      cy.get('[id="content"]')
        .should('contain.text', ' Secure Area');
      cy.get('[href="/logout"]')
        .click();
    });

    it('login with invalide username', () => {
        cy.findFieldById('username')
          .type(`${user.username}g`);
        cy.findFieldById('password')
          .type(user.password);
        cy.get('.fa-sign-in')
          .click();
        cy.get('[id="flash"]')
          .should('contain.text', 'Your username is invalid!');
        cy.get('[id="content"]')
          .should('contain.text', 'Login Page');
      });

      it('login with invalide password', () => {
        cy.findFieldById('username')
          .type(user.username);
        cy.findFieldById('password')
          .type(user.password + '1');
        cy.get('.fa-sign-in')
          .click();
        cy.get('[id="flash"]')
          .should('contain.text', 'Your password is invalid!');
        cy.get('[id="content"]')
          .should('contain.text', 'Login Page');
      });

      it('Successful logout', () => {
        cy.findFieldById('username')
          .type(user.username);
        cy.findFieldById('password')
          .type(user.password);
        cy.get('.fa-sign-in')
          .click();
        cy.get('[id="flash"]')
          .should('contain.text', 'You logged into a secure area!');
        cy.get('[id="content"]')
          .should('contain.text', ' Secure Area');
        cy.get('[href="/logout"]')
          .click();
        cy.get('[id="flash"]')
          .should('contain.text', 'You logged out of the secure area!');
        cy.get('[id="content"]')
          .should('contain.text', 'Login Page');
    });
  });
