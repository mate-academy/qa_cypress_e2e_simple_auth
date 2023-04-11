/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('login with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('.radius', 'Login').click();
    cy.get('#flash').should('contains.text','You logged into a secure area!');
  });

  it('login with invalid Username', () => {
    cy.get('#username').type('invalidUsername');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('.radius', 'Login').click();
    cy.get('#flash').should('contains.text', 'Your username is invalid!');
  });

  it('login with invalid Password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('invalidPassword');
    cy.contains('.radius', 'Login').click();
    cy.get('#flash').should('contains.text','Your password is invalid!');
  });

  it('logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('.radius', 'Login').click();
    cy.get('#flash').should('contains.text','You logged into a secure area!');
    cy.contains('.button.secondary.radius', 'Logout').click();
    cy.get('#flash').should('contains.text','You logged out of the secure area!');
  })
});
