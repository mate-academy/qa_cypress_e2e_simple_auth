/// <reference types="cypress" />

describe('Login page', () => {
   beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login')
   });

   it('Login with valid creds', () => {

      cy.get('#username')
         .type('tomsmith');

      cy.get('#password')
         .type('SuperSecretPassword!');

      cy.contains('button', 'Login')
         .click();

      cy.get('#flash')
         .contains('You logged into a secure area!');
   });

   it('Login with invalid Username', () => {

      cy.get('#username')
         .type('tomsmith123');

      cy.get('#password')
         .type('SuperSecret');

      cy.contains('button', 'Login')
         .click();

      cy.get('#flash')
         .contains('Your username is invalid!');
   });

   it('Login with invalid Password', () => {

      cy.get('#username')
         .type('tomsmith');

      cy.get('#password')
         .type('SuperSecret');

      cy.contains('button', 'Login')
         .click();

      cy.get('#flash')
         .contains('Your password is invalid!');
   });

   it('Logout from the app', () => {

      cy.get('#username')
         .type('tomsmith');

      cy.get('#password')
         .type('SuperSecretPassword!');

      cy.contains('button', 'Login')
         .click();

      cy.get('#flash')
         .contains('You logged into a secure area!');

      cy.get('.button')
         .click();

      cy.get('#flash')
         .contains('You logged out of the secure area!');
   });
});
