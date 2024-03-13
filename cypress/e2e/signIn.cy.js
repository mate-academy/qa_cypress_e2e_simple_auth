/* eslint-disable max-len */
/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide the ability to login with registered data', () => {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';

    cy.get('[name="username"]')
      .type(`${username}`);

    cy.get('[name="password"]')
      .type(`${password}`);

    cy.get('.radius').contains('Login')
      .click();
  });

  it('should not provide the ability to login with non-registered login', () => {
    const wrongUsername = 'eltest';
    const password = 'SuperSecretPassword!';

    cy.get('[name="username"]')
      .type(`${wrongUsername}`);

    cy.get('[name="password"]')
      .type(`${password}`);

    cy.get('.radius').contains('Login')
      .click();

    cy.get('#flash-messages')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should not provide the ability to login with non-registered login', () => {
    const username = 'tomsmith';
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
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';

    cy.get('[name="username"]')
      .type(`${username}`);

    cy.get('[name="password"]')
      .type(`${password}`);

    cy.get('.radius').contains('Login')
      .click();

    cy.get('.button').contains('Logout')
      .click();
  });
});
