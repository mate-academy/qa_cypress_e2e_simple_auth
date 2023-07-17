/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Login with valid creds', () => {
    cy.get('#username')
      .type(username);
    cy.get('#password')
      .type(password);
    cy.get('[type="submit"]')
      .click();
    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });
  it('Login with invalid username', () => {
    cy.get('#username')
      .type(username + '1');
    cy.get('#password')
      .type(password);
    cy.get('[type="submit"]')
      .click();
    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });
  it('Login with invalid password', () => {
    cy.get('#username')
      .type(username);
    cy.get('#password')
      .type(password + '1');
    cy.get('[type="submit"]')
      .click();
    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!');
  });
  it('Logout from the app', () => {
    cy.get('#username')
      .type(username);
    cy.get('#password')
      .type(password);
    cy.get('[type="submit"]')
      .click();
    cy.get('[href="/logout"]')
      .click();
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
