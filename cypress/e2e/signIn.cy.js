/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should allow to login with valid creds', () => {
    cy.get('#username')
      .type(username);
    cy.get('#password')
      .type(password);
    cy.contains('button', 'Login')
      .click();

    cy.url().should('include', '/secure');
    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should not allow to login with invalid username', () => {
    cy.get('#username')
      .type(username + '123');
    cy.get('#password')
      .type(password);
    cy.contains('button', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should not allow to login with invalid password', () => {
    cy.get('#username')
      .type(username);
    cy.get('#password')
      .type(password + '123');
    cy.contains('button', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!');
  });

  it('should allow to logout', () => {
    cy.get('#username')
      .type(username);
    cy.get('#password')
      .type(password);
    cy.contains('button', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');

    cy.contains('a', 'Logout')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
