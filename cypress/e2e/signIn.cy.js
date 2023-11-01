/// <reference types="cypress" />

describe('Sign In page', () => {
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in with valid credentials', () => {
    cy.get('#username')
      .type(validUsername);
    cy.get('#password')
      .type(validPassword);
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!')
      .should('be.visible');
  });

  it('should provide validation msg after logging in with inv username', () => {
    cy.get('#username')
      .type('validUsername');
    cy.get('#password')
      .type(validPassword);
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'Your username is invalid!')
      .should('be.visible');
  });

  it('should provide validation msg after logging in with inv pass', () => {
    cy.get('#username')
      .type(validUsername);
    cy.get('#password')
      .type('validPassword');
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'Your password is invalid!')
      .should('be.visible');
  });

  it('should provide an ability to log out', () => {
    cy.get('#username')
      .type(validUsername);
    cy.get('#password')
      .type(validPassword);
    cy.get('.radius')
      .click();
    cy.get('.button.secondary')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!')
      .should('be.visible');
  });
});
