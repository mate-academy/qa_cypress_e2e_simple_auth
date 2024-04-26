/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = 'nottomsmith';
  const invalidPassword = 'notSuperSecretPassword!';

  it('should allow user to login with valid credentials', () => {
    cy.get('#username')
      .type(validUsername);
    cy.get('#password')
      .type(validPassword);
    cy.get('.radius')
      .click();
    cy.get('#flash').contains('You logged into a secure area!');
  });

  it('should allow user to logout', () => {
    cy.get('#username')
      .type(validUsername);
    cy.get('#password')
      .type(validPassword);
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .contains('You logged into a secure area!');
    cy.get('.button')
      .click();
    cy.get('#flash')
      .contains('You logged out of the secure area!');
  });

  it('should allow user to login with valid credentials', () => {
    cy.get('#username')
      .type(validUsername);
    cy.get('#password')
      .type(invalidPassword);
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .contains('Your password is invalid!');
  });

  it('should allow user to login with valid credentials', () => {
    cy.get('#username')
      .type(invalidUsername);
    cy.get('#password')
      .type(validPassword);
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .contains('Your username is invalid!');
  });
});
