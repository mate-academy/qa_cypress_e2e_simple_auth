/// <reference types="cypress" />

describe('Sign In page', () => {
  const password = 'SuperSecretPassword!';
  const username = 'tomsmith';
  beforeEach(() => {
    cy.visit('/login');
  });
  it('should allow user to login with valid creds', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('[type="submit"]').click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
    cy.url().should('include', '/secure');
  });
  it('should not allow user to login with invalid username', () => {
    cy.get('#username').type(username + 1);
    cy.get('#password').type(password);
    cy.get('[type="submit"]').click();
    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
    cy.url().should('include', '/login');
  });
  it('should not allow user to login with invalid password', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password + 1);
    cy.get('[type="submit"]').click();
    cy.get('#flash')
      .should('contain', 'Your password is invalid!');
    cy.url().should('include', '/login');
  });
  it('should allow user to logout from the app', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('[type="submit"]').click();
    cy.get('[href="/logout"]').click();
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
    cy.url().should('include', '/login');
  });
});
