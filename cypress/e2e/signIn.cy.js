/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  it('should allowed to login with valid credentials', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.fa').click();

    cy.url().should('include', '/secure');
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should not allowed to login with invalid Username', () => {
    cy.get('#username').type(username + 'q');
    cy.get('#password').type(password);
    cy.get('.fa').click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should not allowed to login with invalid Password', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password + 'q');
    cy.get('.fa').click();

    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });

  it('should allowed to logout from the app', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.fa').click();

    cy.get('[href="/logout"]').click();
    cy.url().should('include', '/login');
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
  });
  
});
