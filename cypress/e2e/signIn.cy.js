/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in', () => {
    cy.url().should('include', '/login');

    cy.get('h2').should('contain.text', 'Login Page');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should not provide an ability to log in', () => {
    cy.url().should('include', '/login');

    cy.get('h2').should('contain.text', 'Login Page');
    cy.get('#username').type('tomsmi');
    cy.get('#password').type('SuperSecretPassword');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', ' Your username is invalid!');
  });

  it('should provide an ability to log out', () => {
    cy.url().should('include', '/login');

    cy.get('h2').should('contain.text', 'Login Page');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');

    cy.get('.button').contains('Logout').should('be.visible');
    cy.get('.button').click();

    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
