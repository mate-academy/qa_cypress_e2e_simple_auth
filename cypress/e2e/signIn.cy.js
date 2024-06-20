/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should log in with valid credentials', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('should show validation errors with invalid Username', () => {
    cy.get('#username').type(`${username}+1`);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('should show validation errors with invalid Password', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(`${password}+9`);
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain', 'Your password is invalid!');
  });

  it('should allows to logout', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.contains('.radius', 'Login').click();
    cy.contains('.button', 'Logout').click();
    cy.get('#flash')
      .should('contains.text', 'You logged out of the secure area!');
    cy.url().should('include', '/login');
  });
});
