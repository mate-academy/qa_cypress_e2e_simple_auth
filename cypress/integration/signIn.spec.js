/// <reference types="cypress" />

const { exists } = require("fs");

describe('Login page', () => {
      beforeEach (() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  const user = {
   username: 'tomsmith',
   password: 'SuperSecretPassword!'
  };
   
    it('should login user with valid credentials', () => {
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

    it('should throw an error if the username is invalide', () => {
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

      it('should throw an error if the password is invalide', () => {
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

      it('should logout user', () => {
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
