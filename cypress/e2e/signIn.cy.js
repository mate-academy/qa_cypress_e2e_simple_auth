/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io');
  });
  it('should provide an ability to log in with valid credentials', () => {
    cy.get('.navbar a')
      .contains('Sign in')
      .click();
    cy.get('input[type="email"]')
      .type('kredki@kredki.com');
    cy.get('input[type ="password"]')
      .type('kredki');
    cy.get('button[type="submit"]')
      .click();
    cy.get('.navbar')
      .should('contain', 'kredki');
  });
  it(`shouldn't provide the ability to login with invalid credentials`, () => {
    cy.get('.navbar a')
      .contains('Sign in')
      .click();
    cy.get('input[type="email"]')
      .type('kredkivillain@kredki.com');
    cy.get('input[type ="password"]')
      .type('kredkibadguy');
    cy.get('button[type="submit"]')
      .click();
    cy.get('ul')
      .should('contain', 'email or password is invalid');
  });
  it('should provide an ability to log out after succesfull login', () => {
    cy.get('.navbar a')
      .contains('Sign in')
      .click();
    cy.get('input[type="email"]')
      .type('kredki@kredki.com');
    cy.get('input[type ="password"]')
      .type('kredki');
    cy.get('button[type="submit"]')
      .click();
    cy.get('.navbar a')
      .contains('Settings')
      .click();
    cy.get('button')
      .contains('Or click here to logout.')
      .click();
    cy.get('.navbar')
      .should('not.contain', 'kredki');
  });
});
