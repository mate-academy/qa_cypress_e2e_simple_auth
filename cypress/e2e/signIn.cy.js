/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should have a correct url for login page', () => {
    cy.url().should('include', '/login');
  });

  it('should have a correct title', () => {
    cy.contains('h2', 'Login Page').should('exist');
  });

  it('should have an input with id username', () => {
    cy.get('#username').should('exist');
  });

  it('should have an input with id password', () => {
    cy.get('#password').should('exist');
  });

  it('should have a Login button', () => {
    cy.get('button.radius')
      .should('exist')
      .should('contain.text', 'Login');
  });

  it('should show an error for wrong user name', () => {
    cy.get('button.radius').click();
    cy.contains('#flash', 'Your username is invalid!');
  });

  it('should show an error for wrong password', () => {
    cy.getUserData().then(({ username, password }) => {
      cy.get('#username').type(username);
      cy.get('button.radius').click();
      cy.contains('#flash', 'Your password is invalid!');
    });
  });

  it('should successfully logged in', () => {
    cy.getUserData().then(({ username, password }) => {
      cy.get('#username').type(username);
      cy.get('#password').type(password);
      cy.get('button.radius').click();
      cy.url().should('include', '/secure');
      cy.contains('#flash', 'You logged into a secure area!');
    });
  });

  it('should successfully logged out', () => {
    cy.getUserData().then(({ username, password }) => {
      cy.get('#username').type(username);
      cy.get('#password').type(password);
      cy.get('button.radius').click();
      cy.url().should('include', '/secure');
      cy.get('.button').should('exist').should('contain.text', 'Logout');
      cy.get('[href="/logout"]').click();
      cy.contains('#flash', 'You logged out of the secure area!');
    });
  });
});
