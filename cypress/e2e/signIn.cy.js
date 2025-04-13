/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should allow login with valid credentials ', () => {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.contains('.fa', 'Login').click();
    cy.get('#flash').should('be.visible');
    cy.contains('You logged into a secure area!').should('be.visible');
  });

  it('should allow login with invalid username', () => {
    const username = 'tomsmithinvalid';
    const password = 'SuperSecretPassword!';
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.contains('.fa', 'Login').click();
    cy.get('[id="flash-messages"]')
      .should('include.text', 'Your username is invalid!');
  });

  it('should allow login with invalid password', () => {
    const username = 'tomsmith';
    const password = 'invalidPassword!';
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.contains('.fa', 'Login').click();
    cy.get('[id="flash-messages"]')
      .should('include.text', 'Your password is invalid!');
  });

  it('should allow user to logout', () => {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.contains('.fa', 'Login').click();
    cy.get('[href="/logout"]').click();
    cy.get('[id="flash-messages"]')
      .should('include.text', 'You logged out of the secure area!');
  });
});
