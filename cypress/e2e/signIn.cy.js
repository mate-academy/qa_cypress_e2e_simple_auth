/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Should login succesfuly', () => {
    //login with proprer credentials
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('i', ' Login').click();
    cy.contains('#flash', 'You logged into a secure area!').should('be.visible');
    //logout
    cy.get('a[href="/logout"]').click();
    //login with oncorrect credentials
    cy.get('#username').type('tom-smith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('i', ' Login').click();
    cy.contains('#flash', 'Your username is invalid!').should('be.visible');
  });
});
