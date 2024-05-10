/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('Login with invalid username', () => {
    cy.get('#username').type('tomsmit');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();

    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('Login with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword');
    cy.get('.fa').click();

    cy.get('#flash').should('contain', 'Your password is invalid!');  
  });

  it('Logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');

    cy.url().should('eq', 'https://the-internet.herokuapp.com/secure');

    cy.get('.button').contains('Logout').should('be.visible');

    cy.get('.button').click();

    cy.get('#flash').should('contain', 'You logged out of the secure area!');

    cy.url().should('eq', 'https://the-internet.herokuapp.com/login');
  });
});
