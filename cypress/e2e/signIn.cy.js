/* eslint-disable max-len */
/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide the ability to login with registered data', () => {
    cy.get('[name="username"]')
      .type(`${username}`);

    cy.get('[name="password"]')
      .type(`${password}`);

    cy.get('.radius').contains('Login')
      .click();

    cy.get('#flash-messages')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should not provide the ability to login with non-registered username', () => {
    const wrongUsername = 'eltest';

    cy.get('[name="username"]')
      .type(`${wrongUsername}`);

    cy.get('[name="password"]')
      .type(`${password}`);

    cy.get('.radius').contains('Login')
      .click();

    cy.get('#flash-messages')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should not provide the ability to login with non-registered password', () => {
    const wrongPassword = 'wrongSuperPassword';

    cy.get('[name="username"]')
      .type(`${username}`);

    cy.get('[name="password"]')
      .type(`${wrongPassword}`);

    cy.get('.radius').contains('Login')
      .click();

    cy.get('#flash-messages')
      .should('contain.text', 'Your password is invalid!');
  });

  it('should provide the ability to logout', () => {
    cy.get('[name="username"]')
      .type(`${username}`);

    cy.get('[name="password"]')
      .type(`${password}`);

    cy.get('.radius').contains('Login')
      .click();

    cy.get('.button').contains('Logout')
      .click();

    cy.get('#flash-messages')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
