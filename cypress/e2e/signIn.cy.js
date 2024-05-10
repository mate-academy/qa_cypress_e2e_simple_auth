/// <reference types="cypress" />

describe('Sign in page', () => {
  beforeEach(() => {
    cy.visit('/login')
  })
  
  it('Login with valid creds', () => {
      cy.get('h2')
      .should('contain.text','Login Page')
      cy.get('#username')
      .type('tomsmith')
      cy.get('#password')
      .type('SuperSecretPassword!')
      cy.get('.fa')
      .click();
      cy.get('#flash')
      .should('contain.text','You logged into a secure area!')
    });
  it('Login with invalid creds', () => {
      cy.get('h2')
      .should('contain.text','Login Page')
      cy.get('#username')
      .type('tomsm')
      cy.get('#password')
      .type('SuperSecretPad!')
      cy.get('.fa')
      .click();
      cy.get('#flash')
      .should('contain.text','Your username is invalid!')
      });
    it('Logout from the app', () => {
      cy.get('h2')
      .should('contain.text','Login Page')
      cy.get('#username')
      .type('tomsmith')
      cy.get('#password')
      .type('SuperSecretPassword!')
      cy.get('.fa')
      .click();
      cy.get('.button').click();
      cy.get('#flash')
      .should('contain.text','You logged out of the secure area!')
      });
}); 
