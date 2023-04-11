/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should log in with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.get('#flash-messages').should('include.text', 'You logged into a secure area!');
  });
  it('should log out ', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.contains('.icon-signout', 'Logout').should('be.visible').click();
    cy.get('#flash').should('include.text', 'You logged out of the secure area!');
  });
  it('should not allow to log in with invalid Username', () => {
    cy.get('#username').type('tomsmith12');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.get('#flash').should('include.text', 'Your username is invalid!');
  });
  it('should not allow log in with invalid Password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword11!');
    cy.contains('button', 'Login').click();
    cy.get('#flash').should('include.text', 'Your password is invalid!');
  });
});
