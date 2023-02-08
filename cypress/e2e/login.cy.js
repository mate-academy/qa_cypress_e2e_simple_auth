/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login page should log in the user with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('Login with invalid username', () => {
    cy.get('#username').type('invalid Username');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('Login with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('test555');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your password is invalid!');
  });

  it('Should be able to Logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.button').click();
    cy.get('#flash').should('contain','You logged out of the secure area!');
  });
});
