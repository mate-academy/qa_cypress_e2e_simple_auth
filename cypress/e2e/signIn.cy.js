/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');
    cy.url().should('include', '/login');
  });

  it('should allow to login with valid creds', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.radius').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.url().should('include', '/secure');
  });

  it('should not allow to login with invalid username', () => {
    cy.get('#username').type(`${username}a`);
    cy.get('#password').type(password);
    cy.get('.radius').click();

    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('should not allow to login with invalid password', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(`${password}1`);
    cy.get('.radius').click();

    cy.get('#flash').should('contain', 'Your password is invalid!');
  });

  it('should allow to logout from the site', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.radius').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.url().should('include', '/secure');

    cy.get('.button').click();

    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
