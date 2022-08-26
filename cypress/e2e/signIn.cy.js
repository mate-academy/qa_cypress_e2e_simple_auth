/// <reference types="cypress" />
describe('login page', () => {
    it('Successfully Login with valid creds', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
  
      cy.get('[id="username"]')
        .type('tomsmith');
  
      cy.get('[id="password"]')
        .type('SuperSecretPassword!');
  
      cy.get('[class="fa fa-2x fa-sign-in"]')
        .click();
  
      cy.get('[class="flash success"]')
        .should('contain', ' You logged into a secure area!');
    });
  
    it('Login with invalid creds', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
  
      cy.get('[id="username"]')
        .type('Bavovna');
  
      cy.get('[id="password"]')
        .type('NotSecretPassword!');
  
      cy.get('[class="fa fa-2x fa-sign-in"]')
        .click();
  
      cy.get('[class="flash error"]')
        .should('contain', ' Your username is invalid!');
    });
  
    it('Logout from the app', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
  
      cy.get('[id="username"]')
        .type('tomsmith');
  
      cy.get('[id="password"]')
        .type('SuperSecretPassword!');
  
      cy.get('[class="fa fa-2x fa-sign-in"]')
        .click();
  
      cy.get('[class="flash success"]')
        .should('contain', ' You logged into a secure area!');
  
      cy.get('[class="icon-2x icon-signout"]')
        .click();
  
      cy.get('[class="flash success"]')
        .should('contain', ' You logged out of the secure area!');
    });
  });
  
  