/// <reference types="cypress" />

const username = 'tomsmith';
const password = 'SuperSecretPassword!';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should allow user to log in with valid data', () => {
    cy.get('[id="username"]')
      .type(username);
    cy.get('[id="password"]')
      .type(password);
    cy.get('[type="submit"]')
      .click();

    cy.get('[class="flash success"]')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should not allow to log in with invalid username', () => {
    cy.get('[id="username"]')
      .type('username');
    cy.get('[id="password"]')
      .type(password);
    cy.get('[type="submit"]')
      .click();

    cy.get('[class="flash error"]')
      .should('contain.text', 'Your username is invalid');
  });

  it('should not allow to log in with invalid password', () => {
    cy.get('[id="username"]')
      .type(username);
    cy.get('[id="password"]')
      .type('fjfrbgekrjbg233');
    cy.get('[type="submit"]')
      .click();

    cy.get('[class="flash error"]')
      .should('contain.text', 'Your password is invalid');
  });

  it('should log out the user', () => {
    cy.get('[id="username"]')
      .type(username);
    cy.get('[id="password"]')
      .type(password);
    cy.get('[type="submit"]')
      .click();

    cy.url().should('include', 'secure');

    cy.contains('Logout')
      .click();

    cy.url().should('include', 'login');
  });
});
