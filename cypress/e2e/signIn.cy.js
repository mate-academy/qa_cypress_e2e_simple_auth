/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should Login with valid creds', () => {
    /*  cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('.fa.fa-2x.fa-sign-in').click()  */
    cy.RegValidUser(username, password);
    cy.get('h2').should('contain.text', 'Secure Area');
  });

  it('should NOT Login with invalid Username', () => {
    /*  cy.get('#username').type(username + Math.floor(Math.random(1000)*100))
        //cy.log('Username', username + Math.floor(Math.random(1000)*100))
        cy.get('#password').type(password)
        cy.get('.fa.fa-2x.fa-sign-in').click()  */
    cy.RegValidUser(username + Math.floor(Math.random(1000) * 100), password);
    cy.get('.flash.error').should('contain.text', 'Your username is invalid!');
  });

  it('should NOT Login with invalid Password', () => {
    /*  cy.get('#username').type(username)
        cy.get('#password').type(password + Math.floor(Math.random(1000)*100))
        cy.get('.fa.fa-2x.fa-sign-in').click() */
    cy.RegValidUser(username, password + Math.floor(Math.random(1000) * 100));
    cy.get('.flash.error').should('contain.text', 'Your password is invalid!');
  });

  it('should Logout from the app', () => {
    /*  cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('.fa.fa-2x.fa-sign-in').click() */
    cy.RegValidUser(username, password);
    cy.get('.icon-2x.icon-signout').click();
    cy.get('.flash.success').should(
      'contain.text', 'You logged out of the secure area!');
  });
});
