/// <reference types="cypress" />

describe('Sign In page', () => {
  const password = 'SuperSecretPassword!';
  const username = 'tomsmith';
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  it('should allow user to login with valid creds', () => {
    cy.get('[id="username"]').type(username);
    cy.get('[id="password"]').type(password);
    cy.get('[type="submit"]').click();
    cy.get('[class="flash success"]')
      .should('contain', 'You logged into a secure area!');
    cy.get('[class="flash success"]')
      .should('contain', 'You logged into a secure area!');
    cy.url().should('include', '/secure');
  });
  it('should not allow user to login with invalid creds', () => {
    cy.get('[id="username"]').type(username + 1);
    cy.get('[id="password"]').type(password + 1);
    cy.get('[type="submit"]').click();
    cy.get('[class="flash error"]')
      .should('contain', 'Your username is invalid!');
    cy.url().should('include', '/login');
  });
  it('should allow user to logout from the app', () => {
    cy.get('[id="username"]').type(username);
    cy.get('[id="password"]').type(password);
    cy.get('[type="submit"]').click();
    cy.get('[href="/logout"]').click();
    cy.get('[class="flash success"]')
      .should('contain', 'You logged out of the secure area!');
    cy.url().should('include', '/login');
  });
});
