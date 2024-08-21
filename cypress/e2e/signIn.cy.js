/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('Login with a valid account.', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area!')
  });

  it('Login with invalid username', () => {
    cy.get('#username').type('magnetic');
    cy.get('#password').type('SuperSecretPassword');
    cy.get('.fa').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!')
  });

  it('Login with invalid username', () => {
    cy.get('#username').type('tomsmit');
    cy.get('#password').type('qweqwe');
    cy.get('.fa').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!')
  });

  
  it('Logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.button').click();
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!')
  });
});
