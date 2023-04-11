/// <reference types="cypress" />

describe('Login page', () => {
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login')
  });

  it('Login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type(password);
    cy.get('.fa.fa-2x.fa-sign-in').click();
    cy.get('.flash.success').should('contain.text', 'You logged into a secure area!');
    cy.get('.button.secondary.radius').click();
    cy.get('.flash.success').should('contain.text', 'You logged out of the secure area!');
    cy.get('[id="username"]').type('tomsmith123');
    cy.get('[id="password"]').type(password);
    cy.get('.fa.fa-2x.fa-sign-in').click();
    cy.get('.flash.error').should('contain.text', 'Your username is invalid!');
  });

  it('Login with invalid creds', () => {
    cy.get('#username').type('tomsmith123');
    cy.get('#password').type(password);
    cy.get('.fa.fa-2x.fa-sign-in').click();
    cy.get('.flash.error').should('contain.text', 'Your username is invalid!');
  });
});
