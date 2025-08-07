/// <reference types="cypress" />

describe('Sign In page', () => {
  const VALID_USERNAME = 'tomsmith';
  const VALID_PASSWORD = 'SuperSecretPassword!';
  const INVALID_USERNAME = 'smith';
  const INVALID_PASSWORD = 'qwerty123';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid credentials', () => {
    cy.get('#username').type(VALID_USERNAME);
    cy.get('#password').type(VALID_PASSWORD);
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/secure');
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'You logged into a secure area!');
  });

  it('should not login with invalid username', () => {
    cy.get('#username').type(INVALID_USERNAME);
    cy.get('#password').type(VALID_PASSWORD);
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/login');
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'Your username is invalid!');
  });

  it('should not login with invalid password', () => {
    cy.get('#username').type(VALID_USERNAME);
    cy.get('#password').type(INVALID_PASSWORD);
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/login');
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'Your password is invalid!');
  });

  it('should logout successfully after login', () => {
    cy.get('#username').type(VALID_USERNAME);
    cy.get('#password').type(VALID_PASSWORD);
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/secure');
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'You logged into a secure area!');

    cy.get('a[href="/logout"]').click();

    cy.url().should('include', '/login');
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'You logged out of the secure area!');
  });
});
