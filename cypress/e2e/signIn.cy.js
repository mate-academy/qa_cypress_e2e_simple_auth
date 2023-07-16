/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  beforeEach(() => {
    cy.visit('/login');
    cy.url().should('include', '/login');
  });

  it('Login with valid creds', () => {
    cy.get('[id="username"]')
      .type(username);
    cy.get('[id="password"]')
      .type(password);
    cy.get('[type="submit"]')
      .click();
    cy.get('[class="flash success"]')
      .should('contain.text', 'You logged into a secure area!');
  });
  it('Login with invalid creds', () => {
    cy.get('[id="username"]')
      .type(username);
    cy.get('[id="password"]')
      .type(password + '1');
    cy.get('[type="submit"]')
      .click();
    cy.get('[class="flash error"]')
      .should('contain.text', 'Your password is invalid!');
  });
  it('Logout from the app', () => {
    cy.get('[id="username"]')
      .type(username);
    cy.get('[id="password"]')
      .type(password);
    cy.get('[type="submit"]')
      .click();
    cy.get('[href="/logout"]')
      .click();
    cy.get('[class="flash success"]')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
