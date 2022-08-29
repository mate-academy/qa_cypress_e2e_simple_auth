/// <reference types="cypress" />
describe('My second tests', () => {
    it('should log in with valid credentials and show confirmation message', () => {
      ///I couldn't handle cypress.config.js
      cy.visit('https://the-internet.herokuapp.com/login');
      
      cy.get('#username')
      .click()
      .type("tomsmith");

      cy.get('#password')
      .click()
      .type("SuperSecretPassword!");

      cy.get('.fa')
      .click();

      cy.get('#flash')
      .should('contain', "You logged into a secure area!");
    });

    it('shouldn\'t log in with invalid credentials but show an error message', () => {
        ///I couldn't handle cypress.config.js
        cy.visit('https://the-internet.herokuapp.com/login');
        
        cy.get('#username')
        .click()
        .type("HarryPotter");
  
        cy.get('#password')
        .click()
        .type("He-Shah-Hassa");
  
        cy.get('.fa')
        .click();

        cy.get('#flash')
        .should('contain', "Your username is invalid!");
      });

      it('should log out successfully and show confirmation message', () => {
        ///I couldn't handle cypress.config.js
        cy.visit('https://the-internet.herokuapp.com/login');

        cy.get('#username')
        .click()
        .type("tomsmith");
  
        cy.get('#password')
        .click()
        .type("SuperSecretPassword!");

        cy.get('.fa')
        .click();

        cy.get('.button')
        .click();

        cy.get('#flash')
        .should('contain', "You logged out of the secure area!");
      });  
  });