/// <reference types="cypress" />

describe('Login page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  beforeEach(() => {
    cy.visit('/login')    
  });

  it('should provide an ability to log in', () => {
    cy.get('[id="username"]')
      .type(username)
    cy.get('[id="password"]')
      .type(password);
    cy.contains('.fa-sign-in', 'Login')
      .click();
    cy.url('/secure');
    cy.get('.subheader')
      .should('contain.text', 'Welcome to the Secure Area. When you are done click logout below.');
  });
  it('should error for an invalid username', () => {
    cy.get('[id="username"]')
      .type(username + '!')
    cy.get('[id="password"]')
      .type(password);
    cy.contains('.fa-sign-in', 'Login')
      .click();
    cy.get('.flash.error')
      .should('contain.text', 'Your username is invalid!');
  });
  it('should error for an invalid password', () => {
    cy.get('[id="username"]')
      .type(username)
    cy.get('[id="password"]')
      .type(password + '!');
    cy.contains('.fa-sign-in', 'Login')
      .click();
    cy.get('.flash.error')
      .should('contain.text', 'Your password is invalid!');
  });
  it('should provide an ability to log out', () => {
    cy.get('[id="username"]')
      .type(username)
    cy.get('[id="password"]')
      .type(password);
    cy.contains('.fa-sign-in', 'Login')
      .click();
    cy.contains('.icon-signout', 'Logout')
      .click();
    cy.url('/login');
    cy.get('.flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});

