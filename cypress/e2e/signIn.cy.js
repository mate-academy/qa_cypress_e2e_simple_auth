/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should have username field', () => {
    cy.get('[name="username"]').should('exist');
  });

  it('should have password field', () => {
    cy.get('[name="password"]').should('exist');
  });

  it('should have Login button', () => {
    cy.get('[type="submit"]').should('contain.text', 'Login');
  });

  it('should log in successfully with valid username and password', () => {
    cy.signIn(username, password);
    cy.get('.success').should('be.visible');
  });

  it('should show error message on ' +
      'log in with invalid username and password', () => {
    cy.signIn(username + 'Invalid', password + 'Invalid');
    cy.get('.error').should('be.visible');
  });

  it('should show log out button', () => {
    cy.signIn(username, password);
    cy.get('[href="/logout"]').should('be.visible');
  });

  it('should log out successfully', () => {
    cy.signIn(username, password);
    cy.get('[href="/logout"]').click();
    cy.get('.success').should('be.visible');
  });
});
