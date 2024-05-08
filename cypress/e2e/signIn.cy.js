/// <reference types="cypress" />

describe('Sign In page', () => { 
  beforeEach (() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should provide an ability to log in', () => {
   cy.get ('#username').type('tomsmith');
   cy.get ('#password').type('SuperSecretPassword!');
   cy.get ('.fa'). click();
   cy.get ('#flash').should('contain.text',' You logged into a secure area!');
  });

  it('should not provide an ability to log in with invalid username', () => {
    cy.get ('#username').type('tomossmith');
    cy.get ('#password').type('SuperSecretPassword!');
    cy.get ('.fa'). click();
    cy.get ('#flash').should('contain.text','Your username is invalid');
   });

   it('should not provide an ability to log in with invalid password', () => {
    cy.get ('#username').type('tomsmith');
    cy.get ('#password').type('SupwwerSecretPassword!');
    cy.get ('.fa'). click();
    cy.get ('#flash').should('contain.text','Your password is invalid');
   });

   it('should provide an ability to log out', () => {
    cy.get ('#username').type('tomsmith');
    cy.get ('#password').type('SuperSecretPassword!');
    cy.get ('.fa'). click();
    cy.get ('#flash').should('contain.text','You logged into a secure area!');
    cy.get ('.icon-2x'). click();
    cy.get ('#flash').should('contain.text','You logged out of the secure area!');
   })
});

