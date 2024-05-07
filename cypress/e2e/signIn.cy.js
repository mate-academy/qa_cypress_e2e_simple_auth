/// <reference types="cypress" />

const username = 'tomsmith';
const password = 'SuperSecretPassword!';
const invalidUsername = 'tomsmith@123';
const invalidPassword = 'SuperSecretPassword$123';

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in with valid creds', () => {
    cy.login(username, password);
    cy.get('.fa-sign-in').click();
    cy.get('div[id="flash"]').contains('You logged into a secure area!')
    .should('be.visible');

  it('should provide an ability log in with invalid Password', () => {
    cy.login(username, invalidPassword);
    cy.get('.fa-sign-in').click();
    cy.get('div[id="flash"]').contains('Your password is invalid!')
    .should('be.visible');

  it('should provide an ability log in with invalid Username', () => {
   cy.login(username, invalidUsername);
   cy.get('.fa-sign-in').click();
   cy.get('div[id="flash"]').contains('Your username is invalid!')
   .should('be.visible');

 it('should provide an ability log out from the app', () => {
   cy.login(username, password);
   cy.get('.fa-sign-in').click();
   cy.get('div[id="flash"]').contains('You logged into a secure area!')
    .should('be.visible');
   cy.get('.icon-signout').click();
   cy.get('div[id="flash"]').contains('You logged out of the secure area!')
   .should('be.visible');
 })
  });
  });
  });
})