/// <reference types="cypress" />
const username = 'tomsmith';
const password = 'SuperSecretPassword!';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to login with existing data', () => {
    cy.get('[name="username"]')
      .type(username);
    cy.get('[name="password"]')
      .type(password);
    cy.get('[type="submit"]').contains('Login')
      .click();
    cy.get('.subheader')
      .should('contain.text', 'Welcome to the Secure Area.');
  });

  it('should not provide ability to login with invalid username', () => {
    cy.get('[name="username"]')
      .type('tomsmit');
    cy.get('[name="password"]')
      .type(password);
    cy.get('[type="submit"]').contains('Login')
      .click();
    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should not provide ability to login with invalid password', () => {
    cy.get('[name="username"]')
      .type(username);
    cy.get('[name="password"]')
      .type('uperSecretPasswor');
    cy.get('[type="submit"]').contains('Login')
      .click();
    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!');
  });

  it('should provide an ability to logout', () => {
    cy.get('[name="username"]')
      .type(username);
    cy.get('[name="password"]')
      .type(password);
    cy.get('[type="submit"]').contains('Login')
      .click();
    cy.get('.subheader')
      .should('contain.text', 'Welcome to the Secure Area.');
    cy.get('[href="/logout"]').contains('Logout')
      .click();
    cy.get('[id="flash"]')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
