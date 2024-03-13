/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  const username = 'tomsmith';

  it('should provide the ability to login', () => {
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('[type="submit"]')
      .click();

    cy.get('[href="/logout"]')
      .should('contain.text', 'Logout');
  });

  it('should prevent login with invalid username', () => {
    cy.get('#username')
      .type('Jsjkjk!fjkfhfj7233fggfgfsd');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('[type="submit"]')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should prevent login with invalid password', () => {
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type('q232rfsfefds');

    cy.get('[type="submit"]')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!');
  });

  it('should provide the ability to logout', () => {
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('[type="submit"]')
      .click();

    cy.get('[href="/logout"]')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
