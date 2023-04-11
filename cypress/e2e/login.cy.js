/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login")
  });

  it('Should login with valid creds ', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.flash.success').contains('You logged into a secure area!');
  });

  it('Should not login with invalid creds ', () => {
    cy.get('#username').type('Stadnyk');
    cy.get('#password').type('Qwertv!');
    cy.get('.radius').click();
    cy.get('.flash.error').contains('Your username is invalid!');
  });

  it('Should login with valid creds ', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.flash.success').contains('You logged into a secure area!');
    cy.get('.button.secondary.radius').click();
    cy.get('.flash.success').contains('You logged out of the secure area!');    
  });
});
