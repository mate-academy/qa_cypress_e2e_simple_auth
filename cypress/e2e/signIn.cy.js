/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
   });
  
  it('should login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password'). type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.url().should('not.include', '/login');
  });
  
  it('shouldnt login with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password'). type('1');
    cy.get('.fa').click();
    cy.get('.flash').should('contain', 'Your password is invalid');
  })
   it('shouldnt login with invalid username', () => {
    cy.get('#username').type('1');
    cy.get('#password'). type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.flash').should('contain', 'Your username is invalid');
  })
  
  it('should logout from the app', () => {
  cy.get('#username').type('tomsmith');
  cy.get('#password'). type('SuperSecretPassword!');
  cy.get('.fa').click();
  cy.get('.button').click();
  cy.url().should('include', '/login')
  })
})
