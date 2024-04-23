/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide credentials for succcessful login', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('should notify about successful login and logout', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.get('.icon-2x').click();
    cy.get('#flash').should('contain', ' You logged out of the secure area!');
    cy.get('h2').should('contain', 'Login Page');
  });

  it('should validate invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('invalidPassword');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your password is invalid!');
  });

  it('should validate invalid username', () => {
    cy.get('#username').type('tomsmit');
    cy.get('#password').type('invalidPassword');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', ' Your username is invalid!');
  });
});
