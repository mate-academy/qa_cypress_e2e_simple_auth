/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');
    cy.url().should('include', '/login');
  });

  it('should allow to login user with credential data', () => {
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password);

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should allow error message with invalid username', () => {
    cy.get('#username')
      .type(username + '1');

    cy.get('#password')
      .type(password);

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should allow error message with invalid password', () => {
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password + '1');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!');
  });

  it('should allow to logout user', () => {
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password);

    cy.get('.radius')
      .click();

    cy.url()
      .should('include', '/secure');

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');

    cy.get('.button')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
